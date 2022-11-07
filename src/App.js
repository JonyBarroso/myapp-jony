import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Provider from './components/Context';
import Error404 from './components/Error404';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
  return (
    <Provider>
      <div className="container-fluid fondo_amarillo">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/contacto"} element={<Contacto />} />
            <Route path={"/category/:mates"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/nosotros"} element={<Nosotros />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;