import axios from "axios";
import { useEffect, useState } from "react";
const Ii = () => {
    const [x,xx]=useState([])
    useEffect(()=>{

        axios.get("http://127.0.0.1:5000/users")
        .then((res)=>{
            console.log(res.data);
            xx(res.data)
        })
    },[])
    const [users, setUsers] = useState([]);
    const [as ,ss]=useState("")
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const ff =(e)=>{
         
        setNewUser({...newUser,
            [e.target.name]:e.target.value
    })
    }
const fun =(e)=>{ 
    axios.post("http://127.0.0.1:5000/users", newUser, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res.data);
        setUsers(prevState => [...prevState, res.data]);
    })
    .catch((error) => {
        console.error(":", error);
    });
    window.location.reload();
}
    
    return (  
        <>
        {x.map((e)=>(
            <h1>{e.name}, con correo {e.email}</h1>
        ))}
        <h1>agregar nuevo</h1>
        <input  placeholder="nombre"  name="name" onChange={ff} type="text" />
        <input placeholder="correo"  name="email" onChange={ff} type="text" />
        <button onClick={fun}>enviar</button>
        </>
    );
}
 
export default Ii;