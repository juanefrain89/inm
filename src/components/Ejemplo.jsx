import Menu from "./Menu";
import "./ejemplo.css";
import Piepag from "./Piepag";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Ejemplo = () => {
    const [nuevo, setNuevo] = useState([]);
    const [propiedades, setPropiedades] = useState([]);
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [numeroElementos, setNumeroElementos] = useState(6);
    const [preciominimo, setPrecioMinimo] = useState();
    const [inp, setInp] = useState(0);
    const [primerHijoActivo, setPrimerHijoActivo] = useState(false);
    const [contador, setContador] = useState(9);

    useEffect(() => {
        axios.get("http://localhost:3000/peticiones")
            .then(response => {
                setPropiedades(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        setNuevo(propiedades.filter(item => item.costo > inp));
        console.log(nuevo);
    }, [inp, propiedades]);

    useEffect(() => {
        setContador(nuevo.length);
    }, [nuevo]);

    useEffect(() => {
        const primerHijo = document.querySelector('.contenedorsig');
        if (primerHijo) {
            primerHijo.classList.add('active');
        }
    }, []);

  

    const botonfiltrar = (e) => {
        e.preventDefault();
        setPrecioMinimo(e.target.value);
        console.log(preciominimo);
    };

    const cambiarfiltros = (e) => {
        e.preventDefault();
        setInp(preciominimo);
        console.log(inp);
        setNumeroElementos(6);
        setPrimerHijoActivo(true);
        setMostrarContenido(!mostrarContenido);
    };

    const siguiente = (e) => {
        e.preventDefault();
        setNumeroElementos(e.target.value * 6);
        const elementos = document.querySelectorAll('.contenedorsig');
        elementos.forEach(function (elemento) {
            elemento.classList.remove('active');
        });
        e.target.closest('.contenedorsig').classList.add('active');
    };

    const x = () => {
        setMostrarContenido(!mostrarContenido);
    };

    return (
        <>
            {propiedades.length === 0 ? (
                <p>cargando</p>
            ) : (
                <>
                    <Menu />
                    
                    <div className="contenedorinput">
                        <input type="text" className="jm" placeholder="ingresa estado ciudad o pais" />
                        <div className="jj" onClick={x}><center><p>filtros</p></center></div>
                        <input type="text" className="jm ll" placeholder="ingresa compra o renta" />
                        <input type="number" className="jm ll" placeholder="ingresa renta o compra" />
                        <input type="number" className="jm ll" placeholder="recamaras" />
                    </div>
                    {mostrarContenido && (
                        <div className='contenidooculto'>
                            <div className='hs'>
                                <div className="contenidooculto1">
                                    <p>precio-minimo</p>
                                    <input type="number" onChange={botonfiltrar} />
                                    <p>precio-maximo</p>
                                    <input type="number" onChange={botonfiltrar} />
                                    <button onClick={cambiarfiltros}>aceptar</button>
                                </div>
                                <div className="contenidooculto1"><p></p></div>
                            </div>
                        </div>
                    )}
                    {nuevo.slice(numeroElementos - 6, numeroElementos).map((e, index) => (
                        <Link key={e.id} to={`/casa/${e.id}`}>
                            <div className="contenedoropciones">
                                <div className="one">
                                    <div className="conetendorimagen1">
                                        <img src={`data:image/jpeg;base64,${e.imagen}`} alt="casa" className="casa" />
                                    </div>
                                    <div className="contenedoropcioneshijo">
                                        <div className="contenedordescrip">
                                            <p className="desde">desde</p>
                                            <h1 className="h1m">{e.costo}</h1>
                                            <p className="lugar">{e.ciudad}</p>
                                            <p className="descripcion">{e.descripcion}</p>
                                        </div>
                                        <div className="contenedorcontacto">
                                            <a href={`https://api.whatsapp.com/send?phone=${e.whatsapp}&text=Hola%20desde%20${encodeURIComponent(e.ciudad)}`} className="action">WhatsApp</a>
                                            <a href={`mailto:${e.email}`} className="action action2">correo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="hj">
                        {nuevo.slice(0, Math.ceil(contador / 6)).map((elemento, index) => (
                            <div key={index} className={`contenedorsig ${index === 0 && primerHijoActivo ? 'active' : ''}`}>
                                <input
                                    type="submit"
                                    className="invisible"
                                    onClick={siguiente}
                                    value={index + 1}
                                />
                            </div>
                        ))}
                    </div>
                    <Piepag />
                </>
            )}
        </>
    );
}

export default Ejemplo;
