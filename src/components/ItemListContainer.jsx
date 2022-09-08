import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Mate Geometrico", "descripcion":"Mate amplio para el que usa demasiada yerba", "img" :'src={Mate Geometrico} className="mate geometrico', "precio":1350},
            {"id":2, "nombre":"Mate Perita", "descripcion":"Mate simple, chico", "precio":1200},
            {"id":3, "nombre":"Mate Perita Fino", "descripcion":"Mate identico al perita comun pero un poco mas largo","precio":1250},
            {"id":4, "nombre":"Cazuelas", "descripcion":"Cazuelas para usarlas para lo que mas te guste", "precio":1500},
            {"id":5, "nombre":"Bombillas", "descripcion":"Bombillas de muy buena calidad", "precio":500},
            {"id":6, "nombre":"Mochilas Materas", "descripcion":"Bandejas para llevar tu set de mate a donde quieras", "precio":1800}
        ];
    

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return(
        <div>
            <ItemList  items={items} />
        </div>
    );

 }


export default ItemListContainer;