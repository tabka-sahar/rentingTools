const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");


router.route("/f")
.post(UserController.forgot);

router
	.route("/")
	.get(UserController.find_all_users)
	.post(UserController.create_a_user);

	
router.route("/login")
.post(UserController.login_a_user);

router.route("/forgot/update")
.post(UserController.forgotUpdate)


module.exports = router;
