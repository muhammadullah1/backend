const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const subscriptionTransectionSchema = new mongoose.Schema(
  {
    stripePaymentId: { type: String, allowNull: true },
    user: { type: ObjectId, ref: 'users' },
    paymentAmount: { type: Number, allowNull: false },
    paymentStatus: { type: String, enum: ['paid', 'pending', 'failed'] },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

exports.SubscriptionTransection = mongoose.model("SubscriptionTransection", subscriptionTransectionSchema, "subscription_transections");