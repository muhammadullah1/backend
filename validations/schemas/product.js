const Joi = require("joi");
module.exports = {
  createProduct: {
    body: Joi.object({
      title: Joi.string().required().label("name"),
      description: Joi.string().required().label("description"),
      price: Joi.number().required().label("price"),
      category: Joi.string().required().label("category"),
      subCategory: Joi.string().required().label("sub category"),
      images: Joi.array().label("images"),
    }),
  },
};