import React from 'react';
import casa1 from "./casa1.webp";
import casa2 from "./casa2.webp";
import casa3 from "./casa3.webp";
import casa4 from "./casa4.webp";
import logo from "./logo.jpg"
import Menu from "./Menu";
import aaron from "./aaron.jpg"
import "./lg.css"

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const Lg = () => {
    
    const imagenes = [
        { original: logo },
        { original: casa1 },
        { original: casa2 },
        { original: casa3 },
        {original: aaron}
    ];
    
    return (
        <>
           <div className="app">
      <header>
        <div className="header-wrapper">
          <h1>React image gallery demo</h1>
        </div>
      </header>
      <div className="image-gallery-wrapper">
        <ImageGallery items={imagenes} />
      </div>
    </div>
        </>
    );
};
 
export default Lg;
