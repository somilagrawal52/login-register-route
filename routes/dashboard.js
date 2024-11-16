const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.post("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your dashboard!",
    user: req.user,
    data: {
      msg: "hey from dashboard",
    },
  });
});

module.exports = router;
