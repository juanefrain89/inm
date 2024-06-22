import "./menu.css"
import logo from "./logo.jpg"
import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <>
        <nav className="contenormenu">
            <div className="menustart">
            <Link to="/">  
                <img src={logo} alt=""  f className="logo"/>
                </Link>
                <p>uhudhud</p>
                <p>sdhufd</p>
            </div>
            <div className="menuend">
                <Link to="/publicar"> <p className="pmenu">iniciar sesion</p> </Link>
                
                <Link to="/registro">   
                <p className="pmenu">mis publicaciones</p>
                </Link>
                
            </div>

        </nav>
        </>
     );
}
 
export default Menu;
