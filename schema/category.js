const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      allowNull: false,
    },
    description: {
      type: String,
      allowNull: true,
    },
    subCategories: [
      {
        type: ObjectId,
        ref: "subCategories",
      },
    ],
  },
  {
    timestamps: true,
  }
);

exports.Category = mongoose.model("Category", categorySchema, "categories");
