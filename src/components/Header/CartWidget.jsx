import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
  const { calcularCantidad }= useContext(CartContext)
  return (
    <div className='carrito'>
        <Link className='nav-link' to='/carrito'>🛒 {calcularCantidad()}</Link>
    </div>
  )
}
