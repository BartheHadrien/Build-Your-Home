import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { LabelDetail } from 'semantic-ui-react';
import {
  setEmailInLogin, setPasswordInLogin, login, logout, deleteUser,
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
  // Récupération des données utilisateur en BDD ou non
  const userUnknown = useSelector((state) => state.user.userUnknown);

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

    if (userUnknown) {
      navigate('/connexion');
    }
    else {
      navigate('/');
    }
  }
  console.log(userUnknown);

  // TEST
  function handleClick(evt) {
    evt.preventDefault();
    dispatch(logout());
  }

  function handleSupp(evt) {
    evt.preventDefault();
    dispatch(deleteUser());
  }

  return (
    <div className="login">
      {!islogged && (
        <section className="login--section">
          <div className="login--container">
            <p className={userUnknown ? 'login--message__display' : 'login--message__hidden'}>Vous devez créer un compte utilisateur pour pouvoir vous connecté</p>
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
              >
                S'identifier
              </button>
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
