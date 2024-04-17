import React, { useEffect, useState } from 'react';
import casa1 from "./casa1.webp";
import casa2 from "./casa2.webp";
import casa3 from "./casa3.webp";
import casa4 from "./casa4.webp";
import logo from "./logo.jpg"
import Menu from "./Menu";
import "./casa.css"; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [casa1, logo];
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


  useEffect(() => {
    if(x== false){ 
    const slider = document.querySelector(".slider");
    slider.style.display = "none";
  }else{
    const slider = document.querySelector(".slider");
    slider.style.display ="block";
  }
  }, [x]); 

  const as =()=>{
    console.log("hsghdgd");
    xx(true)

if (x == true){    
  const conte = document.querySelector(".conte");
  conte.style.display ="none";
  const conteabajo = document.querySelector(".abajo-contenedor");
  conteabajo.style.display = "none"
  const slider = document.querySelector(".slider");
  slider.style.display="bock"

  
}
  }

  return (
    <>
      <Menu />

<div className="conte" onClick={as} >
  <img src={casa1} alt="" className='ime' />
  <div className="cone"> 
  <img src={casa2} alt=""  className='im'/>
  
  <img src={casa4} alt="" className='imm' />
  </div>
</div>

<div className="abajo-contenedor"> 
<div className="informacion-casa">
  <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nesciunt nulla animi libero ratione a iusto illo soluta maxime error porro earum ab, in esse officia et corporis qui nobis!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut laudantium voluptates doloribus, asperiores mollitia iusto nisi nobis laboriosam ea deserunt obcaecati id sit tempora dolorum vero ipsum ab? Soluta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil vero quisquam, eum ab magni? Odit iure exercitationem ad alias quis, aliquid possimus enim eveniet saepe numquam, rerum deleniti cumque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore provident totam ratione non odit! Veritatis voluptate eveniet qui optio! Perferendis corrupti reprehenderit amet quos? Consequuntur exercitationem saepe unde laudantium!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi accusantium facere sapiente doloremque! Tenetur nulla corporis error debitis libero odio tempora eos, nesciunt, non ullam, nemo doloremque sint obcaecati.
    Lorem  sit amet consectetur adipisicing elit. Labore blanditiis praesentium facilis repellendus consequuntur aut asperiores sed voluptates nisi assumenda, perferendis nulla itaque exercitationem quidem iusto amet inventore. Mollitia, voluptas!
  </p>
</div>

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

    </>
  );
};

export default Slider;
