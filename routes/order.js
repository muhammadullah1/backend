const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/order");
const validate = require("../middlewares/validate");
const { createOrder } = require("../validations/schemas/order");

router.route("/")
.get(controller.get)
.post(validate(createOrder), controller.create);

module.exports = router;
