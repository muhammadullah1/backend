const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/user");
const validate = require("../middlewares/validate");
const { createUser, updateUser } = require("../validations/schemas/user");
const orderRouter = require("./order");
const authenticateUser = require("../middlewares/authenticateUser");

router.use("/orders", authenticateUser, orderRouter);
router.post("/", validate(createUser), controller.create);

module.exports = router;
