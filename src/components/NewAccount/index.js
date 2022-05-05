import { Link } from 'react-router-dom';
import './styles.scss';

function NewAccount() {
  return (
    <div className="new-account">
      <section className="new-account--section">
        <div className="new-account--container">
          <h1 className="new-account--title">Créer un compte</h1>
          <form className="new-account--form">
            <label htmlFor="lastname">
              <span className="new-account--field__label">Nom</span>
              <input
                className="new-account--field__input"
                type="text"
                id="lastname"
              />
            </label>
            <label htmlFor="firstname">
              <span className="new-account--field__label">Prénom</span>
              <input
                className="new-account--field__input"
                type="text"
                id="firstname"
              />
            </label>
            <label htmlFor="birthdate">
              <span className="new-account--field__label">Date de Naissance</span>
              <input
                className="new-account--field__input"
                type="date"
                id="birthdate"
              />
            </label>
            <label htmlFor="phone">
              <span className="new-account--field__label">Téléphone</span>
              <input
                className="new-account--field__input"
                type="text"
                id="phone"
              />
            </label>
            <label htmlFor="adress">
              <span className="new-account--field__label">Adresse compléte</span>
              <input
                className="new-account--field__input"
                type="text"
                id="adress"
              />
            </label>
            <label htmlFor="email">
              <span className="new-account--field__label">E-mail</span>
              <input
                className="new-account--field__input"
                type="email"
                id="email"
              />
            </label>
            <label htmlFor="password">
              <span className="new-account--field__label">Mot de passe</span>
              <input
                className="new-account--field__input"
                type="password"
                id="password"
              />
            </label>
            <label htmlFor="confirm_password">
              <span className="new-account--field__label">Entrez le mot de passe à nouveau</span>
              <input
                className="new-account--field__input"
                type="password"
                id="confirm_password"
              />
            </label>
            <button
              type="submit"
              className="new-account--button__submit"
            >
              Créer mon compte
            </button>
          </form>
        </div>
        <p>Vous possédez déjà un compte ?</p>
        <Link to="/connexion">
          <button
            type="button"
            className="new-account--button__create"
          >
            S'identifier
          </button>
        </Link>
      </section>
    </div>
  );
}

export default NewAccount;
