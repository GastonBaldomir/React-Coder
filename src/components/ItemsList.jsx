import React from 'react'
import Item from './Item'

const ItemsList = ({productos, titulo}) => {
  return (
    <div >
        <h2 className=''>{titulo}</h2>
        <div className='gridClass'>
          {productos.map((prod) => <Item productos = {prod} key={productos.id } />)}
        </div>
    </div>
  )
}

export default ItemsList