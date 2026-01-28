import { useEffect, useState } from "react" 

const Contador = ({stock, inicial, funcionAgregar}) => {
  
    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }
   

    return (
        <div>
            <button onClick={restarContador} disabled={contador === 0}>-</button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}>+</button>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default Contador