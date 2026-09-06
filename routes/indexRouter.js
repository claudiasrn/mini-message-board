const { Router } = require("express");
const messagesController = require("../controllers/messagesController")
const router = Router();

router.get("/", messagesController.messagesGet);
router.get("/new", messagesController.formGet);
router.post("/new", messagesController.messagePost);
router.get("/message/:id", messagesController.messageGet);

module.exports = router;
