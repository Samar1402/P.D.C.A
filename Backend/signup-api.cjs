const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const multer = require('multer');
const path = require('path');

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

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
  }
});
const upload = multer({ storage: storage });

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight request ko handle karne ke liye

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connection to PDCA Database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Samar@1402", // MySQL root password
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

// Route to get UPCOMING MATCH Details
app.get("/upcomingMatch", (req, res) => {
  const upComingMatch =
    "SELECT id,first_team, second_team, date, time, location FROM upcoming_match";

  db.query(upComingMatch, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Route to get UPCOMING MATCH Details by ID
app.get("/upcomingMatch/:ID", (req, res) => {
  const { ID } = req.params;
  const upComingMatch =
    "SELECT id,first_team, second_team, date, time, location FROM upcoming_match WHERE id = ?";

  db.query(upComingMatch, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "No Result Found" });
    }
    res.status(200).json({ upComingMatch: result[0] });
  });
});

// Route to ADD UPCOMING MATCH by POST method
app.post("/addmatch", (req, res) => {
  const { first_team, second_team, date, time, location } = req.body;
  const errors = [];

  // Validate first_team
  if (
    !first_team ||
    typeof first_team !== "string" ||
    first_team.trim() === ""
  ) {
    errors.push({
      field: "first_team",
      message: "First team name is required and must be a non-empty string.",
    });
  }

  // Validate second_team
  if (
    !second_team ||
    typeof second_team !== "string" ||
    second_team.trim() === ""
  ) {
    errors.push({
      field: "second_team",
      message: "Second team name is required and must be a non-empty string.",
    });
  }

  // Ensure teams are not the same
  if (first_team && second_team && first_team.trim() === second_team.trim()) {
    errors.push({
      field: "teams",
      message: "First and second teams cannot be the same.",
    });
  }

  // Validate date
  if (!date || isNaN(Date.parse(date))) {
    errors.push({ field: "date", message: "A valid date is required." });
  }

  // Validate time (e.g., HH:MM format)
  const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
  if (!time || !timeRegex.test(time)) {
    errors.push({
      field: "time",
      message: "A valid time (HH:MM) is required.",
    });
  }

  // Validate location
  if (!location || typeof location !== "string" || location.trim() === "") {
    errors.push({
      field: "location",
      message: "Location is required and must be a non-empty string.",
    });
  }

  // If there are validation errors, return them
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Query to insert match data
  const query = `INSERT INTO upcoming_match(first_team, second_team, date, time, location) VALUES (?, ?, ?, ?, ?)`;

  db.query(
    query,
    [first_team.trim(), second_team.trim(), date, time, location.trim()],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(200);
      setTimeout(() => {
        res.json({
          message: "Match added successfully",
          id: result.insertId,
        });
      }, 500);
    }
  );
});

// Route to Delete UPCOMING MATCH DETAIL by POST method
app.delete("/deleteUpcomingMatch/:ID", (req, res) => {
  const { ID } = req.params;

  // Check if the ID is a valid number
  if (!ID || isNaN(ID)) {
    return res.status(400).json({ message: "Invalid ID provided" });
  }

  const DelUpComingMatch = "DELETE FROM upcoming_match WHERE id = ?";

  db.query(DelUpComingMatch, [ID], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: `Database error: ${err.message}` });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Record not deleted, ID not found" });
    }

    // Return success response with a message
    res.status(200).json({ success: true, message: "Deleted successfully" });
  });
});

// Route to Update UPCOMING MATCH DETAIL
app.post("/updatematch/:ID", (req, res) => {
  const { ID } = req.params; // Extract ID from URL parameters
  const { first_team, second_team, date, time, location } = req.body; // Extract fields from request body

  // Validate ID
  if (!ID) {
    return res.status(400).json({ message: "ID is required in the URL." });
  }

  // Ensure at least one field to update is provided
  if (!first_team && !second_team && !date && !time && !location) {
    return res.status(400).json({ message: "No fields provided to update." });
  }

  // Validation to ensure no leading spaces in fields
  const validateNoLeadingSpaces = (field, fieldName) => {
    if (field && field.trimStart() !== field) {
      return `${fieldName} should not have leading spaces.`;
    }
    return null;
  };

  const validations = [
    validateNoLeadingSpaces(first_team, "First Team"),
    validateNoLeadingSpaces(second_team, "Second Team"),
    validateNoLeadingSpaces(date, "Date"),
    validateNoLeadingSpaces(time, "Time"),
    validateNoLeadingSpaces(location, "Location"),
  ].filter(Boolean); // Remove null entries

  if (validations.length > 0) {
    return res.status(400).json({ message: validations.join(" ") });
  }

  // Build dynamic query to include only provided fields
  let fieldsToUpdate = [];
  let values = [];

  if (first_team) {
    fieldsToUpdate.push("first_team = ?");
    values.push(first_team.trim());
  }
  if (second_team) {
    fieldsToUpdate.push("second_team = ?");
    values.push(second_team.trim());
  }
  if (date) {
    fieldsToUpdate.push("date = ?");
    values.push(date.trim());
  }
  if (time) {
    fieldsToUpdate.push("time = ?");
    values.push(time.trim());
  }
  if (location) {
    fieldsToUpdate.push("location = ?");
    values.push(location.trim());
  }

  // Join fields to create the SET clause of the SQL query
  const setClause = fieldsToUpdate.join(", ");
  const updateQuery = `UPDATE upcoming_match SET ${setClause} WHERE id = ?`;
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
        .json({ message: "Match not updated. ID not found." });
    }

    res.status(200).json({ message: "Updated Successfully" });
  });
});

