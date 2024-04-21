import React, { useEffect, useState } from 'react';
import casa1 from "./casa1.webp";
import casa2 from "./casa2.webp";
import casa3 from "./casa3.webp";
import casa4 from "./casa4.webp";
import logo from "./logo.jpg"
import Menu from "./Menu";
import aaron from "./aaron.jpg"
import "./casa.css"; 
import met from "./met.jpg"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [casa1, logo, casa2, casa3,casa4, aaron , met];
  const rootElement = document.getElementById('root');
  rootElement.style.backgroundColor = "white";
  document.body.style.backgroundColor="white"
  
const [x, xx]=useState(false)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const imagenes = [
    { original: logo },
    { original: casa1 },
    { original: casa2 },
    { original: casa3 },
    {original: aaron}
];





  

  return (
    <>
      <Menu />
      <i class="fa-solid fa-user">ffffff</i>
      

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

<div className="conte"  >
  <img src={casa1} alt="" className='ime ime1' />
 
  <img src={casa2} alt=""  className='ime ime2'/>
  
  <img src={casa4} alt="" className='ime ime2' />

</div>


<div className="abajo-contenedor"> 

<div className="informacion-casa">
<div className="bb">
<p className='sa'>Venta MN 2,050,000</p>
  <p className='nn'>Casa · 180m² · 3 recámaras · 2 estacionamientos</p>

</div>

<div className="des"> <h1>Casa en Venta en Fraccionamiento Las Lomas Torreón, Coahuila </h1>
<p> 
Estás buscando tu casa te presentamos uno de los Fraccionamientos con la mejor de las amenidades, cuenta alberca, Casa club, amplias áreas verdes, casa club, cancha de fútbol, cancha de Padel.
Servicio de Vigilancia las 24 horas del día.
Planta Baja:</p></div>

  <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nesciunt nulla animi libero ratione a iusto illo soluta maxime error porro earum ab, in esse officia et corporis qui nobis!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut laudantium voluptates doloribus, asperiores mollitia iusto nisi nobis laboriosam ea deserunt obcaecati id sit tempora dolorum vero ipsum ab? Soluta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil vero quisquam, eum ab magni? Odit iure exercitationem ad alias quis, aliquid possimus enim eveniet saepe numquam, rerum deleniti cumque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore provident totam ratione non odit! Veritatis voluptate eveniet qui optio! Perferendis corrupti reprehenderit amet quos? Consequuntur exercitationem saepe unde laudantium!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi accusantium facere sapiente doloremque! Tenetur nulla corporis error debitis libero odio tempora eos, nesciunt, non ullam, nemo doloremque sint obcaecati.
    Lorem  sit amet consectetur adipisicing elit. Labore blanditiis praesentium facilis repellendus consequuntur aut asperiores sed voluptates nisi assumenda, perferendis nulla itaque exercitationem quidem iusto amet inventore. Mollitia, voluptas!
  </p>
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
        <a href="" className="actionn">WhasaApp</a>
      </div>
    </div>
    </div>

    </div>

      

    </>
  );
};

export default Slider;