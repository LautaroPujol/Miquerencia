import "./ItemDetail.css"
import Contador from "../Contador/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/Carritocontext"
import { useContext } from "react"


const ItemDetail = ({ id, Nombre, Precio, Img, stock, descripcion }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext)

  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, Nombre, Precio }
    agregarAlCarrito(item, cantidad)
  }


  return (
    <div className="ItemDetail">
      <h2>{Nombre}</h2>
      <p>Precio: {Precio}</p>
      <img src={Img} alt={Nombre} />
      <p>{descripcion}</p>
      <div className="AccionesPostCompra">
        {
          agregarCantidad > 0 ? (
            <>
              <Link to="/cart" className="accion">Finalizar compra</Link>
              <Link to="/" className="accion">Seguir comprando</Link>
            </>
          ) : (
            <Contador inicial={1} stock={stock} funcionAgregar={manejarCantidad} />
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail