const config = require("../../config");
const stripe = require("stripe")(config.get("stripe.secretKey"));

module.exports = {
  createPaymentIntent: async (amount, currency) => {
    const response = await stripe.paymentIntents.create({ amount, currency });
    const { id, client_secret } = response;
    return { id, clientSecret: client_secret };
  },
  getPaymentIntent: async ({ intentId }) => {
    return await stripe.paymentIntents.retrive({ intentId });
  },
};
