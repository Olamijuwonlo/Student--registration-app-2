// backend/server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Registration route
app.post("/api/students", upload.single("photo"), (req, res) => {
  const { name, matricNumber, gender, age, department, level } = req.body;
  const passport = req.file ? req.file.filename : null;

  console.log("Student Registered:");
  console.log({ name, matricNumber, gender, age, department, level, passport });

  res.json({ message: "Student registered successfully", status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});