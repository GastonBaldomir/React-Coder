import { useEffect, useState } from "react"
import ItemsList from "./ItemsList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemsListContainer = () => {

  const [productos, setProductos]= useState([]);
  const {categoria: categoryId} = useParams();
  let [titulo, setTitulo]= useState("Productos");

    useEffect(()=>{
      const productosRef = collection(db, "productos");
      const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;
      const categoriasRef = collection (db, "categoria");
      let catQuery = categoryId && query(categoriasRef, where("id", "==", categoryId));

        getDocs(q)
          .then((res)=> {
            setProductos(
              res.docs.map((doc)=> {
                return {...doc.data(), id: doc.id}
              })
            )
          }
        )
        
        if(catQuery){
          getDocs(catQuery)
          .then((res) => { 
            setTitulo(res.docs[0].data().nombre);
        });
        }else{
          setTitulo("Productos")
        }
         
        
           
    },[categoryId])

  return (
  <div className='productos-list'>
      <h2>{titulo}</h2> 
      <ItemsList productos={productos} />
  </div>
    
  )
}
