import { useState, useEffect } from "react"

function LifeCycleFunctionComponent () {
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log("Componente Montado!")

        return() => {
            console.log("Componente foi Desmontado!")
        }
    },[])

    useEffect(() => {
        console.log("Componente atualizado!")
    },[count])

    const increment = () => {
        setCount(count + 1)
    }

    return (
      <div>
        <p>Contagem: {count}</p>
        
        <button onClick={increment}>Incrementou</button>
      </div>
    );
}

export default LifeCycleFunctionComponent