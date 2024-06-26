import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Carrito = () => {
    const { carrito, calcularTotal, eliminarCarrito, eliminarProducto } = useContext(CartContext);

  
  return (  
    carrito.length > 0 ? 
    <div className='carrito-card'>
      <h1 className='titulo'>Detalle de la compra:</h1>
      {carrito.map((prod) => 
        <div className="carrito-card-producto"key={prod.id}>
          <h2>-{prod.nombre}</h2>
          <h3 class>$ {prod.precio}</h3>
          <h3>Cantidad: {prod.cantidad}</h3>
          <button className='buttons' onClick={() => eliminarProducto(prod)}>Eliminar una unidad</button>
        </div>
      )}
      <h1>Total: ${calcularTotal()}</h1>
      <button className='boton-eliminar' onClick={eliminarCarrito}>Eliminar Carrito</button>
      <div>
        <Link to="/finalizar-compra" className='boton-finalizar'>Finalizar Compra</Link>
      </div>
    </div> 
    : <>
        <h2 className='productos-list'>No hay productos en el carrito de compras, ¡Que esperás para llenarlo!</h2>
        <h3 className='productos-list'>Gracias por confiar en nosotros, Tienda Coder.</h3>
      </>
  );
}
   
