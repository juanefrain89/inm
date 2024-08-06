import { useEffect, useState } from "react";
import "./dos.css";
import axios from "axios";
import Menu from "./Menu.jsx";

const Dos = () => {
    const [estado, setEstado] = useState({
        numero: "",
        precio: "",
        correo: "",
        metros: "",
        baños: "",
        direccion: "",
        descripcion: "",
        cuartos: "",
        imagen: null // Cambiado a null para manejar archivos
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEstado((prevEstado) => ({
            ...prevEstado,
            imagen: file,
        }));
    };

    useEffect(() => {
        const roo = document.querySelector("#root");
        roo.style.backgroundColor = "#f2f2f2";
    }, []);

    const [cv, cc] = useState({});
    const [visible, setVisible] = useState(false);

    const fun = (e) => {
        e.preventDefault();
        setEstado({
            ...estado,
            [e.target.name]: e.target.value 
        });
        console.log(estado);
    };

    const mandar = () => {
        const userConfirmed = window.confirm("¿Deseas mandar nuevo registro?");
        if (userConfirmed) {
            const formData = new FormData();
            for (const key in estado) {
                formData.append(key, estado[key]);
            }

            axios.post("https://inmueblesnode-2.onrender.com/l", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((res) => {
                console.log(res.data);
                cc(res.data);
                console.log("Registro enviado");
            })
            .catch((err) => {
                console.log(err);
            });





            
        }
    };

    return (
        <>
            <Menu />
            <div className="fa">
                <div className="faa">
                    <div className="conu">
                        <h1>Numero*:</h1>
                        <input name="numero" onChange={fun} className="esado" type="number" />
                        <h1>Precio</h1>
                        <input name="precio" onChange={fun} className="esado" type="number" />
                        <h1>Cuartos</h1>
                        <input onChange={fun} name="cuartos" className="esado" type="number" />
                    </div>
                    <div className="conu">
                        <h1>Correo Electronico</h1>
                        <input name="correo" onChange={fun} className="esado" type="email" />
                        <h1>Baños</h1>
                        <input name="baños" className="esado" onChange={fun} type="number" />
                        <h1>Imagenes</h1>
                        <input type="file" onChange={handleImageChange} name="imagen" />
                    </div>
                    <div className="conu">
                        <h1>Metros</h1>
                        <input onChange={fun} name="metros" className="esado" type="text" />
                        <h1>Direccion</h1>
                        <input onChange={fun} name="direccion" className="esado" type="text" />
                    </div>
                    <div className="ff">
                        <h1>Añade una descripcion</h1>
                        <textarea name="descripcion" onChange={fun} id="tex"></textarea>
                        <button onClick={mandar} className="bon">Enviar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dos;
