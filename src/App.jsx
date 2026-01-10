import "./App.css"
import React from 'react'
import NavBar from "./Componentes/NavBar/NavBar"
import Boton from "./Componentes/Boton/Boton"
import Cards from "./Componentes/Cards/Cards"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"


const App = () => {

  return (
    <>
      <NavBar />
      <div className="ItemListflex">
      <ItemListContainer texto="Bienvenidos a la tienda oficial de miquerencia" />
      <ItemListContainer texto="Preentrega1"/>
      </div>
    </>
  )
}


export default App