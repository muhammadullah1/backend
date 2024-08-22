const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/user");
const validate = require("../middlewares/validate");
const { createUser, updateUser } = require("../validations/schemas/user");

router.post("/", validate(createUser), controller.get);
router.post("/", validate(createUser), controller.create);
router.post("/", validate(createUser), controller.update);
router.post("/", validate(createUser), controller.delete);

module.exports = router;
