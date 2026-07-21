import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { createContact, getAgenda } from "../Services/services.js";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const [contact, setContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })

    const handleChange = (event) => {
        setContact({
            ...contact,
            [event.target.name] :event.target.value
        })
    }

    useEffect(()=>{
        getAgenda(dispatch)

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        createContact(contact, dispatch, navigate)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" id="name" value={contact.name} onChange={handleChange} aria-describedby="name"></input>
            <label htmlFor="phone" className="form-label">phone</label>
            <input type="text" className="form-control" name="phone" id="phone" value={contact.phone} onChange={handleChange} aria-describedby="phone"></input>
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" className="form-control" name="email" id="email" value={contact.email} onChange={handleChange} aria-describedby="email"></input>
            <label htmlFor="address" className="form-label">address</label>
            <input type="address" className="form-control" name="address" id="address" value={contact.address} onChange={handleChange} aria-describedby="address"></input>
        </form>
    );
}; 


