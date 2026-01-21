import "./CartWidget.css"
import ImagenCarritoCompra from "../../../public/Imagenes/ImagenCarritoCompra.png"



const CartWidget = () => {
 
  return (
    <div >
     <img className="imgCarrito" src={ImagenCarritoCompra} alt="Imagen carrito de compras" />
    </div>
  )
}

export default CartWidget