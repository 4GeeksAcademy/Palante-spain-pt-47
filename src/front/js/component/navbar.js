import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

//   const navbarStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 100,
//   };
// style={navbarStyle}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" > 
      <div className="container">
        <Link to="/">
          <p className="nav_palante"><strong>PA'LANTE</strong></p>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <i class="fa-thin fa-bars"></i>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className="container_navbar_right d-flex">
            <div className="dropdown">
              <button
                className="btn_comunidad dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Comunidad
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Chat</a></li>
                <li><a className="dropdown-item" href="#">Eventos</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn_recursos dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Herramientas
              </button>
              <ul className="dropdown-menu">
                <Link to='/lecturas'>
                  <li><a className="dropdown-item" href="#">Lecturas</a></li>
                </Link>
                <Link to='/meditaciones'>
                  <li><a className="dropdown-item" href="#">Meditaciones guiadas</a></li>
                </Link>
                <Link to='/podcast'>
                  <li><a className="dropdown-item" href="#">Podcast</a></li>
                </Link>
              </ul>
            </div>

            <div>
              <Link to="/citas">
                <button className="appointment_btn">
                  Citas
                </button>
              </Link>
            </div>

            <div className="login">
              <Link to='/login'>
                <button type="button" className="nav_btn">
                  <i className="fa-regular fa-user"></i> Ingresar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
