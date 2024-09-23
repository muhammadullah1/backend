const { Category } = require("../models");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { title, description } = req.body;

      const category = await Category.findOne({ title });
      if (category) throw new ApiError(409, "Category already exists");

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
  get: async (req, res, next) => {
    try {
      const categories = await Category.find();

      res.send({
        success: true,
        message: "categories list",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },
};
