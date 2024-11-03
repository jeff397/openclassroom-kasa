import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from "../../assets/images/logo.png"

function Header() {
  return (
    <nav className='header'>
      <div className='header_logo'>
      <img src={homeLogo} alt="Logo" />
      </div>
      <div className='header_links'>
        <Link to="/" className='header_link'>Accueil</Link>
        <Link to="/about" className='header_link'>A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
