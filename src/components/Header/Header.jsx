import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from "../../assets/images/logo.png"

function Header() {
  return (
    <nav className='header'>
      <div className='header_logo'>
      <img src={homeLogo} alt="Logo" />
      </div>
      <div className='header_link'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
