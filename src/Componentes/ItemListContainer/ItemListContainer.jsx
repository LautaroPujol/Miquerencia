
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
/*import { getProductos, getProductoPorCategoria,} from "../../asyncmock"*/
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {


  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() =>{
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos")
    getDocs(misProductos)
    .then(respuesta => {
      const nuevosProductos = respuesta.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos((nuevosProductos))
    })
    .catch(error => console.log(error))
  },[idCategoria])

 

  return (
    <div>
      <h2 className="TextoItem"></h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer