const Joi = require("joi");
module.exports = {
  createOrder: {
    body: Joi.array().items(
      Joi.object({
        productId: Joi.string().required().label("productId"),
        quantity: Joi.number().integer().required().label("quantity"),
      })
    ).required().label("orderDetails"),
  },
};