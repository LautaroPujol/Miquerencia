import "./Item.css"
const Item = ({ id, Nombre, Precio, Img }) => {
  return (
    <div >
      <div className="Card">
        <img className="ImgCatalogo" src={Img} alt={Nombre} />
        <h3>Nombre: {Nombre}</h3>
        <p>Precio: {Precio}</p>
        <div><button>Ver detalles</button></div>
      </div>
    </div>
  )
}

export default Item