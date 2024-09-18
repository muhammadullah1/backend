const { Category } = require("../models");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { title, description } = req.body;

      await Category.create({
        title,
        description,
      });

      res.send({
        success: true,
        message: "category added successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
