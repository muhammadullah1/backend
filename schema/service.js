const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const serviceSchema = new mongoose.Schema(
  {
    stripeSubscriptionId: { type: String, allowNull: true },
    subscriptionStatus: {
      type: String,
      enum: ["active", "inactive", "pending"],
    },
    user: { type: ObjectId, ref: "users" },
    subscriptionType: { type: String, enum: ["monthly", "yearly"] },
    paymentMethod: { type: String, enum: ["stripe"] },
    status: {
      type: String,
      enum: ["draft", "submitted", "live", "hidden", "archived"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

exports.Service = mongoose.model("Service", serviceSchema, "services");
