const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/product");
const validate = require("../middlewares/validate");
const { createProduct } = require("../validations/schemas/product");

router.route("/")
.get(controller.get)
.post(validate(createProduct), controller.create);
router.get("/:id", controller.getOne);
router.get("/relatedproducts/:id", controller.getRelaatedProducts);

module.exports = router;
