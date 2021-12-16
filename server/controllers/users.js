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
	login_a_user:async (req, res) => {
		try {
		  let {username, password} = req.body
		  console.log(username);
		  let user = await User.findOne({username})
			console.log(user);
		  if (!user) {
			throw "User doesn't exist"
		  }
		  let isMatch = bcrypt.compareSync(password, user.password);
		  if (!isMatch) {
			throw "Wrong password"
		  }
		  let token = jwt.sign(
			{
			  username: user.username,
			  _id: user._id
			},
			"jwtSecret",
			{
			  expiresIn: "1h"
			}
		  );
		  res.send({
			user,
			token: token
		  })
		}
		catch(error) {
		  res.send(error)
		}
	  }
	
};
