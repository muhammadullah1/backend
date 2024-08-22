const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const productRouter = require("./");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/products", authRouter);

module.exports = router;
