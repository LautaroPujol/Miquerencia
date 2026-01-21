import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import LogoMiQuerencia from "../../../public/Imagenes/LogoMiQuerencia.png"


const NavBar = () => {
    return (
        <header>
            <img className="ImgLogo" src={LogoMiQuerencia} alt="Logo de Miquerencia" />
            <nav>
                <ul>
                    <li> Herramientas</li>
                    <li> Bulones</li>
                    <li> Electronica</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar