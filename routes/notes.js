const express = require("express");
const router = express.Router();
const note_contoller = require("../controllers/notes");

router.get("/", note_contoller.index);
router.get("/:id", note_contoller.show);
router.post("/", note_contoller.create);
router.put("/:id", note_contoller.update);
router.delete("/:id", note_contoller.destroy);

module.exports = router;
