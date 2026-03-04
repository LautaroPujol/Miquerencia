import { use, useContext, useState } from "react"
import { CarritoContext } from "../../Context/Carritocontext";
import { db } from "../../Firebase/firebase";
import { collection, addDoc, doc } from "firebase/firestore";
import "./Checkout.css"

const Checkout = () => {
    const { carrito, total, CantidadTotal, vaciarCarrito } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()

        if (!nombre || !telefono || !email) {
            setError("Por favor, completá todos los campos para poder armar tu pedido.")
            return
        }

        setError("")

        const ordenDeCompra = {
            comprador: {
                nombre: nombre,
                telefono: telefono,
                email: email
            },
            productos: carrito,
            total: total,
            fecha: new Date()
        }
        addDoc(collection(db, "ordenes"), ordenDeCompra)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                alert(`¡Gracias por tu compra, ${nombre}! Nos comunicaremos al ${telefono} para coordinar la entrega.`)

            })
            .catch((error) => {
                console.error("Error al generar la orden:", error);
                setError("Error al generar la orden de compra");
            });


    }

    return (
        <div className='checkoutflex'>

            {/*FORMULARIO */}
            <div className="fl">
                <h2 className="fincom">Finalizar Compra</h2>

                {error && <p className="error-mensaje">{error}</p>}

                <form className="form" onSubmit={manejarEnvio}>
                    <div>
                        <label className="label-check" htmlFor="nombre">Nombre completo:</label> <br />
                        <input className="input-check"
                            type="text"
                            id="nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                            required
                        />
                    </div>
                    <div>
                        <label className="label-check" htmlFor="email">Email:</label> <br />
                        <input className="input-check"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div>
                        <label className="label-check" htmlFor="telefono">Teléfono:</label> <br />
                        <input className="input-check"
                            type="text"
                            id="telefono"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                            required
                        />
                    </div>

                    <button className="button-check" type="submit">Confirmar compra</button>
                </form>
            </div>

            {/*RESUMEN DE COMPRA */}
            <div className="resumen-compra">
                <h2>Resumen de tu pedido</h2>

                <div className="mgb">
                    {carrito.map(producto => (
                        <div className="info" key={producto.item.id}>
                            <span>{producto.cantidad} x {producto.item.Nombre}</span>
                            <span>${producto.item.Precio * producto.cantidad}</span>
                        </div>
                    ))}
                </div>

                <h3>Total a pagar: ${total}</h3>
            </div>

        </div>
    )
}

export default Checkout