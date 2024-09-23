const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/category");
const validate = require("../middlewares/validate");
const { createCategory } = require("../validations/schemas/category");

router.route("/")
.post(validate(createCategory), controller.create)
.get(controller.get);

module.exports = router;