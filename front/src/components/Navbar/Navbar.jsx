import { Link } from "react-router-dom";

import phoneUrl from "../../assets/icons/phone.svg";
import mailUrl from "../../assets/icons/mail.svg";
import adressUrl from "../../assets/icons/adress.svg";
import logo from "../../assets/logo.png";
import banniere from "../../assets/banniere.png";

import "../../index.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="limitedWidthBlockContainer informations">
        <div className="limitedWidthBlock">
          <ul>
            <li>
              <img
                src={phoneUrl}
                alt="logo de téléphone"
                className="informations__phone"
              />
              01 23 45 67 89
            </li>
            <li>
              <img
                src={mailUrl}
                alt="logo d'une enveloppe"
                className="informations__mail"
              />
              support@name.com
            </li>
            <li>
              <img
                src={adressUrl}
                alt="logo d'un point de géolocalisation"
                className="informations__address"
              />
              01 23 45 67 89
            </li>
          </ul>
        </div>
      </div>

      <div className="limitedWidthBlockContainer menu">
        <div className="limitedWidthBlock">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo de l'entreprise" />
          </Link>
          <nav>
            <ul>
              <Link to="/">
                <li>Accueil</li>
              </Link>
              <Link to="/cart">
                <li>Panier</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <img className="banniere" src={banniere} alt="Baniere" />
    </header>
  );
};

export default Navbar;
