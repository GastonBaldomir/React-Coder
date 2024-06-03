import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemsList from "./ItemsList";
import { useParams } from "react-router-dom";


export const ItemsListContainer = () => {

  const [productos, setProductos]= useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo]= useState("Productos")

    useEffect(()=>{
        pedirDatos()
            .then((res) =>{
              if(categoria){
                setProductos(res.filter((prod) => prod.categoria === categoria))
                setTitulo(categoria)
              }else{
                setProductos(res)
                setTitulo("Productos");
              }               
            })
    },[categoria])
  return (
    <div className='productos-list'>
      <ItemsList productos = {productos} titulo= {titulo}/>
    </div>
  )
}
