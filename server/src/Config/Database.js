const sqlite3 = require("sqlite3").verbose();
const path = require("path");


const dbPath = path.join(__dirname, "../../BuyerForeSight.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("Database connection failed:", err.message);
  else console.log("Database Connected Successfully.");
});


db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);




module.exports = db;