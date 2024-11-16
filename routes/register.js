const express = require("express");
const router = express.Router();
const { registerroute } = require("../controllers/user");

router.post("/register", registerroute);

module.exports = router;
