const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      allowNull: false,
      unique: true,
    },
    description: {
      type: String,
      allowNull: true,
    },
    price: {
      type: Number,
      allowNull: false,
    },
    category: {
      type: ObjectId,
      ref: "categories",
      validate: {
        validator: async function(categoryId) {
          const category = await mongoose.model("Category").findById(categoryId);
          return !!category;
        },
        message: "Category not found",
      },
    },
    user: {
      type: ObjectId,
      ref: "users",
      validate: {
        validator: async function(userId) {
          const user = await mongoose.model("User").findById(userId);
          return !!user;
        },
        message: "User not found",
      },
    },
    images: [String],
    status: {
      type: String,
      enum: ["draft", "live", "hidden", "archived"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

exports.Product = mongoose.model("Product", productSchema, "products");
