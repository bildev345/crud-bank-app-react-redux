import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateClientAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function UpdateClient() {
    const {id} = useParams()
    const client = useSelector(data=>data.clients.find((u)=>u.id===parseInt(id)));
    const [name, setName] = useState(client.name);
    const [pinCode, setPinCode] = useState(client.pinCode);
    const [phone, setPhone] = useState(client.phone);
    const [email, setEmail] = useState(client.email);
    const [balance, setBalance] = useState(client.balance);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(updateClientAction({
            id:id,
            name:name,
            pinCode:pinCode,
            phone:phone,
            email:email,
            balance:balance
        }))
        navigate('/')
    }
    return (
        <form>
            <div className="form-group mb-3">
                <label className="mb-2">Name</label>
                <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="mb-2">PinCode</label>
                <input className="form-control" type="text" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="mb-2">Phone</label>
                <input className="form-control" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="mb-2">Email</label>
                <input className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="mb-2">Balance</label>
                <input className="form-control" type="text" value={balance} onChange={(e)=>setBalance(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default UpdateClient;