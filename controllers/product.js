const { Product } = require("../models");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const {
        body: { title, description, price, category, subCategory, images },
        user,
      } = req;

      await Product.create({
        title,
        description,
        price,
        category,
        subCategory,
        images,
        user: user._id
      });

      res.send({
        success: true,
        message: "product added successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  get: async (req, res, next) => {
    try {
      const products = await Product.find();

      res.send({
        success: true,
        message: "products list",
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },
};
