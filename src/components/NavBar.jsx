import React from "react";
import Carrito from "../../src/assets/carrito.png"

const NavBar = () => {
    return (

    <div className="container">
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
            <a class="navbar-brand" href="#">Inicio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Carrito</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modelos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mate Geometrico</a></li>
            <li><a class="dropdown-item" href="#">Mates Peritas</a></li>
            <li><a class="dropdown-item" href="#">Cazuelas</a></li>
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

