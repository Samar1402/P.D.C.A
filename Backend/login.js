// // const express = require("express");
// const router = express.Router();

// // Login route
// router.post("/", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }

//   const query =
//     "SELECT id, email, first_name, last_name FROM sign_up WHERE email = ? AND password = ?";
//   req.db.query(query, [email, password], (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     if (results.length === 0)
//       return res.status(401).json({ message: "Invalid email or password" });

//     const user = results[0];
//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         id: user.id,
//         email: user.email,
//         firstName: user.first_name,
//         lastName: user.last_name,
//       },
//     });
//   });
// });

// module.exports = router;
