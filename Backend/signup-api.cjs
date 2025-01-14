const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // React frontend ka URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Agar cookies ya credentials ki zarurat ho
  preflightContinue: false, // Preflight request ko continue na hone dein
  optionsSuccessStatus: 204, // Preflight response code set karein
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight request ko handle karne ke liye

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connection to PDCA Database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "abhi@123", // MySQL root password
  port: "3306", // MySQL root port id
  database: "pdca_db", // MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error(`Error Connection ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${db.threadId}`);
});

// Route to get SignUp Details
app.get("/signup", (req, res) => {
  const signUp =
    "SELECT id, first_name, last_name, email, contact, password FROM sign_up";

  db.query(signUp, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Route to get SignUp details by ID
app.get("/signup/:ID", (req, res) => {
  const { ID } = req.params;
  const signUp =
    "SELECT id, first_name, last_name, email, contact, password FROM sign_up WHERE id = ?";

  db.query(signUp, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "No Result Found" });
    }
    res.status(200).json({ signUp: result[0] });
  });
});

// Route to add member by POST method
app.post("/addmember", (req, res) => {
  const { first_name, last_name, email, contact, password } = req.body;
  const error = [];

  // Validation for Sign Up
  if (!first_name) {
    error.push({ field: "first_name", message: "First Name is required" });
  }
  if (!email) {
    error.push({ field: "email", message: "Email is required" });
  } else {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error.push({
        field: "email",
        message: "Email format is invalid",
      });
    }
  }

  if (!contact) {
    error.push({ field: "contact", message: "Contact No. is required" });
  } else {
    // Validate contact number length
    if (contact.length > 10) {
      error.push({
        field: "contact",
        message: "Contact No. must not exceed 10 digits",
      });
    }
    // Ensure contact only contains digits
    if (!/^\d+$/.test(contact)) {
      error.push({
        field: "contact",
        message: "Contact No. must contain only digits",
      });
    }
  }

  if (!password) {
    error.push({ field: "password", message: "Password is required" });
  } else {
    // Check for password complexity
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;
    if (!passwordRegex.test(password)) {
      error.push({
        field: "password",
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
      });
    }
  }

  if (error.length > 0) {
    return res.status(400).json({ error });
  }

  const query = `INSERT INTO sign_up(first_name, last_name, email, contact, password)
    VALUES(?,?,?,?,?)`;

  db.query(
    query,
    [first_name, last_name, email, contact, password],

    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res
        .status(200)
        .json({ message: "Sign Up Successfully", id: result.insertId });
    }
  );
});

// Route to Delete Member by POST method
app.post("/delete/:ID", (req, res) => {
  const { ID } = req.params;

  const DelMember = "DELETE FROM sign_up WHERE id = ? ";

  db.query(DelMember, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: `Database error, ${err}` });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Member not deleted" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  });
});

// Route to Update Member
app.post("/update/:ID", (req, res) => {
  const { ID } = req.params; // Extract ID from URL parameters
  const { first_name, last_name, email, contact, password } = req.body; // Extract fields from request body

  // Validate ID
  if (!ID) {
    return res.status(400).json({ message: "ID is required in the URL." });
  }

  // Ensure at least one field to update is provided
  if (!first_name && !last_name && !email && !contact && !password) {
    return res.status(400).json({ message: "No fields provided to update." });
  }

  // Validate email format if provided
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
  }

  // Validate contact length if provided
  if (contact) {
    if (contact.length > 10) {
      return res
        .status(400)
        .json({ message: "Contact No. must not exceed 10 digits." });
    }
    if (!/^\d+$/.test(contact)) {
      return res
        .status(400)
        .json({ message: "Contact No. must contain only digits." });
    }
  }

  // Build dynamic query to include only provided fields
  let fieldsToUpdate = [];
  let values = [];

  if (first_name) {
    fieldsToUpdate.push("first_name = ?");
    values.push(first_name);
  }
  if (last_name) {
    fieldsToUpdate.push("last_name = ?");
    values.push(last_name);
  }
  if (email) {
    fieldsToUpdate.push("email = ?");
    values.push(email);
  }
  if (contact) {
    fieldsToUpdate.push("contact = ?");
    values.push(contact);
  }
  if (password) {
    fieldsToUpdate.push("password = ?");
    values.push(password);
  }

  // Join fields to create the SET clause of the SQL query
  const setClause = fieldsToUpdate.join(", ");
  const updateQuery = `UPDATE sign_up SET ${setClause} WHERE id = ?`;
  values.push(ID); // Add ID as the last parameter

  // Execute the query
  db.query(updateQuery, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    // Check if any rows were updated
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Member not updated. ID not found." });
    }

    res.status(200).json({ message: "Updated Successfully" });
  });
});

//login api
app.post("/login", (req, res) => {
  const loginQuery =
    "SELECT * FROM sign_up WHERE `email` = ? AND `password` = ?";
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  db.query(loginQuery, [email, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ message: "Server error, please try again" });
    }

    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id, // Provide only necessary data
          email: user.email,
          name: user.name,
        },
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
