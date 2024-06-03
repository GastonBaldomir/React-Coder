import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li><Link className='nav-link' to='/'>Inicio</Link></li>
        <li><Link className='nav-link' to='/productos'>Productos</Link></li>
        <li><Link className='nav-link' to='/productos/Electrónica'>Elctronica</Link></li>
        <li><Link className='nav-link' to='/productos/Accesorios'>Accesorios</Link></li>
        <li><Link className='nav-link' to='/productos/Electrodomésticos'>Electrodomésticos</Link></li>
        <li><Link className='nav-link' to='/productos/Ropa'>Ropa</Link></li>
        <li><Link className='nav-link' to='/productos/Calzado'>Calzado</Link></li>
        <li><Link className='nav-link' to='/productos/Oficina'>Oficina</Link></li>
      </ul>
    </nav>
  )
}
