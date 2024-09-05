## Full-Stack CRUD Application

This repository contains the code for a full-stack CRUD (Create, Read, Update, Delete) application. The application is built using the following technologies:

- **Backend**: Express.js with MySQL
- **Frontend**: React.js

### Features
- **Create**: Add new student records to the database.
- **Read**: View a list of all students and details of individual students.
- **Update**: Edit existing student records.
- **Delete**: Remove student records from the database.

### Backend
- **Express.js**: Handles API requests and responses.
- **MySQL**: Manages the database for storing student records.
- **API Endpoints**:
  - `GET /` - Fetch all student records.
  - `GET /read/:id` - Fetch a single student record by ID.
  - `POST /students` - Create a new student record.
  - `PUT /update/:id` - Update an existing student record.
  - `DELETE /delete/:id` - Delete a student record by ID.

### Frontend
- **React.js**: Provides the user interface for interacting with the application.
- **Components**:
  - **Home**: Displays a list of students with options to view, edit, or delete records.
  - **Create**: Form to add a new student record.
  - **Read**: View details of a specific student.
  - **Update**: Form to edit an existing student record.

### How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. **Setup Backend**:
   - Navigate to the backend directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Setup Frontend**:
   - Navigate to the frontend directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Database Setup**:
   - Ensure MySQL is running.
   - Create a database named `crud` and set up the `students` table according to the schema used in the application.

### Contributing
Feel free to open issues or submit pull requests. Contributions are welcome!

 
 
