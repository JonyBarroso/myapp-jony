import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/imagenes/athena.jpg";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="48" alt="Athena" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/category/mates"}>Mates</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Menú</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/nosotros"}>Nosotros</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;