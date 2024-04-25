import Menu from "./Menu";
import "./ejemplo.css"
import casa1 from "./casa1.webp"
import Piepag from "./Piepag";
import Slider from "./Casaseleccionada";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
import { useEffect, useState } from "react";
const Ejemplo = () => {

    let propiedades = [{
        ciudad:"1",
        precio : 2000,
        status : "comprar"
    },{
        ciudad : "2",
        precio :1500,
        status :"compra"
    },{
        ciudad : "3",
        precio :1500,
        status :"compra"
    },{
        ciudad : "4",
        precio :1500,
        status :"renta"
    },{
        ciudad:"5",
        precio : 2000,
        status : "comprar"
    },{
        ciudad:"6",
        precio : 2000,
        status : "comprar"
    },{
        ciudad:"7",
        precio : 2000,
        status : "comprar"
    },{
        ciudad:"8",
        precio : 2000,
        status : "comprar"
    },{
        ciudad:"9",
        precio : 2000,
        status : "comprar"
    },{
        ciudad : "10",
        precio :1500,
        status :"compra"
    },{
        ciudad : "11",
        precio :1500,
        status :"compra"
    },{
        ciudad : "12",
        precio :1500,
        status :"compra"
    },{
        ciudad : "13",
        precio :1500,
        status :"compra"
    },{
        ciudad : "14",
        precio :1500,
        status :"compra"
    },{
        ciudad : "15",
        precio :1500,
        status :"compra"
    },{
        ciudad : "16",
        precio :1500,
        status :"compra"
    },{
        ciudad : "17",
        precio :1500,
        status :"compra"
    },{
        ciudad : "18",
        precio :1500,
        status :"compra"
    },{
        ciudad : "19",
        precio :1500,
        status :"compra"
    },{
        ciudad : "20",
        precio :1500,
        status :"compra"
    },{
        ciudad : "21",
        precio :1500,
        status :"compra"
    },{
        ciudad : "22",
        precio :1500,
        status :"compra"
    },{
        ciudad : "23",
        precio :1500,
        status :"compra"
    },{
        ciudad : "24",
        precio :15000,
        status :"compra"
    },{
        ciudad : "25",
        precio :15000,
        status :"compra"
    }
]
const [numeroElementos , setnumeroElementos]= useState(6);

    const propiedades2 = []
    for(let i=0 ; i<3; i++){
        propiedades2.push(propiedades[i])
        console.log(propiedades2);
        
    }

const[preciominimo, setpreciominimo]=useState()
    const botonfiltrar =(e)=>{
e.preventDefault()
setpreciominimo(e.target.value)
console.log(preciominimo);


    }
    
    const [primerHijoActivo, setPrimerHijoActivo] = useState(false);

    const cambiarfiltros = (e) => {
        e.preventDefault();
        setinp(preciominimo);
        console.log(inp);
        setnumeroElementos(1 * 6);
        setPrimerHijoActivo(true);
    };


const siguiente =(e)=>{
    e.preventDefault();
    setnumeroElementos(e.target.value *6)
    var elementos = document.querySelectorAll('.contenedorsig');
    elementos.forEach(function(elemento) {
        elemento.classList.remove('active');
    }); 
    e.target.closest('.contenedorsig').classList.add('active');
}

    const [inp, setinp]=useState(0)

    const nuevo = propiedades.filter(item => item.precio > inp )
    const id =1
    const rootElement = document.getElementById('root');
    const [contador, setcontador]=useState(9)
    

   
    

useEffect(()=>{

    setcontador(nuevo.length)
}

,[nuevo])

    const [mostrarContenido, setmostrar]=useState(false);
    const x =()=>{
        setmostrar(!mostrarContenido)
    }

    const casaseleccionada = "juani"
    return ( 
        <>
         <Menu />
      

          <div className="contenedorinput"> 
         
          <input type="text" className="jm"  placeholder="ingresa estado ciudad o pais" />
          <div type="text" className="jj"  onClick={x} ><center><p>filtros</p></center></div>
          



            <input type="text" className="jm ll" placeholder="ingresa compra o renta" />


            <input type="number" className="jm ll" placeholder="ingresa renta o compra" />
            
            <input type="number" className="jm ll" placeholder="recamaras" />
          </div>
          {mostrarContenido && (
        <div className='contenidooculto' >
         <div className='hs'> <div className="contenidooculto1"><p   >precio-minimo</p>
         <input type="number" />
         <p >precio-maximo</p>
         <input type="text" onChange={botonfiltrar} />
         <button onClick={cambiarfiltros}>aceptar</button>
         </div>
         <div className="contenidooculto1"><p ></p></div>
          </div>
        </div>
      )}


          {nuevo.slice(numeroElementos-6,numeroElementos).map((e)=>(
              <Link to={`/casa/${id}`}>
              <div className="contenedoropciones">
                  <div className="one"> 
                  <div className="conetendorimagen1">
                      <img src={casa1} alt=""  className="casa"/>
                  </div>
                  <div className="contenedoropcioneshijo">
                    <div className="contenedordescrip"> 
                       <p className="desde">desde</p>
                      <h1 className="h1m">mxn 7,200,500</h1>
                      <p className="lugar">{e.ciudad}</p>
                      <p className="descripcion">30m x 15,  3 baños, 6 recamaras y patio</p>
                      </div>
                      <div className="contenedorcontacto">
                      <a href="" className="action">WhasaApp</a>
                      <a href="" className="action action2">correo</a>
                      </div>
                  </div>
                  </div>
              </div>
             
              </Link>
              
            
            
          ))}
          

         
<div className="hj">
{nuevo.slice(0,Math.ceil(contador / 6)).map((elemento, index) => (
    <div key={index} className={`contenedorsig ${index === 0   || primerHijoActivo  ? 'active' : ''}`}> 
        <input 
            type="submit" 
            className="invisible" 
            onClick={siguiente} 
            value={index + 1}
        />
    </div>
))}



          </div>
          <Piepag></Piepag>
       

        </>
     );
}
 
export default Ejemplo;