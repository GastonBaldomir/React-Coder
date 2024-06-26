import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Item = ({productos}) => {
  
  const {carrito} = useContext(CartContext);
 
  return (
    <div className='productos-card'>
          <h2 className='titulo-card'>{productos.nombre}</h2>      
          <img src={productos.imagen} alt={productos.nombre} style={{ width: '130px', height: '130px' }} />
          <p>{productos.descripcion}</p>
          <h3 className='precio-card'> $ {productos.precio}</h3>
          <div className='link-card'>
            <Link to={`/Item/${productos.id}`} className='boton-finalizar'>Ver Info.</Link>
          </div>
          
    </div>
  )
}

export default Item