app.get("/dashboardResult", (req, res) => {
  const queryRecentMatches =
    "SELECT first_team, second_team, winning_team, match_description FROM match_result";
  const queryTotalMatches = "SELECT COUNT(*) AS totalMatches FROM match_result";
  const queryTotalUpcomingMatches =
    "SELECT COUNT(*) AS totalUpcomingMatches FROM upcoming_match";

  db.query(queryRecentMatches, (err, recentMatches) => {
    if (err) {
      console.error("Error fetching recent matches:", err);
      return res.status(500).json({ message: "Error fetching recent matches" });
    }

    db.query(queryTotalMatches, (err, matchResultCount) => {
      if (err) {
        console.error("Error fetching total matches count:", err);
        return res.status(500).json({ message: "Error fetching match count" });
      }

      db.query(queryTotalUpcomingMatches, (err, upcomingMatchCount) => {
        if (err) {
          console.error("Error fetching upcoming matches count:", err);
          return res
            .status(500)
            .json({ message: "Error fetching upcoming match count" });
        }

        res.json({
          recentMatches: recentMatches,
          totalMatches: matchResultCount[0].totalMatches,
          totalUpcomingMatches: upcomingMatchCount[0].totalUpcomingMatches,
        });
      });
    });
  });
});

// Route to get MATCH RESULT Details
app.get("/result", (req, res) => {
  const matchResult =
    "SELECT id, first_team, second_team, first_team_score, second_team_score, winning_team, match_description , winning_team_batsone, batsone_score, winning_team_batstwo, batstwo_score, winning_team_bowlerone, bowlerone_wicket FROM match_result";

  db.query(matchResult, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Route to get MATCH RESULT Details by ID
app.get("/result/:ID", (req, res) => {
  const { ID } = req.params;
  const matchResult =
    "SELECT id, first_team, second_team, first_team_score, second_team_score, winning_team, winning_team_batsone, batsone_score, winning_team_batstwo, batstwo_score, winning_team_bowlerone, bowlerone_wicket FROM match_result WHERE id = ?";

  db.query(matchResult, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "No Result Found" });
    }
    res.status(200).json({ matchResult: result[0] });
  });
});

//ROUTE TO ADD MATCH RESULT DETAILS BY POST METHOD

