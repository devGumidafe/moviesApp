import { Link } from "react-router-dom";
import "../../scss/footer.scss";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to="/">MoviesApp</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contáctanos</Link>
            <Link to="/">Términos de uso</Link>
            <Link to="/">Preguntas frecuentes</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">Centro de ayuda</Link>
            <Link to="/">Cuenta</Link>
            <Link to="/">Privacidad</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Formas de ver</Link>
            <Link to="/">Avisos legales</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
