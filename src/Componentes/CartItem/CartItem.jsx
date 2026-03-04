import { useContext } from "react"
import { CarritoContext } from "../../Context/Carritocontext"
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext)
    return (
        <div>
            <h4 className="mgl">{item.Nombre} </h4>
            <p className="mgl">Cantidad:{cantidad}</p>
            <p className="mgl">Precio: {item.Precio}</p>
            <button className="acci mgl" onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem