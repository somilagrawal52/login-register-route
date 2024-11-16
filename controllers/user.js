const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function loginroute(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send("Email and password are required");
  } else {
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Incorrect email or password." });
      }
      const correctPassword = await user.matchPassword(password);
      if (!correctPassword) {
        return res
          .status(400)
          .json({ message: "Incorrect email or password." });
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET);

      res.json({ message: "Successfully logged in", token });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

async function registerroute(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
      salt: "sa",
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
module.exports = {
  loginroute,
  registerroute,
};
