const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
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
