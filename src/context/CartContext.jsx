import { createContext, useState } from "react";
import swal from "sweetalert";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
     const [carrito, setCarrito] = useState([]);
  
  const agregarProducto = (productos) => {
    const productoExistente = carrito.find(item => item.id === productos.id);

    if (productoExistente) {
      setCarrito(carrito.map(item => 
        item.id === productos.id 
          ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...productos, cantidad: 1 }]);
    }
    swal({title: "Producto Agregado!"})
  };
  const eliminarCarrito=()=>{
    setCarrito([]);
  }

  const eliminarProducto = (productos) => {
      const productoExistente = carrito.find(item => item.id === productos.id);
      if (productoExistente && productoExistente.cantidad > 1) {
        setCarrito(carrito.map(item => 
          item.id === productos.id 
            ? { ...item, cantidad: item.cantidad - 1 } 
            : item
        ));
      } else {
        setCarrito(carrito.filter(item => item.id !== productos.id));
      }
    };
  
  const calcularCantidad = ()=>{
    return carrito.length;
  }

  const calcularTotal = ()=>{
    return carrito.reduce((acc, prod) => acc + prod.precio, 0) //el 0 indica el valor inicial del acc
  }

  return(
    <CartContext.Provider value={ {carrito,agregarProducto, calcularCantidad, calcularTotal, eliminarCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
  )
}