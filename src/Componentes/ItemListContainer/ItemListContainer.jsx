
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos, getProductoPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {


  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos
    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, [idCategoria])
  console.log(productos)


  return (
    <div>
      <h2 className="TextoItem">Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer