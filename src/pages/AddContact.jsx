import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { createContact, getAgenda, editContact, deleteContact } from "../Services/services.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const AddContact = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const [contact, setContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })

    useEffect(() => {
        if (id) {
            const contactoEditado = store.contacts.find(contact => contact.id == id);

            if (contactoEditado) {
                setContact({
                    name: contactoEditado.name,
                    phone: contactoEditado.phone,
                    email: contactoEditado.email,
                    address: contactoEditado.address
                });
            }
        } else {
            setContact({
                "name": "",
                "phone": "",
                "email": "",
                "address": ""
            })
        }
    }, [id, store.contacts]);





    const handleChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            editContact(id, contact, dispatch, navigate);
        } else {
            createContact(contact, dispatch, navigate);
        }

    }

    return (
        <div>
            <h1 className="">Agregar Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" value={contact.name} onChange={handleChange} aria-describedby="name"></input>
                <label htmlFor="phone" className="form-label">phone</label>
                <input type="text" className="form-control" name="phone" id="phone" value={contact.phone} onChange={handleChange} aria-describedby="phone"></input>
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-control" name="email" id="email" value={contact.email} onChange={handleChange} aria-describedby="email"></input>
                <label htmlFor="address" className="form-label">address</label>
                <input type="address" className="form-control" name="address" id="address" value={contact.address} onChange={handleChange} aria-describedby="address"></input>
                <button type="submit" className="btn btn-success">Guardar contacto</button>
            </form>
        </div>
    );
};


