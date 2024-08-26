const express = require("express");
const router = express.Router({ mergeParams: true });
const authenticateAdmin = require("../middlewares/authenticateAdmin");
const productRouter = require("./product");
const categoryRouter = require("./category");

router.use("/products", authenticateAdmin, productRouter);
router.use("/categories", authenticateAdmin, categoryRouter);

module.exports = router;
