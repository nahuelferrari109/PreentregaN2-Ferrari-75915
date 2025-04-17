import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './components/Items/Items';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Error404 from './components/Error404/Error404';
import { AppContextProvider } from './Context/context';
import Cart from './components/cart/Cart';
import Checkout from "./components/Checkout/Checkout";;

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;