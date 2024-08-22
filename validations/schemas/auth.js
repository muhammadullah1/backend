const Joi = require("joi");
module.exports = {
    login: {
        body: Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required().label("email address"),
            password: Joi.string().required().label("password"),
        })
    },
  }