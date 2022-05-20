// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import classnames from 'classnames';

// ==================Action======================
import {
  toggleBurger, setSearchBarValue, setSearchBarClosed, toggleUserNav,
  setSearchBarEmptyString,
} from 'src/actions/header';
import { logout } from 'src/actions/user';

// ==================Style&IMG===================
import './styles.scss';
import user from 'src/assets/images/user.svg';
import cart from 'src/assets/images/cart.svg';
import logo from 'src/assets/images/logo.svg';
import burger from 'src/assets/images/burger.svg';

// ==================Composant===================
import Navbar from './Navbar';
import BurgerItems from './BurgerItems';

function Header() {
  // ==================HOOK===================
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.list);
  const searchBarValue = useSelector((state) => state.header.navbar.searchBarValue);
  const articles = useSelector((state) => state.article.list);
  const islogged = useSelector((state) => state.user.user.logged);
  const isOpen = useSelector((state) => state.header.navbar.isOpen);
  const searchOpen = useSelector((state) => state.header.navbar.searchOpen);
  const username = useSelector((state) => state.user.user.lastname);
  const userNavIsOpen = useSelector((state) => state.header.userNavbar.isOpen);
  const role = useSelector((state) => state.user.user.roles);

  // ==================Fonctions================
  const className = classnames('header--container', { 'header--container__closed': !isOpen });

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.displayOrder < 10);
    return filteredCategorie;
  };
  const categoriesToDisplay = filteredCategories();

  // Fonction qui va appliqué l'action d'ouverture de la nav utilisateur
  function handleUserNav() {
    dispatch(toggleUserNav());
  }

  // Gestion de la div de la searchbar
  let searchClassName = classnames('dropdown', { 'dropdown--closed': !searchOpen });
  if (searchBarValue === '') {
    searchClassName = 'dropdown--closed';
  }

  // ==================Handler=================
  // Recherche de la searchBar
  function handleLauchSearch(evt) {
    evt.preventDefault();
    navigate(`/article/${searchBarValue}`);
    dispatch(setSearchBarEmptyString());
  }

  // Gestion du menu déroulant
  function handleToggleClick() {
    dispatch(toggleBurger());
  }

  // deconnexion d'un utilisateur
  function handleDisconnect() {
    dispatch(toggleUserNav());
    dispatch(logout());
    navigate('/connexion');
    alert.error('Vous etes bien déconnecté');
  }

  // ==================Champs Controllés==========
  function handleSearchBar(event) {
    dispatch(setSearchBarValue(event.target.value));
  }
  function handleOnSearch(searchTerm) {
    dispatch(setSearchBarValue(searchTerm));
    dispatch(setSearchBarClosed());
  }

  return (
    <>
      <div className="header">
        <div className="header--top">
          <Link to="/">
            <img className="header--top__logoSite" src={logo} alt="logo site" />
          </Link>
          <form
            className="header--top__form"
            onSubmit={handleLauchSearch}
          >
            <input
              className="header--top__input"
              type="text"
              placeholder="Rechercher"
              value={searchBarValue}
              onChange={handleSearchBar}
            />
            <input className="header--top__submit" type="submit" value=" " />
            <div className={searchClassName}>
              {articles.filter((article) => {
              // ici on effectue un filtre sur les articles de la BDD
              // on applique une correction synthaxique
              // pour que la recherche corresponde a nos articles en bdd
                const searchTerm = searchBarValue.toLowerCase();
                const fullName = article.name.toLowerCase();

                return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
              }).slice(0, 10)
                .map((article) => (
                  // on vient ensuite mapper sur le filtre précédent
                  // et on les affiche pour faire le dropdown de la searchbar
                  <div
                    onClick={() => handleOnSearch(article.name)}
                    className="dropdown-row"
                    key={article.id}
                  >
                    {article.name}
                  </div>
                ))}
            </div>
          </form>
          <div className="header--top__logo">
            {!islogged && (
              <Link to="/connexion">
                <img className="header--top__user" src={user} alt="logo user" />
              </Link>
            )}
            {islogged && (
            <img className="header--top__user" src={user} alt="logo user" onClick={handleUserNav} />
            )}
            {userNavIsOpen && (
              <div className="header--top__usernav">
                <ul>
                  <Link to="/profil">
                    <li className="header--top__usernav__item" onClick={handleUserNav}>Votre compte</li>
                  </Link>
                  <Link to="/favoris">
                    <li className="header--top__usernav__item" onClick={handleUserNav}>Vos favoris</li>
                  </Link>
                  <Link to="historique">
                    <li className="header--top__usernav__item" onClick={handleUserNav}>Historique des commandes</li>
                  </Link>
                  <Link to="">
                    <li className="header--top__usernav__disconnect" onClick={handleDisconnect}>Déconnexion</li>
                  </Link>
                </ul>
              </div>
            )}
            <Link to="/panier">
              <img className="header--top__cart" src={cart} alt="logo panier" />
            </Link>
          </div>
        </div>
        <nav className="header--nav">
          <div className="header--nav__burger">
            <button
              type="button"
              className="header--nav__burger--button"
              onClick={handleToggleClick}
            >
              <img src={burger} alt={burger} />
            </button>

          </div>
          <ul className="header--nav__list">
            {
              categoriesToDisplay.map((categorie) => (<Navbar key={categorie.id} {...categorie} />))
            }
            {islogged && (
              <>
                <Link to="/favoris">
                  <li className="header--nav__item">
                    Mes favoris
                  </li>
                </Link>
                <Link to="/profil">
                  <li className="header--nav__user">Bienvenue {username}</li>
                </Link>
              </>
            )}
            {role.includes('ROLE_ADMIN') && (
              <a className="header--nav__item" href="http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/login">BackOffice</a>
            )}
          </ul>
        </nav>
      </div>
      <div className={className}>
        <div className="header--nav__burgertranslation">
          <ul className="header--nav__burgertranslation--list">
            {
              categoriesToDisplay.map((categorie) => (
                <BurgerItems key={categorie.id} {...categorie} />))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
