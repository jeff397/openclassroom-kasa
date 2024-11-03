import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import homeLogo from "../../assets/images/logo.png"

function Header() {
  const location = useLocation();
  return (
    <nav className='header'>
      <div className='header_logo'>
      <img src={homeLogo} alt="Logo" />
      </div>
      <div className='header_links'>
        <Link to="/"  className={`header_link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Accueil
        </Link>
         
        <Link to="/about" className={`header_link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          À propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
