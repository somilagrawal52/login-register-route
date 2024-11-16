const express = require("express");
const router = express.Router();

router.post("/logout", (req, res) => {
  res.json({ message: "Successfully logged out" });
});

module.exports = router;
