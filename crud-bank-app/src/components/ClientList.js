import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteClientAction} from '../Config/actions';
function ClientList() {
    const users = useSelector((data)=>data.clients);// data refers to the Array state
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteClientAction(id))
    }
    return (
        <div>
            <p>
                <Link to="/add-user">
                    <button className="btn btn-success">Add Client</button>
                </Link>
            </p>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">PinCode</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((client, index)=> {
                            return (
                            <tr key={index}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.pinCode}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td>{client.balance}</td>
                                <td>
                                    <Link to={`/update-user/${client.id}`}>
                                        <button className="btn btn-primary me-2">Edit Client</button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(client.id)}>Delete Client</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
        </div>
    )
}
export default ClientList;