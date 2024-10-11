const { Product, Category } = require("../models");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const {
        body: { title, description, price, categoryId, images },
        user,
      } = req;
      
      const category = await Category.findOne({ _id: categoryId });
      if (!category) throw new ApiError(400, "invalid category");
      const product = await Product.findOne({ title });
      if (product) throw new ApiError(409, "product already exists");
      if (!user) throw new ApiError(409, "invalid user");


      await Product.create({
        title,
        description,
        price,
        category,
        images,
        user: user._id,
      });

      res.send({
        success: true,
        message: "product added successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });

      res.send({
        success: true,
        message: "product found successfully",
        data: product,
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
