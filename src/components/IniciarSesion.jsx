import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
const IniciarSesion = () => {
    
const imagenes =[{
    original : logo
  
  },
  {
    original:casa1
  },
  {
    original :casa2
  },
  {
    original:casa3
  }]
  
    
    return (
      <>
        <Menu />
  <ReactImageGallery
  items={imagenes}
  ></ReactImageGallery>
  
      </>
    );
  };
 
export default IniciarSesion;