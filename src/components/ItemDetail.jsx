import React from "react";
import ItemCount from "./ItemCount";
import mate_geometrico from "../components/imagenes/mate_geometrico.jpg";


const ItemDetail = ({item}) => {
        return (
            <div className="detail">
                <img src={mate_geometrico} alt={item.nombre} />
            <div className= "infoDetail">
                <h2>{item.nombre}</h2>
                <p> mate geometrico</p>


                <h3>${item.precio}</h3>
                <ItemCount stock={10} initial={1} />

            </div>

            </div>
        )
   
}

export default ItemDetail;
