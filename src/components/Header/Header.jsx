import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = () => {
  return (
    <header className='header'>
        <h1>TiendaReact</h1>
        <NavBar/>
        <Carrito/>
    </header>
  )
}
