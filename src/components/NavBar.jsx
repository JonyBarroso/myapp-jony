import React from "react";
import Carrito from "../../src/assets/carrito.png"
import athena from "../components/imagenes/athena.jpg"

const NavBar = () => {
    return (

    <div className="container">
        <nav className="col-sm-12 px-6 navbar navbar-expand-sm bg-light">
    <div className="container-fluid">
            <a className="navbar-brand" href="inicio"> <img src={athena} className="athena" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success me-2" type="button"> <img src={Carrito} className="carrito" /> carrito</button>
  </form>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modelos
          </a>
          
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mate Geometrico</a></li>
            <li><a className="dropdown-item" href="#">Mates Peritas</a></li>
            <li><a className="dropdown-item" href="#">Cazuelas</a></li>
            
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
}

export default NavBar;

