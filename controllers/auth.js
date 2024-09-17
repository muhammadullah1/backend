const ApiError = require("../utils/ApiError");
const { User } = require('../models');
const bcrypt = require("bcrypt");
const { encrypt } = require("../utils/token");
const config = require("../config");

module.exports = {
  login: async (req, res, next) => {
    try {
      let { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        throw new ApiError(400, "User doesn't exists");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new ApiError(400, "Incorrect Password.");
      }
      user = user.toObject();
      delete user.password;
      const signInToken = encrypt(user, config.get("signIn.jwtSecret"));
      res.status(200).send({
        success: true,
        message: "User logged in successfully.",
        data: { accessToken: signInToken, user },
      });
    } catch (err) {
      next(err);
    }
  },
};
