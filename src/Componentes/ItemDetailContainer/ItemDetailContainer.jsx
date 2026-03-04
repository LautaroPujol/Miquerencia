import { useEffect, useState } from "react"
import { db } from "../../Firebase/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import Loading from "../Loading/Loading"



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(false)
  const { idItem } = useParams()

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem)
    setLoading(true)
    getDoc(nuevoDoc)
      .then(respuesta => {
        const data = respuesta.data()
        const nuevoProducto = { id: respuesta.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })


  }, [idItem])

  /*useEffect (() => {
      getUnProducto (Number(idItem))
      .then (respuesta => setProducto (respuesta))
  }, [idItem]) 
  if (!producto) {
      return <h2>Cargando detalle...</h2>
    }*/


  return (
    <>
      {loading ? <Loading /> : <ItemDetail {...producto}></ItemDetail>}
    </>
  )
}

export default ItemDetailContainer