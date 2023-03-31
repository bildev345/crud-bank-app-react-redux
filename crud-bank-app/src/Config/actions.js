export const addClientAction = (client) => {
    return {type:"Add_client", payload:client}
}
export const updateClientAction = (newClient) => {
    return {type:"Update_client", payload:newClient}
}
export const deleteClientAction = (id) => {
    return {type:"Delete_client", payload:id}
}