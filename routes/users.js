var express = require("express");
var router = express.Router();
const users_controller = require("../controllers/users");

router.post("/register", users_controller.create);
router.post("/login", users_controller.login);

module.exports = router;
