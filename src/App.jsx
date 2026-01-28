import "./App.css"
import React from 'react'
import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import Contador from "./Componentes/Contador/ItemCount"
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"



const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App