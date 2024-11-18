import { Link } from "react-router-dom";
import "./error404.scss";
import errorImage from "../../assets/images/404.png";

function Error404() {
  return (
    <main>
      <div className="error">
        <img className="error-number" src={errorImage} alt="error-404" />
        <span className="error-text">
          Oups! La page que <br className="break" /> vous demandez n'existe pas
        </span>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default Error404;
