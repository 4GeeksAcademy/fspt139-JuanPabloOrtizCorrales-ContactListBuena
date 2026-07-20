export const getAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita")

    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
}


export const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/agendita",{
        method: "POST"

    })
    const data = await response.json()

}