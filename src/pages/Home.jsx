import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contact, setContact] = useState({
		"name": "",
		"phone": "",
		"email": "",
		"address": ""
	})

	const handleChange = (event) => {
		setContact({...contact,[event.target.name]:event.target.value})
	}
	return (
		<htmlForm>
			<label htmlFor="name" className="form-label">Name</label>
			<input type="text" className="form-control" name="name" id="name" value={contact.name} onChange={handleChange} aria-describedby="name"></input>
			<label htmlFor="phone" className="form-label">phone</label>
			<input type="text" className="form-control" name="phone" id="phone" value={contact.phone} onChange={handleChange} aria-describedby="phone"></input>
			<label htmlFor="phone" className="form-label">Name</label>
			<input type="text" className="form-control" name="name" id="name" value={contact.name} onChange={handleChange} aria-describedby="name"></input>
			<label htmlFor="name" className="form-label">Name</label>
			<input type="text" className="form-control" name="name" id="name" value={contact.name} onChange={handleChange} aria-describedby="name"></input>
		</htmlForm>
	);
}; 