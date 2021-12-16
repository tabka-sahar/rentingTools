var express = require("express");
const Mongoose = require("mongoose");
const user = require("./models/users")
var cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/login', async (req, res) => {
	try {
	  let {username, password} = req.body
	  console.log(username);
	  let user1 = await user.findOne({username})

	  if (!user1) {
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
  })




Mongoose.Promise=global.Promise;
Mongoose.connect("mongodb://localhost:27017/rentingTools")
app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
