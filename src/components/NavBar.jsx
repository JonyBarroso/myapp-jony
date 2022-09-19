import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="nav py-3">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/categoria/mates"}>Mates</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/categoria/mochilas"}>Mochilas Materas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/categoria/termos"}>Termos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/categoria/cazuelas"}> Cazuelas</Link>
            </li>
        </ul>
    )
}

export default Navbar;