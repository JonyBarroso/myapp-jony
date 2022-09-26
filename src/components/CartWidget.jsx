import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../components/Context";
import carrito from "../components/imagenes/carrito.png";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <div>
            {(cartTotal() > 0) ?
            <Link to={"/cart"}>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={carrito} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link> : ""}
        </div>
    )
}

export default CartWidget;