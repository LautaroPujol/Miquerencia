import "./App.css"
import React from 'react'
import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import Contador from "./Componentes/Contador/ItemCount"
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./Context/Carritocontext"




const App = () => {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/Miquerencia" element={<ItemDetailContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}


export default App