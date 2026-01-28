import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({ id, Nombre, Precio, Img }) => {
  return (
    <div >
      <div className="Card">
        <img className="ImgCatalogo" src={Img} alt={Nombre} />
        <h3>{Nombre}</h3>
        <p>{Precio}</p>
        <Link to={`/item/${id}`}>
          <button className="button-card">Ver detalles</button>
        </Link>

      </div>
    </div>
  )
}

export default Item