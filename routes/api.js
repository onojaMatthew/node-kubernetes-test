const express = require("express");
const messageControls = require("../controls/message");

const router = express.Router();

router.post("/message", messageControls.postMessage);
router.get("/message", messageControls.getMessage);
router.put("/message/:id", messageControls.updateMessage);
router.delete("/message/:id", messageControls.deleteMessage);

module.exports = router;
