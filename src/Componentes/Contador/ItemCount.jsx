import { useEffect, useState } from "react" 
import "./ItemCount.css"

const Contador = ({stock, inicial, funcionAgregar}) => {
  
    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }
   

    return (
        <div >
            <button className="backg" onClick={restarContador} disabled={contador === 0}>-</button>
            <strong>{contador}</strong>
            <button className="backg" onClick={sumarContador}>+</button>
            <button className="backg"  onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default Contador