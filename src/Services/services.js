export const getAgenda = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita")

    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    dispatch({ type: "add_contact", payload: data.contacts })
}


export const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita", {
        method: "POST"

    })
    const data = await response.json()

}

export const createContact = async (contact, dispatch, navigate) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita/contacts", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {"Content-Type": "application/json"}
    })
    if(response.ok){
        getAgenda(dispatch)
        navigate("/")

    }
    const data = await response.json()
    
}

export const editContact = async (id, contact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendita/contacts/${id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    getAgenda(dispatch)
    navigate("/")
}

export const deleteContact = async (id,dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendita/contacts/${id}`, {
        method: "DELETE",
    })
    getAgenda(dispatch)
    
}


