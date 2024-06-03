import React, { useEffect, useState } from 'react'
import { mostrarProductoPorId } from '../helpers/pedirDatos'
import DetalleItem from './DetalleItem'
import { useParams } from 'react-router-dom'

const MostrarItemContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id;
 
    useEffect(()=>{
        mostrarProductoPorId(id)
            .then((res)=>{
                setItem(res)
            }
            )
        
    },[id]);

  return (
    <div>
        {item && <DetalleItem item={item}/>}
    </div>
  )
}

export default MostrarItemContainer