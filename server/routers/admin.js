const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router
	.route("/")
	.get(AdminController.find_all_tools)
	

router.route("/login")
.delete(AdminController.delete_tool)
.post(AdminController.login_an_admin);


module.exports = router;