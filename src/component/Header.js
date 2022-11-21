import React from "react";
import churs from "./../image/church_logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={churs} className="logo" />
        <div className="buscar">
          <input className="input-buscar" placeholder="Buscar" />
          <button className="button-buscar">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="header__icono-boton "
            />
          </button>
        </div>
        <p className="text_header">Sugerencias</p>
      </header>
      <hr />

      <nav className="nav">
        <ul className="ul_nav">
          <li>Organizaciones</li>
          <li>Actividades</li>
          <li>Misioneros</li>
          <li>recuerdos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
