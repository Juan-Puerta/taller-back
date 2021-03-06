var express = require("express");
var router = express.Router();
const users_controller = require("../controllers/users");
const auth = require("../middleware/auth");
const deledit = require("../middleware/deleteAndEditUser");
const schemaUser = require("../schemas/schemaUser");
const validate = require("../middleware/validate");

router.post("/register", validate(schemaUser.user), users_controller.create);
router.post("/login", users_controller.login);

router.get("/", users_controller.index);
router.put("/:id", auth, deledit, users_controller.update);
router.delete("/:id", auth, deledit, users_controller.destroy);

module.exports = router;
