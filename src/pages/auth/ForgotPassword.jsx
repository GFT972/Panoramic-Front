import React from "react";
import { Link } from "react-router-dom";
import ForgotImg from "../../assets/img/vector/forgot-password.png";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo forgot-img">
          <img src={ForgotImg} alt="" className="auth-header-logo-img" />
        </div>
      </div>
      <div className="auth-body">
        <h1 className="auth-header-title">Mot de passe oublié ?</h1>
        <p className="auth-header-subtitle forgot-subtitle">
        Entrez votre email et nous vous enverrons des instructions pour réinitialiser votre mot de passe
        </p>
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Adresse Email
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="exemple@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Reinitialiser mon mot de passe
          </button>
          <Link to={"/auth/signin"} className="btn-back-to-login">
            Retour
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
