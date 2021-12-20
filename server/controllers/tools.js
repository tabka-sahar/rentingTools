var mongoose = require("mongoose");
var Tools = require("../models/tools");

module.exports = {
	find_all_tools: async (req, res) => {
		try {
			const tools = await Tools.find().select("").populate("user");
			res.send(tools);
		} catch (err) {
			res.send(err);
		}
	},
	create_a_tool: (req, res) => {
		try {
			const tool = req.boby;
			Tools.create(tool);
			res.send("tool added");
		} catch (err) {
			res.send(err);
		}
	},
	find_use_tools: async (req, res) => {
		try {
			let id = req.params.id;
			const tools = await Tools.find({ user: id }).select("");
			res.send(tools);
		} catch (err) {
			res.send(err);
		}
	},
};
