const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware Configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Use env variable for flexibility
    methods: ["GET", "POST", "PUT", "DELETE"], // Include all necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Enable cookies/authentication if needed
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database Connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Kis766626@", // Replace with environment variable for security
    port: "3306",
    database: "pdca_db",
});

db.connect((err) => {
    if (err) {
        console.error(`Database connection error: ${err.stack}`);
        return;
    }
    console.log(`Connected to database as id ${db.threadId}`);
});

// Routes

// Get all SignUp details
app.get("/signup", (req, res) => {
    const signUpQuery = "SELECT id, first_name, last_name, email, contact, password FROM sign_up";

    db.query(signUpQuery, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed", details: err });
        }
        res.json(results);
    });
});

// Get SignUp details by ID
app.get("/signup/:ID", (req, res) => {
    const { ID } = req.params;
    const signUpQuery = "SELECT id, first_name, last_name, email, contact, password FROM sign_up WHERE id = ?";

    db.query(signUpQuery, [ID], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "No Result Found" });
        }
        res.status(200).json(result[0]);
    });
});

// Add a new member
app.post("/addmember", (req, res) => {
    const { first_name, last_name, email, contact, password } = req.body;
    const errors = [];

    // Validation
    if (!first_name) errors.push({ field: "first_name", message: "First Name is required" });
    if (!email) {
        errors.push({ field: "email", message: "Email is required" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({ field: "email", message: "Invalid email format" });
    }
   
    if (!contact) {
        errors.push({ field: "contact", message: "Contact No. is required" });
    } else {
        // Check if contact number is exactly 10 digits
        if (contact.length !== 10) {
            errors.push({ field: "contact", message: "Contact No. must be exactly 10 digits" });
        }
        // Ensure contact only contains digits
        if (!/^\d+$/.test(contact)) {
            errors.push({ field: "contact", message: "Contact No. must contain only digits" });
        }
    }
    
    
    if (!password) {
        errors.push({ field: "password", message: "Password is required" });
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(password)) {
        errors.push({
            field: "password",
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
        });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const insertQuery = `
        INSERT INTO sign_up (first_name, last_name, email, contact, password)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(insertQuery, [first_name, last_name, email, contact, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(201).json({ message: "Sign Up Successful", id: result.insertId });
    });
});

// Delete a member by ID
app.delete("/delete/:ID", (req, res) => {
    const { ID } = req.params;
    const deleteQuery = "DELETE FROM sign_up WHERE id = ?";

    db.query(deleteQuery, [ID], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Member not found or already deleted" });
        }
        res.status(200).json({ message: "Deleted Successfully" });
    });
});

// Update a member by ID
app.put("/update/:ID", (req, res) => {
    const { ID } = req.params;
    const { first_name, last_name, email, contact, password } = req.body;

    if (!ID) {
        return res.status(400).json({ message: "ID is required in the URL." });
    }

    const fieldsToUpdate = [];
    const values = [];

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

    if (fieldsToUpdate.length === 0) {
        return res.status(400).json({ message: "No fields provided to update." });
    }

    const updateQuery = `UPDATE sign_up SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
    values.push(ID);

    db.query(updateQuery, values, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Member not found or no updates made." });
        }
        res.status(200).json({ message: "Updated Successfully" });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
