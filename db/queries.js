const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function getMessageById(id) {
	const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
		id,
	]);
	return rows;
}

async function addMessage(user, text) {
	await pool.query(
		'INSERT INTO messages ("user", text, added ) VALUES ($1, $2, $3)',
		[user, text, new Date()],
	);
}

module.exports = { getAllMessages, getMessageById, addMessage };
