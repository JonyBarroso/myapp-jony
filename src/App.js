import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Inicio';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Provider from './components/Context';
import Error404 from './components/Error404';

function App() {
  return (
    <Provider>
      <div className="container-fluid fondo_amarillo">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/menu"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;