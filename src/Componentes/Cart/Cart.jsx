import { useContext } from "react";
import { CarritoContext } from "../../Context/Carritocontext";
import { Link } from "react-router-dom";
import "./cart.css"
import "../ItemDetail/ItemDetail.css"
import React from 'react'
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, CantidadTotal } = useContext(CarritoContext)
    if (CantidadTotal === 0) {
        return (
            <>
                <h2>El carrito esta vacio</h2>
                <Link className="volveralatienda" to="/">Volver a la tienda</Link>
            </>
        )
    }
    return (
        <div >
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3 className="mgl">Total: ${total}</h3>
            <h3 className="mgl">Cantidad total: {CantidadTotal}</h3>
            <div className="separacion">
                <button className="acci" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link className="acci" to="/checkout">Realizar compra </Link>
            </div>
        </div>
    )
}

export default Cart