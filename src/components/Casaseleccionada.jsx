import React, { useEffect, useState } from 'react';
import casa1 from "./casaae2.jpg";
import casa2 from "./casaae3.jpg";
import casa3 from "./casa3.webp";
import casa4 from "./casa4.webp";
import logo from "./logo.jpg"
import Menu from "./Menu";
import aaron from "./aaron.jpg"
import "./casa.css"; 
import met from "./met.jpg"
import { LuBath } from "react-icons/lu";
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { CiRuler } from "react-icons/ci";
import Piepag from './Piepag';
import { IoBedOutline } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Slider = ({ da }) => {
  const [bcb, setBcb] = useState([]);
  const [propiedades, setPropiedades] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.post('http://localhost:3000/id', { id })
      .then(response => {
        console.log(response.data);
        setBcb(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, [id]);

  useEffect(() => {
    if (bcb.length > 0) {
      console.log(bcb[0].id);
    }
  }, [bcb]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [casa1, logo, casa2, casa3, casa4, aaron, met];
  const [quitar, setQuitar] = useState(true);
  const rootElement = document.getElementById('root');
  rootElement.style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";
  const [scrollb, setScrollb] = useState(window.scrollY);
  const form = document.querySelector(".form-con");
  const formulariocona = document.querySelector(".formulario-container");

  useEffect(() => {
    const handleScroll = () => {
      setScrollb(window.scrollY);
      console.log(window.scrollY);

      if (scrollb > 548 && scrollb < 1000) {
        form.style.position = "fixed";
        form.style.right = "0px";
        form.style.top = "10%";
        console.log(scrollb, "jsjs");
      }
      if (scrollb > 1000) {
        formulariocona.style.marginTop = "100px";
        console.log(window.scrollY, "ccccccc");
        form.style.display = "flex";
        form.style.alignItems = "end";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollb]);

  useEffect(() => {
    const alto = document.querySelector(".informacion-casa");
    const formcon = document.querySelector(".form-con");
    if (alto && formcon) {
      formcon.style.height = `${alto.clientHeight}px`;
    }
  }, []);

  const [x, setX] = useState(false);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const quitardisplay = () => {
    setQuitar(!quitar);
  };

  useEffect(() => {
    const c = document.querySelector(".leer");
    const menos = document.querySelector(".menos");
    if (!quitar) {
      if (c) c.style.display = "none";
      if (menos) menos.style.display = "block";
    } else {
      if (c) c.style.display = "block";
    }
  }, [quitar]);

  const fun = () => {
    setX(!x);
    const bb = document.querySelector(".absolu");
    const cvb = document.querySelector(".slider2");
    if (x) {
      document.body.style.overflow = "hidden";
      if (bb) bb.style.display = "block";
      if (cvb) cvb.style.display = "block";
    } else {
      document.body.style.overflow = "scroll";
      if (bb) bb.style.display = "none";
      if (cvb) cvb.style.display = "none";
    }
  };

  return (
    <>
      {bcb.length === 0 ? (
        <p>cargando</p>
      ) : (
        <>
          <Menu />
          <div className="absolu">
            <p className='xx' onClick={fun}>x</p>
          </div>

          <div className="slider2">
            <button className="prev" onClick={prevSlide}>❮</button>
            {images.map((image, index) => (
              <div
                key={index}
                className={index === currentIndex ? 'slide2 active' : 'slide2'}
              >
                {index === currentIndex && (
                  <img src={image} alt={`Slide ${index + 1}`} />
                )}
              </div>
            ))}
            <button className="next" onClick={nextSlide}>❯</button>
          </div>

          <div className="conte" onClick={fun}>
            <img src={casa1} alt="" className='ime ime1' />
            <img src={casa2} alt="" className='ime ime2' />
            <img src={casa4} alt="" className='ime ime2' />
          </div>

          <div className="slider">
            <button className="prev" onClick={prevSlide}>❮</button>
            {images.map((image, index) => (
              <div
                key={index}
                className={index === currentIndex ? 'slide active' : 'slide'}
              >
                {index === currentIndex && (
                  <img src={image} alt={`Slide ${index + 1}`} />
                )}
              </div>
            ))}
            <button className="next" onClick={nextSlide}>❯</button>
          </div>

          <div className="abajo-contenedor">
            <div className="informacion-casa">
            <div className="des">
                <h1 className='titulo'><center  className='titulo'>   Casa en Venta en {bcb[0].ciudad}</center></h1>
                <p>  </p>
              </div>
              <div className="bb">
                <p className='sa'>Venta MN 2,050,000</p>
                <p className='nn'>Casa · {bcb[0].metros} · {bcb[0].cuartos} recámaras · 2 estacionamientos- 5 baños</p>
              </div>
               
               
              <div>
                <p className='lorem'> {bcb[0].descripcion}
                </p>
                 
              </div>

              <ul className="iconos">
                <li> <IoBedOutline className='icono1' /></li>
                <li><LuBath className='icono1 ico' /></li>
                <li><MdBathtub className='icono1'></MdBathtub></li>
                <li><IoCarSportOutline className='icono1'></IoCarSportOutline></li>
                <li><CiRuler className='icono1'></CiRuler></li>
              </ul>
            </div>

            <div className="form-con">
              <div className="formulario-container">
                <h2 className='contac'>Contacto</h2>
                <form >
                  <div className="input-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required />
                  </div>
                  <button type="submit" className="btn-enviar">Enviar</button>
                </form>
                <div className="whatsapp-container">
                  <p>O contacta por WhatsApp:</p>
                  <a href="" className="actionn">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <Piepag />
        </>
      )}
    </>
  );
};

export default Slider;
