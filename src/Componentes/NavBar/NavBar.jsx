import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import LogoMiQuerencia from "../../assets/Imagenes/LogoMiQuerencia.png"


const NavBar = () => {
    return (
        <header>
            <img className="ImgLogo" src={LogoMiQuerencia} alt="Logo de Miquerencia" />
            <nav>
                <ul>
                    <li> Herramientas</li>
                    <li> Bulones</li>
                    <li> Electrico</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar