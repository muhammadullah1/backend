const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema(
  {
    buyer: { type: ObjectId, ref: "users" },
    paymentIntentId: { type: String, allowNull: false },
    totalPrice: { type: Number, allowNull: false },
    status: { type: String, enum: ["pending", "shipped", "delivered", "cancelled"]},
    paymentMethod: { type: String, enum: ["stripe"] },
    paymentStatus: { type: String, enum: ["paid", "pending", "failed"] },
    orderDetails: { 
      title: { type: String, allowNull: false},
      quantity: { type: Number, allowNull: false},
      price: { type: Number, allowNull: false},
     },
  },
  {
    timestamps: true,
  }
);

exports.Order = mongoose.model("Order", orderSchema, "orders");
