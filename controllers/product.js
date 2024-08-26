const productModel = require("../models/product");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { title, description, price, category, subCategory, images } = req.body;

      await productModel.createProduct({
        title,
        description,
        price,
        category,
        subCategory,
        images,
      });

      res.send({
        success: true,
        message: "product added successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
