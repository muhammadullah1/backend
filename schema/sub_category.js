const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      allowNull: false,
    },
    description: {
      type: String,
      allowNull: true,
    },
    categoryId: { type: ObjectId, ref: 'categories' }
  },
  {
    timestamps: true,
  }
);

exports.SubCategory = mongoose.model("SubCategory", subCategorySchema, "subCategories");
