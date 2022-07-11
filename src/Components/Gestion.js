import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("")
    const [pagina, setPagina] = useState(1)
    const gestorInput = useRef("")

    const asignarGestor = (e)=>{
        //setNombre(gestorInput.current.value)
        setNombre(e.target.value)
    }

    useEffect(()=>{
      console.log("Vista gestion actualizada")
    }, [nombre, pagina])

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
        <button disabled={(pagina === 1) ? true : false} onClick={()=> setPagina(1)}>Pagina 1</button>
        <button disabled={(pagina === 2) ? true : false} onClick={()=> setPagina(2)}>Pagina 2</button>
        <Empleados page={pagina}/>
    </div>
  )
}
