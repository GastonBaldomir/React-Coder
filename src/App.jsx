import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ItemsListContainer } from "./components/ItemsListContainer";
import MostrarItemContainer from "./components/MostrarItemContainer";
import './css/style.css'



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemsListContainer/>}/>
        <Route path="/item/:id" element={<MostrarItemContainer />}/>
        <Route path="/productos/:categoria" element={<ItemsListContainer/>}/>
        <Route path="/productos" element={<ItemsListContainer/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
