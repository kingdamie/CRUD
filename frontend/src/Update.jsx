import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams to get route parameters
import axios from "axios"; 

export const Update = () => {
	const { id } = useParams(); // Extract the student ID from the route parameters

	// useEffect hook to fetch the current student data when the component mounts or when the ID changes
	useEffect(() => {
		axios
			.get("http://localhost:8081/read/" + id) // Fetch the student data by ID
			.then((res) => {
				// console.log(res); // Log the response for debugging
				setValues({
					// Update the state with the fetched student data
					...values,
					name: res.data[0].name,
					email: res.data[0].email,
					age: res.data[0].age,
				});
			})
			.catch((err) => console.log(err)); // Handle any errors during fetch
	}, [id]);

	// State to store the form values for updating the student
	const [values, setValues] = useState({
		name: "",
		email: "",
		age: "",
	});

	const navigate = useNavigate(); 

	// Function to handle the form submission
	const handleSubmit = (e) => {
		e.preventDefault(); 
		axios
			.put("http://localhost:8081/update/" + id, values) // Send the updated data to the server
			.then((res) => {
				console.log(res); // Log the response for debugging
				navigate("/"); 
			})
			.catch((err) => console.log(err)); 
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Update Student</h2>

				<div>
					{/* Input for the student's name */}
					<label htmlFor="">Name:</label>
					<input
						type="text"
						placeholder="Enter Name"
						onChange={(e) => setValues({ ...values, name: e.target.value })} // Update state on change
						value={values.name} // Bind the input value to state
					/>
				</div>

				<div>
					{/* Input for the student's email */}
					<label htmlFor="">Email:</label>
					<input
						type="email"
						placeholder="Enter Email"
						onChange={(e) => setValues({ ...values, email: e.target.value })} // Update state on change
						value={values.email} // Bind the input value to state
					/>
				</div>

				<div>
					{/* Input for the student's age */}
					<label htmlFor="">Age:</label>
					<input
						type="number"
						placeholder="Enter Age"
						onChange={(e) => setValues({ ...values, age: e.target.value })} // Update state on change
						value={values.age} // Bind the input value to state
					/>
				</div>

				{/* Button to submit the form and trigger the update */}
				<button type="submit">Update</button>
			</form>
		</div>
	);
};
