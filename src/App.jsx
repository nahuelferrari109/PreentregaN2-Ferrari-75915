import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Items from './components/Items/Items';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Error404 from './components/Error404/Error404';

function App() {

  return (
  <>
<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
    <Route path="/detalle/:id" element={<ItemDetail/>}/>
    <Route path="/*" element={<Error404/>}/>
  
  </Routes> 
</BrowserRouter>
</>

  )
}

export default App
