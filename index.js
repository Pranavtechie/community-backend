const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://pranavtechie:kdgoNmUn10Y1Ew47@creators-db.gwx6m09.mongodb.net/community?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Connected to MongoDB Atlas"))
	.catch((err) => console.error("Error connecting to MongoDB Atlas", err));

app.get("/", (req, res) => {
	res.send("hello").status(200);
});

app.post("/addItemToCart", (req, res) => {
	res.status(200);
});

app.post("/removeItemFromCard", (req, res) => {
	res.status(200);
});
app.listen(3000, console.log("server running on port 3000"));
