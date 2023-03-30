const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Products");
const uuidpackage = require("uuid");
const cors = require("cors");
const uuid = uuidpackage.v4;

app.use(express.json());
app.use(cors());
mongoose
	.connect(
		"mongodb://mongo:XuhIxCHOgNnk4l5y2iq7@containers-us-west-198.railway.app:7537/",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "community-db",
		}
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Error connecting to MongoDB", err));

app.get("/", (req, res) => {
	res.send("hello").status(200);
});

app.get("/getProducts", async (req, res) => {
	let data = await Product.find({});
	res.json(data).status(200);
});

app.post("/createProduct", async (req, res) => {
	const { itemName, availableQuantity, cartQuantity } = req.body;
	console.log(req.body);
	const id = uuid();
	try {
		const newProduct = new Product({
			itemName,
			availableQuantity,
			id,
			cartQuantity,
		});
		let output = await newProduct.save();
		console.log(output);
		res.json(output);
	} catch (e) {
		console.log(e);
		res.send(e);
	}
});

app.post("/removeItemFromCart", (req, res) => {
	res.status(200);
});

app.listen(3000, console.log("server running on port 3000"));