app.post("/addresult", (req, res) => {
  const {
    first_team,
    second_team,
    first_team_score,
    second_team_score,
    winning_team,
    match_description,
    winning_team_batsone,
    batsone_score,
    winning_team_batstwo,
    batstwo_score,
    winning_team_bowlerone,
    bowlerone_wicket,
  } = req.body;

  const errors = {};

  // Validation checks
  if (!first_team || first_team.trim() === "")
    errors.first_team = "First team is required.";
  if (!second_team || second_team.trim() === "")
    errors.second_team = "Second team is required.";
  if (first_team === second_team) errors.teams = "Teams cannot be the same.";
  if (!first_team_score || first_team_score < 0)
    errors.first_team_score = "Invalid score.";
  if (!second_team_score || second_team_score < 0)
    errors.second_team_score = "Invalid score.";
  if (!winning_team || winning_team.trim() === "")
    errors.winning_team = "Winning team is required.";
  if (winning_team !== first_team && winning_team !== second_team)
    errors.winning_team = "Invalid winning team.";

  // Handle errors
  if (Object.keys(errors).length > 0)
    return res.status(400).json({ status: "error", errors });

  // SQL query to insert match result
  const query = `
    INSERT INTO match_result (
      first_team, second_team, first_team_score, second_team_score,
      winning_team, match_description, winning_team_batsone, batsone_score,
      winning_team_batstwo, batstwo_score, winning_team_bowlerone, bowlerone_wicket
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const queryParams = [
    first_team.trim(),
    second_team.trim(),
    first_team_score,
    second_team_score,
    winning_team.trim(),
    match_description ? match_description.trim() : null,
    winning_team_batsone ? winning_team_batsone.trim() : null,
    batsone_score || null,
    winning_team_batstwo ? winning_team_batstwo.trim() : null,
    batstwo_score || null,
    winning_team_bowlerone ? winning_team_bowlerone.trim() : null,
    bowlerone_wicket || null,
  ];

  db.query(query, queryParams, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Database error", error: err });
    }
    res.status(200).json({
      status: "success",
      message: "Result added successfully",
      id: result.insertId,
    });
  });
});

// Route to Delete MATCH RESULT DETAIL by POST method

// Route to Update  MATCH RESULT DETAIL
app.delete("/deleteresult/:id", (req, res) => {
  const matchId = req.params.id;

  // SQL query to delete the match result
  const query = "DELETE FROM match_result WHERE id = ?";

  db.query(query, [matchId], (err, result) => {
    if (err) {
      console.error("Error deleting match result:", err);
      return res
        .status(500)
        .json({ message: "Failed to delete match result." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Match result not found." });
    }

    res.status(200).json({ message: "Match result deleted successfully." });
  });
});

app.post("/updateresult/:ID", (req, res) => {
  const { ID } = req.params; // Extract ID from URL parameters
  const {
    first_team,
    second_team,
    first_team_score,
    second_team_score,
    winning_team,
    winning_team_batsone,
    batsone_score,
    winning_team_batstwo,
    batstwo_score,
    winning_team_bowlerone,
    bowlerone_wicket,
  } = req.body; // Extract fields from request body

  // Validate ID
  if (!ID || isNaN(ID)) {
    return res
      .status(400)
      .json({ message: "Invalid or missing ID in the URL." });
  }

  // Collect fields to update dynamically
  const fieldsToUpdate = [];
  const values = [];

  if (first_team) {
    fieldsToUpdate.push("first_team = ?");
    values.push(first_team);
  }
  if (second_team) {
    fieldsToUpdate.push("second_team = ?");
    values.push(second_team);
  }
  if (first_team_score) {
    fieldsToUpdate.push("first_team_score = ?");
    values.push(first_team_score);
  }
  if (second_team_score) {
    fieldsToUpdate.push("second_team_score = ?");
    values.push(second_team_score);
  }
  if (winning_team) {
    fieldsToUpdate.push("winning_team = ?");
    values.push(winning_team);
  }
  if (winning_team_batsone) {
    fieldsToUpdate.push("winning_team_batsone = ?");
    values.push(winning_team_batsone);
  }
  if (batsone_score) {
    fieldsToUpdate.push("batsone_score = ?");
    values.push(batsone_score);
  }
  if (winning_team_batstwo) {
    fieldsToUpdate.push("winning_team_batstwo = ?");
    values.push(winning_team_batstwo);
  }
  if (batstwo_score) {
    fieldsToUpdate.push("batstwo_score = ?");
    values.push(batstwo_score);
  }
  if (winning_team_bowlerone) {
    fieldsToUpdate.push("winning_team_bowlerone = ?");
    values.push(winning_team_bowlerone);
  }
  if (bowlerone_wicket) {
    fieldsToUpdate.push("bowlerone_wicket = ?");
    values.push(bowlerone_wicket);
  }

  // Ensure at least one field to update is provided
  if (fieldsToUpdate.length === 0) {
    return res.status(400).json({ message: "No fields provided to update." });
  }

  // Construct the SQL query
  const setClause = fieldsToUpdate.join(", ");
  const updateQuery = `UPDATE match_result SET ${setClause} WHERE id = ?`;
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
        .json({ message: "No record found with the provided ID." });
    }

    res.status(200).json({ message: "Updated Successfully" });
  });
});

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  const query = 'INSERT INTO gallery (image_url) VALUES (?)';
  db.query(query, [imageUrl], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
  });
});

// Route to fetch all gallery images
app.get('/gallery', (req, res) => {
  const query = 'SELECT * FROM gallery';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
});


// Route to Delete an image
app.delete("/gallery/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM gallery WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting image:", err);
      return res.status(500).json({ error: "Failed to delete image" });
    }
    res.json({ message: "Image deleted successfully" });
  });
});

// Route to handle notification submission
app.post('/addNotification', upload.single('pdfFile'), (req, res) => {
  const { notificationText } = req.body;
  const pdfFilePath = req.file ? `/uploads/${req.file.filename}` : null;

  const query = 'INSERT INTO notifications (text, pdf_path) VALUES (?, ?)';
  db.query(query, [notificationText, pdfFilePath], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json({ message: 'Notification added successfully' });
  });
});

// Route to fetch all notifications
app.get('/notifications', (req, res) => {
  const query = 'SELECT * FROM notifications';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
});


// Route to Delete notification
app.delete("/notifications/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM notifications WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting notification:", err);
      return res.status(500).json({ message: "Failed to delete notification" });
    }
    res.json({ message: "Notification deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
