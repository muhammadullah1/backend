const userModel = require("../models/user");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const existingUser = await userModel.getUserBy({ email: email });
      if (existingUser) {
        throw new ApiError(409, "Email already exists");
      }
      const user = await userModel.createUser({
        firstName,
        lastName,
        email,
        password,
      });

      res.send({
        success: true,
        message: "User registered successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
