const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = "mysecretkey";

// Dummy user
const user = {
  username: "admin",
  password: "1234"
};

// 🔐 LOGIN API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// 🔒 PROTECTED API
app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(403).send("Token required");

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET);
    res.send("Protected data: Welcome " + verified.username);
  } catch {
    res.status(401).send("Invalid token");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});