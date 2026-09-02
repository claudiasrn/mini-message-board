const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(8080, () => {
	console.log("Server running on port 8080");
});
