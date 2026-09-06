const db = require("../db/queries");

async function messagesGet(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { messages: messages });
}

function formGet(req, res) {
    res.render("form");
}

async function messagePost(req, res) {
    const userName = req.body.name;
    const messageText = req.body.messageText;
    await db.addMessage(userName, messageText);

    res.redirect("/");
}

async function messageGet(req, res) {
    const id = Number(req.params.id);
    const message = await db.getMessageById(id);
    res.render("message", {message: message});
}

module.exports = {
    messageGet,
    formGet,
    messagePost,
    messagesGet
}