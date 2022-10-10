import phoneUrl from "../../assets/icons/phone.svg";
import mailUrl from "../../assets/icons/mail.svg";
import adressUrl from "../../assets/icons/adress.svg";
import logo from "../../assets/logo.png";
import banniere from "../../assets/banniere.png";

import "../../index.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <body>
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
            <a href="./index.html">
              <img className="logo" src={logo} alt="Logo de l'entreprise" />
            </a>
            <nav>
              <ul>
                <a href="./index.html">
                  <li>Accueil</li>
                </a>
                <a href="./cart.html">
                  <li>Panier</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
        <img className="banniere" src={banniere} alt="Baniere" />
      </header>
    </body>
  );
};

export default Navbar;
