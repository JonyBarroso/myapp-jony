import React from "react";
import CartWidget from "../components/CartWidget";
import NavBar from "../components/NavBar";

const Header = () => {
    return (
        <div className="container">
            <div className="row py-3">
                <div className="col-md-6">
                    <NavBar />
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;