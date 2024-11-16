const express = require("express");
const router = express.Router();
const { loginroute } = require("../controllers/user");

const loginRouter = router.post("/login", loginroute);

module.exports = loginRouter;
