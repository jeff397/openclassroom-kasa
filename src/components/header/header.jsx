import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

function Header() {
  return (
    <nav className="Header">
      <div className="logo_container">
        <Link to="/" className="Header_logo-link">
          <img src={logo} alt="Logo" className="Header_logo" />
          {}
        </Link>
      </div>
      <div className="Header_nav-links">
        <Link to="/" className="Header_link">
          Accueil
        </Link>
        <Link to="/About" className="Header_link">
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
