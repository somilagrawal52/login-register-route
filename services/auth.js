require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = "$uperman@123";

function createtokenforuser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileimageurl: user.profileimageurl,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.SECRET);
  return token;
}

function validatetoken(token) {
  const payload = jwt.verify(token, process.env.SECRET);
  return payload;
}

module.exports = {
  createtokenforuser,
  validatetoken,
};
