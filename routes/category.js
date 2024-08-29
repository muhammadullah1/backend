const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/category");
const validate = require("../middlewares/validate");
const { createCategory } = require("../validations/schemas/category");
const subCategoryRouter = require("./sub_category");

router.post("/", validate(createCategory), controller.create);
router.use("/:categoryId", subCategoryRouter);
module.exports = router;
