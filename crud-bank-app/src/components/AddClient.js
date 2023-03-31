import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addClientAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
function AddClient() {
    const count = useSelector(data=>data.clients.length);
    const [name, setName] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addClientAction({
            id:count+1,
            name:name,
            pinCode:pinCode,
            phone: phone,
            email:email,
            balance: balance
        }))
         
        navigate('/');
    }
    return (
        <form>
            <div className="form-group mb-3">
               <label className="mb-2" htmlFor="name">Name</label>
               <input id="name" placeholder="Enter FullName" className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
               <label className="mb-2" htmlFor="pincode">PinCode</label>
               <input id="pincode" placeholder="Enter Pincode" className="form-control" type="text" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
            </div>
            <div className="form-group mb-3">
               <label className="mb-2" htmlFor="phone">Phone Number</label>
               <input id="phone" placeholder="Enter Phone Number" className="form-control" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className="form-group mb-3">
               <label className="mb-2" htmlFor="email">Email</label>
               <input id="email" placeholder="Enter Email" className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
               <label className="mb-2" htmlFor="name">Balance</label>
               <input id="balance" placeholder="Enter Account balance" className="form-control" type="text" value={balance} onChange={(e)=>setBalance(e.target.value)} />
            </div>
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">Check me out</label>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default AddClient;