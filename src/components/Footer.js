import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col1">
            <h2>Contactez-nous</h2>
            <div className="list-untyled">
              <strong>Téléphone</strong>
              <br />
              +216 25 312 571
              <br />
              <strong>E-Mail</strong>
              <br />
              bersellououssema@gmail.com
              <br />
              <strong>Adresse</strong>
              <br />
              40 Rue Alger Hlif
            </div>
          </div>
          <div className="col">
            <h2>Qui Sommes-Nous</h2>
            <div className="list-untyled">
              carriéres
              <br />
              Politique de Confidentialité
              <br />
              Conditions d'utilisations
              <br />
              Notre site services
            </div>
          </div>
          <div className="col">
            <h2>Service Client</h2>
            <div className="list-untyled">
              Acheter sur notre site
              <br />
              Politique De Retour
              <br />
              Paiement
              <br />
              Livraison
              <br />
              Comment évaluer un produit
            </div>
          </div>
          <div className="col">
            <h2>Gagner De L'argent</h2>
            <div className="list-untyled">
              Vendez sur notre site
              <br />
              Devenez un Partenaire Logistique de notre site
            </div>
          </div>
          <div className="col2">
            <h2>Retrouvez-Nous Sur</h2>
            <p className="image">
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} notre site | all right reserved |
            Terms of services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
