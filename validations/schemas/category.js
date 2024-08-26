const Joi = require("joi");

module.exports = {
  createCategory: {
    body: Joi.object({
      title: Joi.string().required().label("category name"),
      description: Joi.string().required().label("category descriptioin"),
    }),
  },
};