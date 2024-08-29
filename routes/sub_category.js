const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/sub_category");
const validate = require("../middlewares/validate");
const { createCategory } = require("../validations/schemas/category");

router.post("/", validate(createCategory), controller.create);
module.exports = router;
