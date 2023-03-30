const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true,
	},
	availableQuantity: {
		type: Number,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	cartQuantity: {
		type: Number,
	},
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
