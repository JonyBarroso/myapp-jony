import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "./Producto";
import Products from "./Products";

const Productos = () => {
    const [items, setItems] = useState([]);
    const {modelos} = useParams();

    useEffect(() => {
        let categoria = "";

        if (modelos === "cazuela") {
            categoria = "cazuelas";
        } else if (modelos === "mates") {
            categoria = "mategeometrico";
        } else if (modelos === "mates") {
            categoria = "mateperita";
        } else {
            categoria = "all";
        }

        fetch(<Products />)
            .then(res=>res.json())
            .then(json=> {
                if (categoria === "all") {
                    setItems(json);
                } else {
                    const array_productos = json.filter(producto => producto.category === categoria);
                    setItems(array_productos);
                }
            });
    }, [modelos]);

    return (
        <div className="container">
            <div className="row">
                {items.map(producto => (
                    <div key={producto.id} className="col-md-3">
                        <Producto item={producto} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos;