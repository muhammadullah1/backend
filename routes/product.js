const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/product");
const validate = require("../middlewares/validate");
const { createProduct } = require("../validations/schemas/product");

router.route("/")
.get(controller.get)
.post(validate(createProduct), controller.create);
router.post("/", validate(createProduct), controller.create);

module.exports = router;
