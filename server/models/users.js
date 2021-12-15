const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: { tyoe: String, unique: true },
		fullname: String,
		adrress: String,
		connected: { type: Boolean, default: false },
		email: {
			type: String,
			unique: true,
		},
		phone_number: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			minlength: [8, "Minimum password length is 8 characters"],
		},
		fav_category: Array,

		profile_image_uri: { type: String, default: "" },
		verified: { type: Boolean, default: true },
	},
	{ timestamps: true },
	{ versionKey: false }
);

module.exports = mongoose.model("User", userSchema);

