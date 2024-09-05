import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
	const { id } = useParams(); // Extract the student ID from the route parameters
	const [student, setStudent] = useState([]); 

	// useEffect hook to fetch the student data when the component mounts
	useEffect(() => {
		axios
			.get("http://localhost:8081/read/" + id) 
			.then((res) => {
				console.log(res); 
				setStudent(res.data[0]); // Set the student data to state
			})
			.catch((err) => console.log(err)); 
	}, [id]); // Dependency array includes `id` to refetch data when `id` changes

	return (
		<div>
			{/* Display student details */}
			<h2>Student Details</h2>
			<h3>{student.id}</h3>
			<h3>{student.name}</h3>
			<h3>{student.email}</h3>
			<h3>{student.age}</h3>

			{/* Link to navigate back to the home page */}
			<Link to="/">Back</Link>
		</div>
	);
};

export default Read;
