import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";

const Detalle = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch( <Products /> + id)
            .then(res=>res.json())
            .then(json=> {
                setItem(json);
            })
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.img} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Detalle;