import axios from "axios"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Create = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		age: "",
	});

	const navigate = useNavigate(); 

	const handleSubmit = (e) => {
		e.preventDefault(); 
		axios
			.post("http://localhost:8081/students", values) // Send a POST request to create a new student
			.then((res) => {
				console.log(res);
				navigate("/"); 
			})
			.catch((err) => console.log(err)); // Handle any errors during the request
	};

	return (
		<div>
			{/* Form for adding a new student */}
			<form onSubmit={handleSubmit}>
				<h2>Add Student</h2>
				<div>
					{/* Input for the student's name */}
					<label htmlFor="">Name:</label>
					<input
						type="text"
						placeholder="Enter Name"
						onChange={(e) => setValues({ ...values, name: e.target.value })} // Update state on change
					/>
				</div>

				<div>
					{/* Input for the student's email */}
					<label htmlFor="">Email:</label>
					<input
						type="email"
						placeholder="Enter Email"
						onChange={(e) => setValues({ ...values, email: e.target.value })} // Update state on change
					/>
				</div>

				<div>
					{/* Input for the student's age */}
					<label htmlFor="">Age:</label>
					<input
						type="number"
						placeholder="Enter Age"
						onChange={(e) => setValues({ ...values, age: e.target.value })} // Update state on change
					/>
				</div>

				{/* Submit button for the form */}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Create;
