import React from "react";
import { Link } from "react-router-dom";
import SCLOGO from "../../assets/img/mmlogo.png";

const Signup = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Creer un compte</h1>
        <p className="auth-header-subtitle">
        Créez votre compte et faites partie des meilleurs restaurateurs
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Nom
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Nom"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Prénom
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Prénom"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
            Date de naissance
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="**/**/****"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
            Adresse Email
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="exemple@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Mot de passe
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="Mot de passe"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Confirmer votre mot de passe"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Créer mon compte
          </button>
        </form>
        <p className="text-center">
          Vous avez déja un compte ?{" "}
          <Link to={"/auth/signin"} className="link-text-center">
            Se connecter
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
