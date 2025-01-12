// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql2");
// const cors = require("cors");

// const signupRoutes = require("./signup");
// const loginRoutes = require("./login");

// const app = express();

// // CORS Configuration
// const corsOptions = {
//   origin: "http://localhost:5173", // React frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Preflight request handler

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Database Connection
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "Samar@1402",
//   port: "3306",
//   database: "pdca_db",
// });

// db.connect((err) => {
//   if (err) {
//     console.error(`Error connecting to DB: ${err.stack}`);
//     process.exit(1);
//   }
//   console.log(`Connected to DB as id ${db.threadId}`);
// });

// // Inject database connection into routes
// app.use((req, res, next) => {
//   req.db = db;
//   next();
// });

// // Routes
// app.use("/signup", signupRoutes);
// app.use("/login", loginRoutes);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
