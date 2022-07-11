import React, { useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([])

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
        <hr />

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
