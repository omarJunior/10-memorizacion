import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({page = 1, mensaje}) => {

    const [dataEmpleado, setDataEmpleado] = useState([])
    
    useEffect(()=>{
        conseguirEmpleados(page)
        mensaje()
    }, [page, mensaje])

    useEffect(()=>{
    }, [dataEmpleado])

    const conseguirEmpleados = async(page)=>{
        try {
            const url = "https://reqres.in/api/users?page="+page
            const peticion = await fetch(url)
            const {data: empleados} = await peticion.json()
            setDataEmpleado(empleados)

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <p className='p'>Mostrando la pagina: <strong>{page}</strong>
        </p>
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
)