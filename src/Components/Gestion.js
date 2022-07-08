import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("")
    const gestorInput = useRef("")

    const asignarGestor = (e)=>{
        setNombre(gestorInput.current.value)
    }

    console.log("La vista se ha renderizado")

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>

        <input 
            type="text"
            ref={gestorInput}            
            onChange={asignarGestor}
            placeholder="Introduce tu nombre..."
        />

        <h2>Listado de empleados</h2>
        <p>Los usuarios son gestionados por: {nombre}</p>
        <Empleados />
    </div>
  )
}
