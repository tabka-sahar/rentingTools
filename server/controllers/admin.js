var mongoose = require("mongoose");
var Tools = require("../models/tools");

module.exports = {
    find_all_tools: async (req, res) => {
        try {
            const users = await Tools.find()
            res.send(users);
        } catch (err) {
            res.send(err);
        }
    },
    delete_tool: async (req, res) => {
        const id = req.params._id
        console.log(id);
        try {
            
            const data = await Tools.findByIdAndRemove(id)
            res.send(data);
        }
        catch (err) {
            console.log(err)
            res.send(err);
        }


    }
}