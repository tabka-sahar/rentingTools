const express = require("express");
const router = express.Router();
const ToolController = require("../controllers/tools");

router
	.route("/")
	.get(ToolController.find_all_tools)
	.post(ToolController.create_a_tool);

module.exports = router;
