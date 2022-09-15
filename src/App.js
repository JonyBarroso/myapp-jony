import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detalle from "./components/Detalle";
import NavbarA from "./components/NavBarA";
import Productos from "./components/Productos";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <NavbarA />
        <Routes>
          <Route exact path="/" element={<Productos />} />
          <Route exact path="/categoria/:genero" element={<Productos />} />
          <Route exact path="/producto/:id" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;