import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products.find(producto => producto.id === parseInt(id)) || []);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItem(respuesta);
        });
    }, [id]);

    return (
        <div className="container-fluid fondo_amarillo">
            <Header />
            <ItemDetail item={item} />
            <Footer />
        </div>
    )
}

export default ItemDetailContainer;