const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

async function messagesGet(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { messages: messages });
}

function formGet(req, res) {
	res.render("form");
}

async function messageGet(req, res) {
	const id = Number(req.params.id);
	const message = await db.getMessageById(id);
	res.render("message", { message: message });
}

const validateMessage = [
	body("name")
		.trim()
		.isAlpha()
		.withMessage("User name must only contain letters")
		.isLength({ min: 1, max: 200 })
		.withMessage("User name must be minimum 1 and maximum 200 characters"),
	body("messageText")
		.trim()
		.isLength({ min: 1, max: 200 })
		.withMessage("Message must be minimum 1 and maximum 200 characters"),
];

const messagePost = [
	validateMessage,
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("form", {
				errors: errors.array(),
				name: req.body.name,
				messageText: req.body.messageText,
			});
		}

		const { name, messageText } = matchedData(req);
		await db.addMessage(name, messageText);

		res.redirect("/");
	},
];

module.exports = {
	messageGet,
	formGet,
	messagePost,
	messagesGet,
};
