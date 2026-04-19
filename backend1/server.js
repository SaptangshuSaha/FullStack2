const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy users
const users = {
  user: { password: "1234", role: "USER" },
  admin: { password: "admin123", role: "ADMIN" }
};

// Middleware for basic auth
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).send("No credentials");

  const base64 = auth.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString();
  const [username, password] = decoded.split(":");

  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).send("Invalid credentials");
  }

  req.user = user;
  next();
}

// USER route
app.get("/api/user/profile", authMiddleware, (req, res) => {
  res.json({
    message: "User Profile Access Granted"
  });
});

// ADMIN route
app.get("/api/admin/dashboard", authMiddleware, (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).send("Access Denied");
  }

  res.json({
    message: "Admin Dashboard Access Granted"
  });
});

app.listen(8080, () => {
  console.log("RBAC Server running on http://localhost:8080");
});