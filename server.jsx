// server/index.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5001;

// Middleware
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  };
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  app.use(express.json());


// Enquiry form endpoint
app.post("/api/enquiry", async(req, res) => {
    const { name, email, phone, interest, time, message} = req.body;
    try {

      await db.query("INSERT INTO enquiries(name, email, phone, interest, time, message) VALUES (?, ?, ?, ?, ?, ?)", [name, email, phone, interest, time, message]);
      console.log("succesfully enter")
      res.json({ message: "User added" });
    } catch (err) {
      console.error("❌ DB Error:", err);
      res.status(500).json({ error: "Database error" });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
