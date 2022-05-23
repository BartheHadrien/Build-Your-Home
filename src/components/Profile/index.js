// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

// ==================Action======================
import {
  deleteUser, logout, modifyProfile, setAdressInProfile,
  setFirstNameInProfile,
  setLastNameInProfile, setPhoneInProfile,
} from '../../actions/user';

// ==================Style&IMG===================
import './styles.scss';

function Profile() {
  // ==================HOOK===================
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // ==================Handler=================
  // Suppresion d'un utilisateur
  function handleDeleteUser(evt) {
    evt.preventDefault();
    dispatch(deleteUser());
    dispatch(logout());
    navigate('/');
    alert.success('Vous avez bien supprimé votre compte');
  }
  // Modification du profil
  function handleModifyProfile(evt) {
    evt.preventDefault();
    dispatch(modifyProfile());
  }

  // ==================Champs Controllés==========
  function handleChangeFirstName(event) {
    dispatch(setFirstNameInProfile(event.target.value));
  }
  function handleChangeLastName(event) {
    dispatch(setLastNameInProfile(event.target.value));
  }
  function handleChangePhone(event) {
    dispatch(setPhoneInProfile(event.target.value));
  }
  function handleChangeAdress(event) {
    dispatch(setAdressInProfile(event.target.value));
  }

  return (
    <div className="profile">
      <h1 className="profile--title">Mes informations personnelles</h1>
      <div className="profile--container">
        <form className="profile--form" onSubmit={handleModifyProfile}>
          <label htmlFor="lastname" className="profile--field__label">
            <span className="profile--field__name">Nom</span>
            <input
              className="profile--field__input"
              type="text"
              id="lastname"
              onChange={handleChangeLastName}
              defaultValue={user.lastname}
              required
            />
          </label>
          <label htmlFor="firstname" className="profile--field__label">
            <span className="profile--field__firstname">Prénom</span>
            <input
              className="profile--field__input"
              type="text"
              id="firstname"
              onChange={handleChangeFirstName}
              defaultValue={user.firstname}
              required
            />
          </label>
          <label htmlFor="phone" className="profile--field__label">
            <span className="profile--field__phone">Téléphone</span>
            <input
              className="profile--field__input"
              type="tel"
              id="phone"
              onChange={handleChangePhone}
              defaultValue={user.phone}
              minLength="10"
              maxLength="10"
              required
            />
          </label>
          <label htmlFor="adress" className="profile--field__label">
            <span className="profile--field__adress">Adresse complète</span>
            <input
              className="profile--field__input"
              type="text"
              id="adress"
              onChange={handleChangeAdress}
              defaultValue={user.adress}
              required
            />
          </label>
          <button
            type="submit"
            className="profile--button__info"
          >
            Modifier mes informations
          </button>
          <button
            type="submit"
            className="profile--button__delete"
            onClick={handleDeleteUser}
          >
            Supprimer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
