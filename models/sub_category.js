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
    categoryId: {
      type: ObjectId,
      ref: 'Category',
      required: true,
      validate: {
        validator: async function(categoryId) {
          const category = await mongoose.models.Category.findById(categoryId);
          if (!category) {
            throw new Error('Invalid category ID');
          }
        },
        message: 'Invalid category ID'
      }
    },
  },
  {
    timestamps: true,
  }
);

exports.SubCategory = mongoose.model("SubCategory", subCategorySchema, "subCategories");
