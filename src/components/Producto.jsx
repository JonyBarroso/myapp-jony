import React from "react";
import {Link} from "react-router-dom";
import Products from "../components/Products";

const Producto = ({item}) => {
    return (
        <div className="card">
            <Link to={(<Products />) + item.id}><img src={item.img} className="card-img-top" alt={item.nombre} /></Link>
            <div className="card-body text-center">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center"><b>${item.precio}</b></p>
                <Link to={(<Products />) + item.id} className="btn btn-primary">Ver Más</Link>
            </div>
        </div>
    )
}

export default Producto;