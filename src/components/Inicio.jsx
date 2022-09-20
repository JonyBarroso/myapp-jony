import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemListContainer from "./ItemListContainer";

const Inicio = () => {
    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <ItemListContainer />
            <Footer />
        </div>
    )
}

export default Inicio;