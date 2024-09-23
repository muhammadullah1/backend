const Joi = require("joi");
module.exports = {
  createProduct: {
    body: Joi.object({
      title: Joi.string().required().label("name"),
      description: Joi.string().required().label("description"),
      price: Joi.number().required().label("price"),
      categoryId: Joi.string().required().label("categoryId"),
      images: Joi.array().label("images"),
    }),
  },
};