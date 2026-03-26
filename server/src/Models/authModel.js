const db = require("../Config/Database");

module.exports = {
  findByEmail: (email, callback) => {
    db.get("SELECT * FROM users WHERE email = ?", [email], callback);
  },

  CreateUser: (userName, email, hashedPassword, callback) => {
    db.run(
      "INSERT INTO users (user_name, email, password) VALUES(?, ?, ?)",
      [userName, email, hashedPassword],
      callback
    );
  },

  CheckExistingUser: (email, callback) => {
    db.get("SELECT * FROM users WHERE email = ?", [email], callback);

  },
};