import { useEffect, useState } from "react";
import "./tabla.css"
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
import { FaYoast } from "react-icons/fa6";
const Sa = () => {
    useEffect(()=>{
       const body = document.querySelector(".body")

    }, [])
 
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/re")
        .then(response =>{
setData(response.data)
console.log(response.data);
console.log(data);
        })
        .catch(e =>{
            console.log(e);
        })

    },[])
 

   const [uno , setuno]= useState(false);
   let x = 2
   const cc = (n) => {
      
     
         if( n == 0){
            return 1
         }else{
            return n * cc(n-1)
         }

   }

   console.log(cc(5));
    return(
        <>
         <div className="centrar">  <h1 className="publicacionesh1">tus publicaciones</h1> </div>
 
 {data.map((e)=>(
     <h1>{e.nombre}</h1>
 )
 )
 }


 
       <div className="contenedor-tabla">
        <table>
        <tr>
        <td>precio</td>
        <td>descripcion</td>
        <td>metros</td>
        <td>cuartos</td>
        <td>baños</td>
        <td>ubicacion</td>
        
        <td > eliminar </td> 
        
                   
        </tr>
        <tr>
        <td>2,5000</td>
        <td><div className="desp">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus maiores magnam nisi ad blanditiis? Non qui doloribus quae at aut nisi asperiores, sint commodi id consequatur, optio, sed obcaecati. </div></td>
        <td>50m x 100m </td>
        <td>5 recamaras</td>
        <td>2 baños</td>
        <td>salamanca, gto</td>
        <td className="pad0"><div className="eliminar">eliminar </div></td>
  
        </tr>
       
       
        </table>
        
        <Link className="agg" to={"/dos"}>

            agregar nuevo
        </Link>
        </div>
       
      
        </>

    )

} 

export default Sa;