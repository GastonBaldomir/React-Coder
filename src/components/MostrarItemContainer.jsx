import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { getDoc, doc  } from 'firebase/firestore'
import DetalleItem from './DetalleItem'
import { useParams } from 'react-router-dom'


const MostrarItemContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id;
    const [cargando, setCargando] = useState(true);

    useEffect(()=>{
      setCargando(true)
      const docRef = doc(db, "productos", id)
      getDoc(docRef)
        .then((res)=> {
          if(res.data()){
            setItem({...res.data(), id: res.id})
          }else{
            setCargando(false)
          }  
        })  
    },[id]);

    if(cargando){
      return  <div className='mostrar-items'>
                {item && <DetalleItem item={item}/>}
             </div>
    }else{
      return <h2 className='error'>El producto no existe, debe haber un error.</h2>
    }
    
}

export default MostrarItemContainer