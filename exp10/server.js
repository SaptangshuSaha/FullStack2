const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

// ✅ Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// ✅ THIS IS CRITICAL (server won't stay alive without it)
app.listen(5000, () => {
  console.log("Server running on port 5000");
});