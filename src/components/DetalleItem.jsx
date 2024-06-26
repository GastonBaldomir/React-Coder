import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext';

const DetalleItem = ({item}) => {

  const { agregarProducto }= useContext(CartContext)

  
  return (
    <div className='productos-card-detalle'>
          <h2 className='titulo-card'>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <img src={item.imagen} alt={item.nombre} style={{ width: '100px', height: '100px' }} />
          <h3 className='precio-card'>Precio: ${item.precio}</h3>
          <button className='button-card boton-finalizar' onClick={()=> agregarProducto(item)}>Agregar al carrito</button>
    </div>
  )
}

export default DetalleItem