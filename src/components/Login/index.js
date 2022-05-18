// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// ==================Action======================
import {
  setEmailInLogin, setPasswordInLogin, login, validateCaptcha,
} from '../../actions/user';

// ==================Style&IMG===================
import './styles.scss';

function Login() {
  // ==================HOOK===================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const email = useSelector((state) => state.user.login.email);
  const password = useSelector((state) => state.user.login.password);
  const islogged = useSelector((state) => state.user.user.logged);
  const userUnknown = useSelector((state) => state.user.userUnknown);
  const isVerified = useSelector((state) => state.user.login.isVerified);
  const resetPassword = 'http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/reset-password';

  // ==================Handler=================
  // Connexion d'un utilisateur
  function handleConnect(evt) {
    evt.preventDefault();
    dispatch(login());
  }

  // Résolution du captcha
  function handleCaptcha(value) {
    console.log('Captcha value:', value);
    dispatch(validateCaptcha());
  }

  // ==================UseEffect===============
  // Si on est connecté alors nous sommes redirigé vers la Home
  useEffect(() => {
    if (islogged) {
      navigate('/');
      alert.success('Vous etes bien connecté !');
    }
  });

  // ==================Champs Controllés==========
  function handleEmail(event) {
    dispatch(setEmailInLogin(event.target.value));
  }
  function handlePassword(event) {
    dispatch(setPasswordInLogin(event.target.value));
  }

  return (
    <div className="login">
      {!islogged && (
        <section className="login--section">
          <div className="login--container">
            <p className={userUnknown ? 'login--message__display' : 'login--message__hidden'}>Vous devez créer un compte utilisateur pour pouvoir vous connecté</p>
            <h1 className="login--title">S'identifier</h1>
            <form
              className="login--form"
              onSubmit={handleConnect}
            >
              <label htmlFor="email">
                <span className="login--field__label">Votre adresse E-mail</span>
                <input
                  className="login--field__input"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                />
              </label>
              <label htmlFor="password">
                <span className="login--field__label">Mot de passe</span>
                <input
                  className="login--field__input"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                />
              </label>
              <a className="login--button__mdp" href={resetPassword}>Mot de passe oublié ?</a>
              <button
                type="submit"
                className="login--button__submit"
                disabled={!isVerified}
              >
                S'identifier
              </button>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptcha}
              />
            </form>
          </div>
          <p>Nouveau ?</p>
          <Link to="/inscription">
            <button
              type="button"
              className="login--button__create"
            >
              Créer votre compte
            </button>
          </Link>
        </section>
      )}
    </div>
  );
}

export default Login;
