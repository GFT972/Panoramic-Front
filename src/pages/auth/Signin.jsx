import React from "react";
import { Link } from "react-router-dom";
import MMLOGO from "../../assets/img/mmlogo.png";
import { BrowserRouter as Router } from 'react-router-dom'

const Signin = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={MMLOGO} alt="" className="auth-header-logo-img" style={{ width: '200px', height: '200px' }}/>
        </div>
        <h1 className="auth-header-title">Bienvenue sur MenuManager</h1>
        <p className="auth-header-subtitle">
          Il n'a jamais été aussi simple de gerer son restaurant
        </p>
      </div>
      <div className="auth-body">
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
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="********"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex-end">
            <Link to={"/auth/forgot-password"} className="link-end">
              Mot de passe oublié ?
            </Link>
          </div>
          <Link to={"/admin/products"} className="link-connect">
          <button type="submit" className="btn-submit">
            Se connecter
          </button>
          </Link>
          
        </form>
        <p className="text-center">
          Nouvel utilisateur ?{" "}
          <Link to={"/auth/signup"} className="link-text-center">
            Creer mon compte
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signin;
