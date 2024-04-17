import Menu from "./Menu";
import "./ejemplo.css"
import casa1 from "./casa1.webp"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
import { useState } from "react";
const Ejemplo = () => {

    let propiedades = [{
        ciudad:"salamanca",
        precio : 2000,
        status : "comprar"
    },{
        ciudad : "monterrey",
        precio :1500,
        status :"compra"
    },{
        ciudad : "monterrey",
        precio :1500,
        status :"compra"
    },{
        ciudad : "monterrey",
        precio :1500,
        status :"renta"
    },{
        ciudad:"salamanca",
        precio : 2000,
        status : "comprar"
    }]

    const [inp, setinp]=useState(0)

    const nuevo = propiedades.filter(item => item.precio > inp )
    const id =1
    const rootElement = document.getElementById('root');
    
    
    const cambiarfiltros =(e)=>{
        setinp(e.target.value)
        console.log(e.target.name);
    }
    
    return ( 
        <>
        <Menu></Menu>

          <div className="contenedorinput"> 
         
          
            <input type="text" className="jm" placeholder="ingresa estado ciudad o pais" />
            <input type="text" className="jm ll" placeholder="ingresa compra o renta" />


            <input type="number" onChange={cambiarfiltros} className="jm ll" placeholder="ingresa renta o compra" />
            <input type="text" className="jm ll" placeholder="recamaras" />
          </div>

          {nuevo.map((e)=>(
              <Link to={`/casa/${id}`}>
              <div className="contenedoropciones">
                  <div className="one"> 
                  <div className="conetendorimagen1">
                      <img src={casa1} alt=""  className="casa"/>
                  </div>
                  <div className="contenedoropcioneshijo">
              <p className="desde">desde</p>
                      <h1 className="h1m">mxn 7,200,500</h1>
                      <p className="lugar">{e.ciudad}</p>
                      <p className="descripcion">30m x 15,  3 baños, 6 recamaras y patio</p>
                      <div className="contenedorcontacto">
                      <a href="" className="action">WhasaApp</a>
                      <a href="" className="action action2">correo</a>
                      </div>
                  </div>
                  </div>
              </div>
              </Link>
              
            
            
          ))}
       

        </>
     );
}
 
export default Ejemplo;