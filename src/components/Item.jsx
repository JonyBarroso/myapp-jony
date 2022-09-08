import React from "react";


const Item = ({id, nombre, descripcion, img, precio}) => {

    return(
        <div className="col-md-4 py-3">
            <div className="card">
                <img src={img} className="card-img-top" alt={id} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{nombre}</h5>
                        <p className="card-title text-center">{descripcion}</p>
                        <p className="card-text text-center">${precio}</p>
                    </div>
            </div>
        </div>
    );

 }

export default Item;