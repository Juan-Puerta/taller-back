var express = require("express");
var router = express.Router();
const users_controller = require("../controllers/users");

router.get("/", (req, res, next) => {
  res.send("Hello users");
});

router.get("/:id", (req, res, next) => {
  res.send("Hello user" + req.params.id);
});

router.post("/", users_controller.create);

module.exports = router;
