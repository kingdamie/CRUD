import express from "express"; // Express framework for building web applications
import mysql from "mysql"; // MySQL client for Node.js to interact with a MySQL database
import cors from "cors"; // CORS middleware for enabling Cross-Origin Resource Sharing

// Initialize an Express application
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Create a MySQL database connection
const db = mysql.createConnection({
	host: "localhost", // Database host
	user: "root", // Database username
	password: "", // Database password
	database: "crud", // Name of the database to connect to
});

// Define a route to get all students from the database
app.get("/", (req, res) => {
	const sql = "SELECT * FROM students"; // SQL query to select all students
	db.query(sql, (err, result) => {
		if (err) return res.json({ Message: "Error inside server" }); // Handle any errors
		return res.json(result); // Return the result as JSON
	});
});

// Define a route to add a new student to the database
app.post("/students", (req, res) => {
	const sql = "INSERT INTO students (`name`, `email`, `age`) VALUES (?)"; // SQL query to insert a new student
	console.log(req.body); // Log the request body for debugging

	const values = [req.body.name, req.body.email, req.body.age]; // Extract values from the request body
	db.query(sql, [values], (err, result) => {
		if (err) return res.json(err); // Handle any errors
		return res.json(result); // Return the result as JSON
	});
});

// Define a route to get a specific student by ID
app.get("/read/:id", (req, res) => {
	const sql = "SELECT * FROM students WHERE id = ?"; // SQL query to select a student by ID
	const id = req.params.id; // Get the student ID from the route parameters

	db.query(sql, [id], (err, result) => {
		if (err) return res.json({ Message: "Error inside server" }); // Handle any errors
		return res.json(result); // Return the result as JSON
	});
});

// Define a route to update a student's information by ID
app.put("/update/:id", (req, res) => {
	const sql =
		"UPDATE students SET `name` = ?, `email` = ?, `age` = ? WHERE id = ?"; // SQL query to update student information
	const id = req.params.id; // Get the student ID from the route parameters

	db.query(
		sql,
		[req.body.name, req.body.email, req.body.age, id], // Update the student's information with the values from the request body
		(err, result) => {
			if (err) {
				console.error("Error executing query:", err); // Log the error for debugging
				return res.status(500).json({ Message: "Error inside server" }); // Handle any errors with a server error response
			}
			if (result.affectedRows === 0) {
				return res.status(404).json({ Message: "Student not found" }); // Handle case where student is not found
			}
			return res.json({
				Message: "Student updated successfully",
				Result: result,
			}); // Return success message and result as JSON
		}
	);
});

// Define a route to delete a student by ID
app.delete("/delete/:id", (req, res) => {
	const sql = "DELETE FROM students WHERE id = ?"; // SQL query to delete a student by ID
	const id = req.params.id; // Get the student ID from the route parameters

	db.query(sql, [id], (err, result) => {
		if (err) return res.json({ Message: "Error inside server" }); // Handle any errors
		return res.json(result); // Return the result as JSON
	});
});

// Start the server on port 8081
app.listen(8081, () => {
	console.log("Server is listening on port 8081");
});
