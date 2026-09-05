const express = require("express");
const router = express.Router();

const messages = [
	{ text: "Hi there!", user: "Amando", added: new Date() },
	{ text: "Hello World!", user: "Charles", added: new Date() },
];

router.get("/", (req, res) => {
	res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
	res.render("form");
});

router.post("/new", (req, res) => {
	const userName = req.body.name;
	const messageText = req.body.messageText;
	messages.push({ text: messageText, user: userName, added: new Date() });

	res.redirect("/");
});

router.get("/message/:id", (req, res) => {
	const index = Number(req.params.id);
	res.render("message", { message: messages[index], id: index });
});

module.exports = router;
