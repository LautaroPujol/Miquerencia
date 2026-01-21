import { useEffect, useState, } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        setContador (Contador + 1)
    }
    const restarContador = () => {
        setContador (Contador - 1)
    }
   
    /*useEffect(() => {
        document.title = `Contador: ${contador}`
        console.log("El contador se ha actualizado " +  contador)
    }, [contador])*/
  return (
    /*<div>
        <button onClick={restarContador} disabled={contador===0}>-</button>
        <strong>{contador}</strong>
        <button onClick={sumarContador}>+</button>
    </div>*/
    <></>
  )
}

export default Contador