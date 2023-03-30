const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
	cardQuantity: {
		type: Number,
	},
});

const Cart = mongoose.model("cartItem", cartSchema);

module.exports = Cart;
