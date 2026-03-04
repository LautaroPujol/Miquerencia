import { createContext, useState } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    CantidadTotal: 0
})

export const CarritoProvider = ({ children }) => {
    //Se crean los estados para el carrito, el total y la cantidad total de productos en el carrito
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [CantidadTotal, setCantidadTotal] = useState(0)

    console.log(carrito)

    //Funciones auxiliares para el carrito

    //Función 1: Agregar la cantidad al carrito 
    const agregarAlCarrito = (item, cantidad) => {
        // Buscamos usando producto.item.id
        const productoExistente = carrito.find(producto => producto.item.id === item.id)

        if (!productoExistente) {
            setCarrito([...carrito, { item, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.Precio * cantidad))
        } else {
            const carritoActualizado = carrito.map(prod => {
                // Comparamos usando prod.item.id
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.Precio * cantidad))
        }
    }

    //Funcion para eliminar el producto del carrito
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(producto => producto.item.id === id)
        const carritoActualizado = carrito.filter(producto => producto.item.id !== id)
        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.Precio * productoEliminado.cantidad))
    }
    //Funcion para vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    return (
        <CarritoContext.Provider value={{ carrito, total, CantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
} 
