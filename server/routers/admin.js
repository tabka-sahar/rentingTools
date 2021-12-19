const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");


router.route("/admin")
	.get(AdminController.find_all_tools)
	

router.route("/feed/:_id")
.delete(AdminController.delete_tool);


module.exports = router;