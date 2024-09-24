const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config");
const ApiError = require("../utils/ApiError");

module.exports = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization");
    const secret = config.get("signIn.jwtSecret");

    if (!authToken) throw new ApiError(400, "Authorization Header is required");
    const decoded = jwt.verify(authToken, secret);

    const userId = decoded.user._id;    
    let user = await User.findOne({ _id: userId, role: "user" });
    if (!user) {
      throw new ApiError(400, "Invalid user");
    }
    if (!user._id.equals(userId)) {
      throw new ApiError(400, "Invalid token");
    }
    
    user = user.toJSON();
    delete user.password;
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
