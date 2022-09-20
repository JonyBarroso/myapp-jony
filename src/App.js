import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer';
import Provider from './components/Context';
import Cart from './components/Cart';
import Navbar from './components/NavBar';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Inicio />} />
          <Route path={"/"} element={<Navbar />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/menu"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailsContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;