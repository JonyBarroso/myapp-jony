import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import ItemList from "../components/ItemList";
import logo from "../components/imagenes/athena.jpg";
import { NavLink } from "react-router-dom";

const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                let productos = (id) ? Products.filter(producto => producto.categoria === id) : Products;
                resolve((productos.length > 0) ? productos : Products);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <div>
            <Header />
            <div className="container">
                <ItemList items={items} />
            </div>
            <Footer />    
        </div>
    )
}

export default ItemListContainer;