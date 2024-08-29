const subCategoryModel = require("../models/sub_category");
const ApiError = require("../utils/ApiError");

module.exports = {
  create: async (req, res, next) => {
    try {
      const {
        body: { title, description },
        params: { categoryId },
      } = req;

      await subCategoryModel.create({
        title,
        description,
        categoryId,
      });

      res.send({
        success: true,
        message: "subcategory added successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
