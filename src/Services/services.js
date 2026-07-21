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

export const createContact = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita/contacts", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: "Content-Type: application/json"
    })
    const data = await response.json()
    
    
    getAgenda()
    setContact({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })
}

export const editContact = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita/contacts/1", {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: "Content-Type: application/json"
    })
    const data = await response.json()
    getAgenda()
    setContact({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })
    
}
