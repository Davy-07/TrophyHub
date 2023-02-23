const express = require("express");
const router = express.Router();
const { register, verify, signin, demo } = require("../controllers/auth");
const authController = require("../middleware/auth");

router.post("/register", register);
router.post("/verify", verify);
router.post("/signin", signin);
router.get("/demo", authController, demo);
module.exports = router;
