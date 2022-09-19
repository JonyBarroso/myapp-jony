import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer';
import Inicio from './components/Inicio';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/inicio"} element={<Inicio />} />
          <Route path={"/barra"} element={<NavBar />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/menu"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailsContainer />} />
          <Route path={"/item/:id"} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;