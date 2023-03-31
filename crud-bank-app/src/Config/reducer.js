const initialState = {
    clients:[ 
        { id: 1, name: "Mohamed Allaoui", pinCode: "2142",phone: "0610457589", email: "allaoui@gmail.com", balance: 5000 }, 
        { id: 2, name: "Hind Benanni", pinCode: "4516", phone: "0645123698", email: "benani@gmail.com", balance: 6000 }
    ] 
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_client":
            return {...state, clients:[...state.clients, action.payload]}
        case "Update_client":
            const client = state.clients.find((c)=>c.id===parseInt(action.payload.id))
            if (client) {
                client.name = action.payload.name
                client.pinCode = action.payload.pinCode
                client.phone = action.payload.phone
                client.email = action.payload.email
                client.balance = action.payload.balance
            }
            return state
        case "Delete_client":
            return {...state, clients:[...state.clients.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer;