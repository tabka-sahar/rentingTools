var mongoose = require("mongoose");
var User = require("../models/users");
var bcrypt = require("bcrypt");

module.exports = {
	find_all_users: async (req, res) => {
		try {
			const users = await User.find().select("-password");
			res.send(users);
		} catch (err) {
			res.send(err);
		}
	},
	create_a_user: async (req, res) => {
		try {
			const user = req.body;
			const password = await bcrypt.hash(user.password, 12);
			user.password = password;
			User.create(user);
			res.send("user added successfully");
		} catch (err) {
			res.send(err);
		}
	},
};
