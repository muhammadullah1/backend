const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const ApiError = require("../utils/ApiError");
module.exports = async (req, res, next) => {
  try {
    // const { userId } = req.params;
    const authToken = req.header("Authorization");
    const secret = config.get("signIn.jwtSecret");

    if (!authToken) {
      throw new ApiError(400, "Authorization Header is required");
    }
    const decoded = jwt.verify(authToken, secret);
    const userId = decoded.user._id;    
    const admin = await userModel.getUserBy({ _id: userId, role: "admin" });
    if (!admin) {
      throw new ApiError(400, "Invalid user");
    }
    if (!admin._id.equals(userId)) {
      throw new ApiError(400, "Invalid token");
    }

    req.user = admin;
    next();
  } catch (err) {
    next(err);
  }
};
