import "./ItemDetail.css"
import Contador from "../Contador/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"



const ItemDetail = ({ id, Nombre, Precio, Img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejarCantidad = (cantidad) => {
    console.log("Se agrego al carrito la cantidad de: " + cantidad)
    setAgregarCantidad(cantidad);
  }

  return (
    <div className="ItemDetail">
      <h2>{Nombre}</h2>
      <p>Precio: {Precio}</p>
      <img src={Img} alt={Nombre} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minus, quam quisquam, velit officia obcaecati quaerat sint hic est optio, excepturi inventore. Voluptatibus nemo eius ipsum rerum vero accusantium ea!</p>
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