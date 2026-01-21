
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import {useState, useEffect} from "react"
import { getProductos} from "../../asyncmock" 


const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])

  useEffect(() => {
    getProductos()
    .then (respuesta => setProductos (respuesta))
    .catch (error => console.log (error))
  }, [])
    

  return (
    <div>
      <h2 className="TextoItem">Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer