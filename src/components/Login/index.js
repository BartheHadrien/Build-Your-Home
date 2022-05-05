import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmailInLogin, setPasswordInLogin } from '../../actions';
import './styles.scss';

function Login() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  function handleEmail(event) {
    dispatch(setEmailInLogin(event.target.value));
  }

  function handlePassword(event) {
    dispatch(setPasswordInLogin(event.target.value));
  }

  return (
    <div className="login">
      <section className="login--section">
        <div className="login--container">
          <h1 className="login--title">S'identifier</h1>
          <form className="login--form">
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
    </div>
  );
}

export default Login;
