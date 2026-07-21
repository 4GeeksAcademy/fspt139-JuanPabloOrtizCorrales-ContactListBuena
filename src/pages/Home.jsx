import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { getAgenda } from "../Services/services.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	
	
	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact =>{
						return(
							<li key={contact.id} className="row contact">
								<div className="col-md-3">
									<img
									 className="rounded-circle"
									 src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/0/06/625_-_Reuben.png/revision/latest/scale-to-width-down/1200?cb=20250612151255"
									 alt=""
									 srcSet=""
									 style= { {width: "150px", height: "150px", objectFit: "cover" }}
									  />
								</div>
								<div className="col-md-7">
									<div>Name: {contact.name}</div>
									<div>phone: {contact.phone}</div>
									<div>email:{contact.email}</div>
									<div>address: {contact.address}</div>

								</div>
							</li>
						)

					})
				}
			</div>
		</div>
	);
}; 