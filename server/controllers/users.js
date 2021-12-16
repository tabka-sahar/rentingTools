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
			const { username, fullname, email, phone_number, password } =
				req.body;
			const user = new User({
				username,
				fullname,
				email,
				phone_number,
				email,
				password,
			});
			if (!username || !fullname || !email || !phone_number || !password)
				return res
					.status(400)
					.json({ msg: "Please fill in all fields!" });
			const useer = await User.findOne({ email });
			if (useer)
				return res
					.status(400)
					.json({ msg: "This email already exists" });
			const doc = await user.save();

			res.status(200).send(useer);
		} catch (error) {
			res.status(404).json({ message: "error", error: "error" });
		}
	},
	login_a_user: async (req, res) => {
		try {
			let { username, password } = req.body;
			console.log(username);
			let user = await User.findOne({ username });
			console.log(user);
			if (!user) {
				throw "User doesn't exist";
			}
			let isMatch = bcrypt.compareSync(password, user.password);
			if (!isMatch) {
				throw "Wrong password";
			}
			let token = jwt.sign(
				{
					username: user.username,
					_id: user._id,
				},
				"jwtSecret",
				{
					expiresIn: "1h",
				}
			);
			res.send({
				user,
				token: token,
			});
		} catch (error) {
			res.send(error);
		}
	},
	find_a_user_and_update: async (req, res) => {
		let id = req.params.userId;
		let user = req.boby;
		User.findByIdAndUpdate(id, user)
			.then(() => res.send(`${user.fullname} infos are up to date`))
			.catch((error) => res.send(error));
	},
};
