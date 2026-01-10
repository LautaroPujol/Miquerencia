import "./CartWidget.css"
import ImagenCarritoCompra from "../../assets/Imagenes/ImagenCarritoCompra.png"



const CartWidget = () => {
 
  return (
    <div >
     <img className="imgCarrito" src={ImagenCarritoCompra} alt="Imagen carrito de compras" />
    </div>
  )
}

export default CartWidget