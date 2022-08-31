import React from "react";

const NavBar = () => {
    return (

        <div className="container">
            <nav>
                <ul  className= "menu-horizontal">
                    <li><a href="">Inicio</a></li>
                    <li>
                        <a href="">Modelos</a>
                            <ul  className= "menu-vertical">
                                <li><a href="">Mate Geometrico</a></li>
                                <li><a href="">Mate Perita</a></li>
                                <li><a href="">Cazuelas</a></li>
                            </ul>
                        </li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;

