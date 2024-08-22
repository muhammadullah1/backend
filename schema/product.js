const mongoose = require("mongoose");

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
    category: { type: ObjectId, ref: 'categories' },
    subCategory: { type: ObjectId, ref: 'subCategories' },
    seller: { type: ObjectId, ref: 'users' },
    images: [String],
    status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    category: { type: ObjectId, ref: 'categories' },
    user: { type: ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);

exports.Product = mongoose.model('Product', productSchema, 'products');