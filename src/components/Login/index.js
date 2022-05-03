import './styles.scss';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <h1 className="login--title">S'identifier</h1>
        <form className="login--form">
          <label htmlFor="password">
            <span className="field__label">Mot de passe</span>
            <input
              className="field__input"
              type="password"
              id="password"
            />
          </label>
          <label htmlFor="email">
            <span className="field__label">Votre adresse E-mail</span>
            <input
              className="field__input"
              type="email"
              id="email"
            />
          </label>
          <button type="submit">S'identifier</button>
        </form>
      </div>
      <p>Nouveau ?</p>

    </div>
  );
}

export default Login;
