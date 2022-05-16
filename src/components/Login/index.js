import { useSelector, useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';
import {
  setEmailInLogin, setPasswordInLogin, login, validateCaptcha,
} from '../../actions/user';

import './styles.scss';

function Login() {
  // Récupération du hook useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Controle des champs Login
  const email = useSelector((state) => state.user.login.email);
  const password = useSelector((state) => state.user.login.password);
  // Récupération des données utilisateur connecté
  const islogged = useSelector((state) => state.user.user.logged);

  const isVerified = useSelector((state) => state.user.login.isVerified);

  // Fonction qui gèrent le changement dans le state
  function handleEmail(event) {
    dispatch(setEmailInLogin(event.target.value));
  }

  function handlePassword(event) {
    dispatch(setPasswordInLogin(event.target.value));
  }

  // Fonction qui gère la connexion dans le reducer user
  function handleConnect(evt) {
    evt.preventDefault();
    dispatch(login());
    navigate('/');
  }

  function handleCaptcha(value) {
    console.log('Captcha value:', value);
    dispatch(validateCaptcha());
  }

  return (
    <div className="login">
      {!islogged && (
        <section className="login--section">
          <div className="login--container">
            <h1 className="login--title">S'identifier</h1>
            <form className="login--form" onSubmit={handleConnect}>
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
