import React from "react";
import destacado from "../components/imagenes/destacado.jpg"
import destacado2 from "../components/imagenes/destacado2.jpg"
import mate_geometrico from "../components/imagenes/mate_geometrico.jpg";
import mate_geometrico2 from "../components/imagenes/mate_geometrico2.jpg";


const Destacado = () => {
    return (
        <div className="text-center ">
            <h2>Productos Destacados</h2>
           <img src={destacado} alt="Promoción Destacada" className="img-fluid col-md-4 offset-md-2 text-center color_marron" /> 
           <img src={destacado2} alt="Promoción Destacada" className="img-fluid col-md-4 offset-md-2 text-center color_marron" /> 
           <img src={mate_geometrico} alt="Promoción Destacada" className="img-fluid col-md-4 offset-md-2 text-center color_marron" /> 
           <img src={mate_geometrico2} alt="Promoción Destacada" className="img-fluid col-md-4 offset-md-2 text-center color_marron" />
        </div>
        
    )
}

export default Destacado;