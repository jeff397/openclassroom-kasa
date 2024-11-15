import { Link } from "react-router-dom";
import "./error404.scss";

function Error404() {
  return (
    <main>
      <div className="error">
        <span className="error-number">404</span>
        <span className="error-text">
          Oups! La page que vous demandez n'existe pas
        </span>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default Error404;
