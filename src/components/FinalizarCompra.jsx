import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

export const FinalizarCompra = () => {

  const {register, handleSubmit}=useForm();
  const { carrito, calcularTotal, eliminarCarrito } = useContext(CartContext);
  const home = useNavigate();
  

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: calcularTotal()  
    };
  
    try {
      const pedidosRef = collection(db, "pedidos");
      const idCompra= await addDoc(pedidosRef, pedido);
      
      eliminarCarrito();
      swal({
        title: "Compra exitosa",
        text: `Tu compra ha sido realizada con éxito. Este es el código para hacer el seguimiento: ${idCompra.id}`,
        icon: "success",
        button: "Aceptar",
    })
      home('/');
      
    } catch (error) {
      swal({
        title: "Se produjo un Error",
        text: "Volve a intentarlo y si el error continua contactanos al mail de",
        icon: "error",
        button: "Aceptar",
    })
    }
  };
  
  return (
    
    <div className="productos-list">
        <h2 className="">Este es el ultimo paso! Ya estamos preparando tu pedido.</h2>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <input className="forms-input" type="text" placeholder='Ingrese su Nombre' {...register("nombre")} />
            <input className="forms-input" type="email" placeholder='Ingrese su Email' {...register("email")} />
            <input className="forms-input" type="text" placeholder='Telefono' {...register("telefono")} />
            <button  className="buttons" type='submit'>Comprar</button>
        </form>
        <h3>Gracias por Confiar en nosotros! Tienda Coder.</h3>
    </div>
  )
}
