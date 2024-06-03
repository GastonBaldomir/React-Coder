import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({productos}) => {
  return (
    <div className='productos-card'>
          <h3>{productos.nombre}</h3>
          <p>{productos.descripcion}</p>
          <p>Precio: ${productos.precio}</p>
          <p>Categoría: {productos.categoria}</p>
          <img src={productos.imagen} alt={productos.nombre} style={{ width: '100px', height: '100px' }} />
          <div>
            <Link to={`/Item/${productos.id}`}>Ver Info.</Link>
          </div>
    </div>
  )
}

export default Item