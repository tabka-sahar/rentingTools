var express = require("express");
const Mongoose = require("mongoose");
const user = require("./models/users")
var cors = require("cors")
var app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Mongoose.Promise=global.Promise;
Mongoose.connect("mongodb://localhost:27017/rentingTools")
app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
