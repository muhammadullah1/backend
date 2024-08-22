const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    stripeSubscriptionId: { type: String, allowNull: true },
    subscriptionStatus: { type: String, enum: ['active', 'inactive', 'pending'] },
    user: { type: ObjectId, ref: 'users' },
    subscriptionType: { type: String, enum: ['monthly', 'yearly'] },
    paymentMethod: { type: String, enum: ['stripe'] },
  },
  {
    timestamps: true,
  }
);

exports.Service = mongoose.model("Service", serviceSchema, "services");