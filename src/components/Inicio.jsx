import React from "react";
import Footer from "../components/Footer";
import Destacado from "../components/Destacado";
import NavBar from "../components/NavBar";

const Inicio = () => {
    return (
        <div className="container-fluid fondo_amarillo">
            <NavBar />
            <Destacado />
            <Footer />
        </div>
    )
}

export default Inicio;