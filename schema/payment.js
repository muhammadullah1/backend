const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const paymentSchema = new mongoose.Schema(
  {
    buyer: { type: ObjectId, ref: "users" },
    seller: { type: ObjectId, ref: "users" },
    product: { type: ObjectId, ref: "products" },
    quantity: { type: Number, allowNull: false },
    totalPrice: { type: Number, allowNull: false },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
    },
    paymentMethod: { type: String, enum: ["stripe"] },
    paymentStatus: { type: String, enum: ["paid", "pending", "failed"] },
  },
  {
    timestamps: true,
  }
);

exports.Payment = mongoose.model("Payment", paymentSchema, "payments");
