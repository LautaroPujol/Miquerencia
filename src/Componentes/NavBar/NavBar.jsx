import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link,} from "react-router-dom"


const NavBar = () => {
    return (
        <header>
            <Link to="/"> 
            <img className="ImgLogo" src="/Imagenes/LogoMiQuerencia.png" alt="Logo de Miquerencia" />
            </Link>
            <nav className="navbar">
                <ul>
                    <li> 
                        <Link to="/categoria/Herramientas">Herramientas</Link></li>
                    <li> <Link to="/categoria/Electronica">Electronica</Link></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar