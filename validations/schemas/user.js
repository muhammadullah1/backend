const Joi = require("joi");
module.exports = {
    createUser: {
        body: Joi.object({
            firstName: Joi.string().required().label("first name"),
            lastName: Joi.string().required().label("last name"),
            email: Joi.string().email({ tlds: { allow: false } }).required().label("email address"),
            password: Joi.string().required().label("password"),
        })
    },
    updateUser: {
        body: Joi.object({
            firstName: Joi.string().optional().label("first name"),
            lastName: Joi.string().optional().label("last name"),
            password: Joi.string().optional().label("password"),
        })
    },
  }