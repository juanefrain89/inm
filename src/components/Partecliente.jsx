import casa1 from "./casa1.webp"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
  import Menu from "./Menu";
import { useState } from "react";
const Partecliente = () => {
    const [modificar, setmodificar]=useState()
    return ( 
        <>
        <Menu></Menu>
        
        <div className="contenedorinput"> 
         
         <input type="text" className="jm"  placeholder="ingresa estado ciudad o pais" />
         <div type="text" className="jj"  ><center><p>filtros</p></center></div>
           <input type="text" className="jm ll" placeholder="ingresa compra o renta" />
           <input type="number" className="jm ll" placeholder="ingresa renta o compra" />
           <input type="number" className="jm ll" placeholder="recamaras" />
         </div>
        <Link to={`/`}>
              <div className="contenedoropciones">
                  <div className="one"> 
                  <div className="conetendorimagen1">
                      <img src={casa1} alt=""  className="casa"/>
                  </div>
                  <div className="contenedoropcioneshijo">
                    <div className="contenedordescrip"> 
                       <p className="desde">desde</p>
                      <h1 className="h1m">mxn 7,200,500</h1>
                      <p className="lugar">sala</p>
                      <p className="descripcion">30m x 15,  3 baños, 6 recamaras y patio</p>
                      </div>
                      <div className="contenedorcontacto">
                      <a href="" className="modificar">WhasaApp</a>
                      <a href="" className="action action2">correo</a>
                      </div>
                  </div>
                  </div>        
              </div>
             
              </Link>
        </>
     );
}
 
export default Partecliente;