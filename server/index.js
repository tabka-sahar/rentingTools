var express = require("express");
var mongoose = require("mongoose");
var users = require("./controllers/users")
var app = express();

const port = 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);

Mongoose.Promise=global.Promise;
Mongoose.connect("mongodb://localhost:27017/rentingTools")
app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
