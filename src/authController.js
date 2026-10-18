// Authentication Controller
const { formatResponse } = require('./utils');

function loginUser(req, res) {
  const { username, password } = req.body || {};
  if (username === "admin" && password === "admin123") {
    return res.status(200).json(formatResponse("success", { token: "sample-jwt-token" }, "Login berhasil"));
  }
  return res.status(401).json(formatResponse("error", null, "Kredensial tidak valid"));
}

module.exports = { loginUser };