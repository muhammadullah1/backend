const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/auth");
const { login } = require("../validations/schemas/auth");
const validate = require("../middlewares/validate");

router.post("/login", validate(login), controller.login);
module.exports = router;
