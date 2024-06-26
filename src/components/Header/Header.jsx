import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className='header'>
        <Link to="/"><h1 className='logo'>Tienda Coder</h1></Link>
        <NavBar/>
        <CartWidget />
    </header>
  )
}
