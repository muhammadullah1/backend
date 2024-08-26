const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const adminRouter = require("./admin");
const productRouter = require("./product");

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);

module.exports = router;
