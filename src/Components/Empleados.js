import React, { useEffect, useState } from 'react'

export const Empleados = () => {

    const [dataEmpleado, setDataEmpleado] = useState([])
    
    useEffect(()=>{
        console.log("useEffect de empleados")
        conseguirEmpleados()
    }, [])

    const conseguirEmpleados = async()=>{
        try {
            const url = "https://reqres.in/api/users?page=1"
            const peticion = await fetch(url)
            const {data: empleados} = await peticion.json()
            console.log(empleados)
            setDataEmpleado(empleados)

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        {
            dataEmpleado.length >= 1 && (
                dataEmpleado.map((item)=>(
                    <ul key={item.id} className="empleados">
                        <li>{item.email}</li>
                        <li>{item.first_name}</li>
                        <li>{item.last_name}</li>
                    </ul>
                ))
            )
        }
    </div>
  )
}
