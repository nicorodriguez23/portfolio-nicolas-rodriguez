import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const linkClass = ({ isActive }) =>
    "navbar-link" + (isActive ? " navbar-link--active" : "");

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" className="navbar-title" onClick={cerrarMenu}>
            Nicolás Rodríguez
          </Link>
          <span className="navbar-role">Full Stack Developer</span>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuAbierto((prev) => !prev)}
        >
          <span className="navbar-toggle-bar" />
        </button>
        
        <nav
          className={
            "navbar-links" + (menuAbierto ? " navbar-links--open" : "")
          }
        >
          <NavLink to="/" className={linkClass} onClick={cerrarMenu}>
            Home
          </NavLink>
          <NavLink
            to="/proyectos"
            className={linkClass}
            onClick={cerrarMenu}
          >
            Proyectos
          </NavLink>
          <NavLink to="/cv" className={linkClass} onClick={cerrarMenu}>
            CV
          </NavLink>
          <NavLink
            to="/sobre-mi"
            className={linkClass}
            onClick={cerrarMenu}
          >
            Sobre mí
          </NavLink>
          <NavLink
            to="/contacto"
            className={linkClass}
            onClick={cerrarMenu}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
