import { useEffect, useState } from "react";
import "./dos.css"
import axios from "axios";
import Menu from "./Menu.jsx"
const Dos = () => {

    useEffect(()=>{
        const roo = document.querySelector("#root")
        roo.style.backgroundColor = "#f2f2f2";

    },[])
    const[cv, cc]=useState({})
    const [estado , setestado]=useState({
        numero : "",
        precio:"",
        correo:"",
        metros:"",
        baños : "",
        direccion:"",
        descripcion:"",
        cuartos:""
    })
    const [visible, setVisible] = useState(false);
    
    const fun =(e)=>{
        e.preventDefault();
      
        setestado({
            ...estado,
            [e.target.name]: e.target.value 
        })
    }
    const mandar =()=>{
        const userConfirmed = window.confirm("¿Deseas mandar nuevo registro?");
        if (userConfirmed) {
            axios.post("https://inmueblesnode-2.onrender.com/l", estado)
        .then((res)=>{
            console.log(res.data);
            cc(res.data)
            console.log(res.data);
            console.log("niem");
        })
        .catch((err)=>{
            console.log(err);
        }) 
        }  
       
    }
    return ( 
        <>
        <Menu></Menu>
        <div className="fa">
            <div className="faa">  
            <div className="conu">
                <h1>numero*:</h1>
                <input name="numero" onChange={fun} className="esado" type="number" />
                <h1> precio </h1> 
                <input name="precio" onChange={fun} className="esado"  type="number" />
                <h1>cuartos</h1>
                 <input onChange={fun} name="cuartos" className="esado"  type="number" />
            </div>
            <div className="conu">
           <h1>correo electronico </h1>
           <input name="correo" onChange={fun}  className="esado" type="email" />
           <h1>baños </h1>  
           <input name="baños" className="esado" onChange={fun} type="number" />
            </div>
            <div className="conu">
               <h1>    metros</h1>
               <input onChange={fun} name="metros" className="esado"  type="text" />
               <h1>direccion</h1>
               <input onChange={fun} name="direccion" className="esado"  type="text" />

             
            </div>
            <div className="ff"> 
            <h1>añade una descripcion</h1>
            <textarea name="descripcion" onChange={fun} id="tex"></textarea>

            </div>
            </div>
             <button onClick={mandar} className="bon">enviar</button>

        </div>
     
     
        </>
     );
}
 
export default Dos;