import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  
const [producto, setProducto] = useState (null)

const {idItem} = useParams()

useEffect (() => {
    getUnProducto (Number(idItem))
    .then (respuesta => setProducto (respuesta))
}, [idItem]) 
if (!producto) {
    return <h2>Cargando detalle...</h2>
  }


  return (
    <div><ItemDetail {...producto}></ItemDetail></div>
  )
}

export default ItemDetailContainer