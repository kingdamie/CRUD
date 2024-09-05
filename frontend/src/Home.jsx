import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const Home = () => {
	// State to store the list of students fetched from the server
	const [data, setData] = useState([]);

	// useEffect hook to fetch data when the component mounts
	useEffect(() => {
		axios
			.get("http://localhost:8081/") // Fetch data from the server
			.then((res) => setData(res.data)) // Set the data to state once fetched
			.catch((err) => console.log(err)); // Handle any errors during the fetch
	}, []);

	// Function to handle the deletion of a student by ID
	const handleDelete = (id) => {
		axios
			.delete("http://localhost:8081/delete/" + id) // Send delete request to server
			.then(() => {
				// Update the state by filtering out the deleted student
				setData(data.filter((student) => student.id !== id));
			})
			.catch((err) => console.log(err)); // Handle any errors during deletion
	};

	return (
		<div>
			<h2>Student List</h2>
			<Link to="/create">Create</Link>
			{/* Table to display the list of students */}
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{/* Iterate over the student data and display each student's info in a table row */}
					{data.map((student, index) => {
						return (
							<tr key={index}>
								<td>{student.id}</td>
								<td>{student.name}</td>
								<td>{student.email}</td>
								<td>{student.age}</td>
								<td>
									<Link to={`/read/${student.id}`}>Read</Link>
									<Link to={`/update/${student.id}`}>Edit</Link>
									<button onClick={() => handleDelete(student.id)}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
