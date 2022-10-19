import React from "react";
import Destacado from "../components/Destacado";

const Inicio = () => {
    return (
        <div className="container">
            <div className="row py-3"></div>
            <h1 className="titulo">El mate, un compañero de vida</h1>
            <p className="color">
                
                El mate es un símbolo culturar de varios países de Latinoamérica.
                Cambia la forma en que se lo prepara, algunos lo prefieren dulce, otros amargos,
                en el Litoral argentino lo toman frío, se lo llama Tereré, la mayoría lo toma caliente.
                Lo que es seguro es que en la mayoría de las casas hay un mate.
                </p>
                <p className="color">Tomar mate, es siempre una buena idea!
Ritual eterno. Esencial en una reunión familiar o juntada con amigos, siempre está presente.
El agua, la yerba, la bombilla y hasta la forma de cebarlo puede afectar el resultado final.</p>
            <Destacado />
        </div>
    )
}

export default Inicio;