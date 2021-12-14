var express = require("express");
var app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
