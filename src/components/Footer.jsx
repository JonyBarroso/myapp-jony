import React from "react";
import instagram from "../components/imagenes/instagram.png";
import facebook from "../components/imagenes/facebook.png";

const Footer = () => {
    return (
        <div className="row fondo_marron p-5">
            <div className="col">
                <div className="container text-white">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>Jonathan Barroso © 2022 Athena-Deco. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="24" alt="facebook" /> 
                            <img src={instagram} width="24" alt="instagram" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;