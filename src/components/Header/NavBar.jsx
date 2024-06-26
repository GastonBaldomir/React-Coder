import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const NavBar = () => {
  let [categorias, setCategorias]=useState([]);

  useEffect(()=>{
    const categoriasRef = collection (db, "categoria");

    getDocs(categoriasRef)
    .then((res) => { 
      setCategorias(res.docs.map((doc)=>{
        return { ...doc.data()}  
      }))
     
  })
  },[])
 

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li>
          <NavLink className='nav-link' to='/'>Inicio</NavLink>
        </li>
        {
          categorias.map((categorias)=>{
            return(
              <li className='nav-link' key={categorias.id}>
                   <NavLink className='nav-link' to={`/productos/${categorias.id}`}>{categorias.nombre}</NavLink>
              </li>
            )
          })
        }  
      </ul>
    </nav>
  )
}
