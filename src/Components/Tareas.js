import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([])
    const [contador, setContador] = useState(0)

    const guardarTareas = (e)=>{
        e.preventDefault()
        if(e.target.descripcion.value === ""){
            return alert("Llene el input")
        }
        let tareas_actualizadas = [...tareas, e.target.descripcion.value]
        setTareas(tareas_actualizadas)

        document.getElementById("miForm").reset();
    }

    const eliminarTarea = (index)=>{
        const filtro = tareas.filter((item, indice) => indice !== index)
        setTareas(filtro)
    }

    const sumarContador = ()=>{
        setContador(contador + 1)
    }

    const contadorPasados = (acc)=>{
        console.log("acc:", acc)
        for(let i = 0; i <= acc; i++){
            console.log("Ejecutando acumulacion de contadores del pasado...!")
        }

        return `Contador manual de tareas: ${acc}`
    }

    //memorizar acciones para no volverlas a repetir, solo se ejecutara cuando deba
    const memoContadores = useMemo(() => contadorPasados(contador), [contador])

  return (
    <div className='tareas-container'>
        <h1>Mis Tareas</h1>

        <form onSubmit={guardarTareas} id="miForm" autoComplete='off'>
            <input 
                type="text" 
                name="descripcion" 
                placeholder='Describe la tarea...' />

            <input type="submit" value="Guardar" />
        </form>
        
        <h3>{memoContadores}</h3>
        <button onClick={()=> sumarContador()}>Sumar</button>

        <h3>Lista de Tareas:</h3>
        <ul>
            {tareas.map((item, indice) => (
                <li key={indice}>
                    {item}
                    &nbsp;
                    <button onClick={()=> eliminarTarea(indice)}>X</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
