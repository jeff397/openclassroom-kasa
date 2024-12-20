import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./_header.scss";

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <div className="header_logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="header_links">
        <Link
          to="/"
          className={`header_link ${location.pathname === "/" ? "active" : ""}`}
        >
          Accueil
        </Link>

        <Link
          to="/about"
          className={`header_link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          À propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
