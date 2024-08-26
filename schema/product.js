const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      allowNull: false,
    },
    description: {
      type: String,
      allowNull: true,
    },
    price: {
      type: Number,
      allowNull: false,
    },
    category: { type: ObjectId, ref: "categories" },
    subCategory: { type: ObjectId, ref: "subCategories" },
    images: [String],
    user: { type: ObjectId, ref: "users" },
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
