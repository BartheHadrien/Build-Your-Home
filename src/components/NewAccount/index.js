// Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import {
  setFirstNameInSignup,
  setLastNameInSignup,
  setBirthDateInSignup,
  setPhoneInSignup,
  setAdressInSignup,
  setEmailInSignup,
  setPasswordInSignup,
  setConfirmPasswordInSignup,
  changeValue,
  createUser,
} from 'src/actions/user';

// Styles
import './styles.scss';
// import { from } from 'core-js/core/array';

function NewAccount() {
  const dispatch = useDispatch();

  // On lit les valeurs du state
  const firstname = useSelector((state) => state.user.signup.firstname);
  const lastname = useSelector((state) => state.user.signup.lastname);
  const birthdate = useSelector((state) => state.user.signup.birthdate);
  const phone = useSelector((state) => state.user.signup.phone);
  const adress = useSelector((state) => state.user.signup.adress);
  const email = useSelector((state) => state.user.signup.email);
  const password = useSelector((state) => state.user.signup.password);
  const confirmPassword = useSelector((state) => state.user.signup.confirmPassword);

  // On dispatch les actions vers le reducer user pour controler les valeurs
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
  }
  function handleChangePassword(event) {
    dispatch(setPasswordInSignup(event.target.value));
  }

  function handleChangeConfirmPassword(event) {
    dispatch(setConfirmPasswordInSignup(event.target.value));
  }

  // // Fonction qui gère les changements dans le state dynamiquement
  // function handleChange(event) {
  //   console.log(event.target.id, event.target.value);
  //   dispatch(changeValue(event.target.id, event.target.value));
  // }

  // A la soumission du formulaire on empêche le rechargement et
  // dispatch l'action createUser vers le reducer user
  function handleCreate(event) {
    event.preventDefault();
    dispatch(createUser());
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
              />
            </label>
            <label htmlFor="phone">
              <span className="new-account--field__label">Téléphone</span>
              <input
                className="new-account--field__input"
                type="text"
                id="phone"
                value={phone}
                onChange={handleChangePhone}
              />
            </label>
            <label htmlFor="adress">
              <span className="new-account--field__label">Adresse compléte</span>
              <input
                className="new-account--field__input"
                type="text"
                id="adress"
                value={adress}
                onChange={handleChangeAdress}
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
              />
            </label>
            <label htmlFor="password">
              <span className="new-account--field__label">Mot de passe</span>
              <input
                className="new-account--field__input"
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
              />
            </label>
            <label htmlFor="confirm_password">
              <span className="new-account--field__label">Entrez le mot de passe à nouveau</span>
              <input
                className="new-account--field__input"
                type="password"
                id="confirm_password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
            </label>
            {/* <Link to="/"> */}
            <button
              type="submit"
              className="new-account--button__submit"
            >

              Créer mon compte
            </button>
            {/* </Link> */}
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

// NewAccount.defaultProps = {
//   firstname: '',
//   lastname: '',
//   birthdate: '',
//   phone: '',
//   adress: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

export default NewAccount;
