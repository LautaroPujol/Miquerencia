import { Link } from "react-router-dom"
import "./CartWidget.css"




const CartWidget = () => {
 
  return (
    <div >
      <Link to="/cart">
     <img className="imgCarrito" src= "/Imagenes/ImagenCarritoCompra.png" alt="Imagen carrito de compras" />
     </Link>
    </div>
  )
}

export default CartWidget