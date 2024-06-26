import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ItemsListContainer } from "./components/ItemsListContainer";
import MostrarItemContainer from "./components/MostrarItemContainer";
import './css/style.css'
import { Carrito } from "./components/Carrito";
import { CartProvider } from "./context/CartContext";
import { FinalizarCompra } from "./components/FinalizarCompra";


function App() {

  
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemsListContainer/>}/>
          <Route path="/item/:id" element={<MostrarItemContainer />}/>
          <Route path="/productos/:categoria" element={<ItemsListContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/finalizar-compra" element={<FinalizarCompra/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
