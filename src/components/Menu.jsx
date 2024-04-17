import "./menu.css"
import logo from "./logo.jpg"
import { Link } from "react-router-dom";
const Menu = () => {
    return ( 
        <>
        <nav className="contenormenu">
            <div className="menustart">
                <img src={logo} alt=""  className="logo"/>
                <p>uhudhud</p>
                <p>sdhufd</p>
            </div>
            <div className="menuend">
                <Link to="/publicar"> <p className="pmenu">publicar</p> </Link>
                
                <Link to="/iniciar">   
                <p className="pmenu">iniciar sesion</p>
                </Link>
                
            </div>

        </nav>
        </>
     );
}
 
export default Menu;
