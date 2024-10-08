# Full-Stack CRUD Application
This repository contains the code for a full-stack CRUD (Create, Read, Update, Delete) application built using Express.js, MySQL, and React.js.

## Features
Create: Add new student records.
Read: View a list of all students or details of individual students.
Update: Edit existing student records.
Delete: Remove student records from the database.


## Technologies
### `Backend`:
Express.js: Handles API requests and responses.
MySQL: Manages the database for storing student records.
### `Frontend`:
React.js: Provides the user interface for interacting with the application.

## API Endpoints
GET / - Fetch all student records.
GET /read/:id - Fetch a single student record by ID.
POST /students - Create a new student record.
PUT /update/:id - Update an existing student record.
DELETE /delete/:id - Delete a student record by ID.

## Components
Home: Displays a list of students with options to view, edit, or delete records.
Create: Form for adding a new student record.
Read: View details of a specific student.
Update: Form to edit an existing student record.

## Getting Started
Clone the Repository
bash - `git clone https://github.com/kingdamie/CRUD.git`

## Setup Backend
Navigate to the backend directory.

Install dependencies:
bash - `npm install`
Start the server:

bash - `npm start`

## Setup Frontend
Navigate to the frontend directory.

Install dependencies:
bash - `npm install`
Start the development server:
bash - `npm run dev`

## Database Setup
Ensure MySQL is running.
Create a database named `crud` and set up the `students` table according to the schema provided.

### Contributing
Feel free to open issues or submit pull requests. Contributions are welcome!