// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// ==================Action======================
import {
  setFirstNameInSignup,
  setLastNameInSignup,
  setBirthDateInSignup,
  setPhoneInSignup,
  setAdressInSignup,
  setEmailInSignup,
  setPasswordInSignup,
  setConfirmPasswordInSignup,
  createUser,
  setEmailInLogin,
  setPasswordInLogin,
  passwordError,
} from 'src/actions/user';

// ==================Style&IMG===================
import './styles.scss';

function NewAccount() {
  // ==================HOOK===================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstname = useSelector((state) => state.user.signup.firstname);
  const lastname = useSelector((state) => state.user.signup.lastname);
  const birthdate = useSelector((state) => state.user.signup.birthdate);
  const phone = useSelector((state) => state.user.signup.phone);
  const adress = useSelector((state) => state.user.signup.adress);
  const email = useSelector((state) => state.user.signup.email);
  const password = useSelector((state) => state.user.signup.password);
  const confirmPassword = useSelector((state) => state.user.signup.confirmPassword);
  const Error = useSelector((state) => state.user.passwordIsFalse);

  // ==================Handler=================
  // Création d'un compte
  function handleCreate(event) {
    event.preventDefault();

    if (password === confirmPassword) {
      dispatch(createUser());
      navigate('/');
    }
    else {
      dispatch(passwordError());
    }
  }

  // ==================Champs Controllés==========
  function handleChangeFirstName(event) {
    dispatch(setFirstNameInSignup(event.target.value));
  }
  function handleChangeLastName(event) {
    dispatch(setLastNameInSignup(event.target.value));
  }
  function handleChangeBirthDate(event) {
    dispatch(setBirthDateInSignup(event.target.value));
  }
  function handleChangePhone(event) {
    dispatch(setPhoneInSignup(event.target.value));
  }
  function handleChangeAdress(event) {
    dispatch(setAdressInSignup(event.target.value));
  }
  function handleChangeEmail(event) {
    dispatch(setEmailInSignup(event.target.value));
    dispatch(setEmailInLogin(event.target.value));
  }
  function handleChangePassword(event) {
    dispatch(setPasswordInSignup(event.target.value));
    dispatch(setPasswordInLogin(event.target.value));
  }
  function handleChangeConfirmPassword(event) {
    dispatch(setConfirmPasswordInSignup(event.target.value));
  }

  return (
    <div className="new-account">
      <section className="new-account--section">
        <div className="new-account--container">
          <h1 className="new-account--title">Créer un compte</h1>

          <form className="new-account--form" onSubmit={handleCreate}>
            <label htmlFor="lastname">
              <span className="new-account--field__label">Nom</span>
              <input
                className="new-account--field__input"
                type="text"
                id="lastname"
                value={lastname}
                onChange={handleChangeLastName}
                required
              />
            </label>
            <label htmlFor="firstname">
              <span className="new-account--field__label">Prénom</span>
              <input
                className="new-account--field__input"
                type="text"
                id="firstname"
                value={firstname}
                onChange={handleChangeFirstName}
                required
              />
            </label>
            <label htmlFor="birthdate">
              <span className="new-account--field__label">Date de Naissance</span>
              <input
                className="new-account--field__input"
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={handleChangeBirthDate}
                required
              />
            </label>
            <label htmlFor="phone">
              <span className="new-account--field__label">Téléphone</span>
              <input
                className="new-account--field__input"
                type="tel"
                id="phone"
                value={phone}
                onChange={handleChangePhone}
                pattern="0[1-9][0-9]{8}"
                placeholder="ex : 0153322327"
                minLength="10"
                maxLength="10"
                required
              />
            </label>
            <label htmlFor="adress">
              <span className="new-account--field__label">Adresse complète</span>
              <input
                className="new-account--field__input"
                type="text"
                id="adress"
                value={adress}
                onChange={handleChangeAdress}
                required
              />
            </label>
            <label htmlFor="email">
              <span className="new-account--field__label">E-mail</span>
              <input
                className="new-account--field__input"
                type="email"
                id="email"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </label>
            <label htmlFor="password">
              <span className="new-account--field__label">Mot de passe</span>
              <input
                className={!Error ? 'new-account--field__input' : 'new-account--field__inputFalse'}
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
                minLength="8"
                maxLength="14"
                required
              />
            </label>
            <label htmlFor="confirm_password">
              <span className="new-account--field__label">Entrez le mot de passe à nouveau</span>
              <input
                className={!Error ? 'new-account--field__input' : 'new-account--field__inputFalse'}
                type="password"
                id="confirm_password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                minLength="8"
                maxLength="14"
                required
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
