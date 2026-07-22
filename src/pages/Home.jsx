import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { deleteContact, getAgenda } from "../Services/services.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();


	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact => {
						return (
							<li key={contact.id} className="row contact">
								<div className="col-md-3">
									<img
										className="rounded-circle"
										src={`https://picsum.photos/seed/${contact.id}/300/200`}
										alt=""
										srcSet=""
										style={{ width: "150px", height: "150px", objectFit: "cover" }}
									/>
								</div>
								<div className="col-md-7">
									<div>Name: {contact.name}</div>
									<div>phone: {contact.phone}</div>
									<div>email:{contact.email}</div>
									<div>address: {contact.address}</div>
								</div>
								<div className="col-md-2">
									<i
										className="fa-regular fa-pen-to-square"
										style={{ cursor: "pointer", color: "orange" }}
										onClick={() => navigate(`/edit-contact/${contact.id}`)}>
									</i>
									<i  className="fa-solid fa-trash"
										style={{ cursor: "pointer", color: "black" }}
										onClick={() => deleteContact(contact.id, dispatch)}>

									</i>
								</div>
							</li>
						)

					})
				}
			</div>
		</div>
	);
}; 