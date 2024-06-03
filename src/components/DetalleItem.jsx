import React from 'react'

const DetalleItem = ({item}) => {



  return (
    <div className='productos-card-detalle'>
          <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
          <p>Precio: ${item.precio}</p>
          <p>Categoría: {item.categoria}</p>
          <img src={item.imagen} alt={item.nombre} style={{ width: '100px', height: '100px' }} />
          
    </div>
  )
}

export default DetalleItem