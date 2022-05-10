// Import
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

// actions
import { toggleBurger, setSearchBarValue, toggleUserNav } from 'src/actions/header';

// librairies
import classnames from 'classnames';

// Styles
import './styles.scss';
// Images
import user from 'src/assets/images/user.svg';
import cart from 'src/assets/images/cart.svg';
import logo from 'src/assets/images/logo.svg';
import burger from 'src/assets/images/burger.svg';
import hello from 'src/assets/images/hello.svg';

// Components
import Navbar from './Navbar';
import BurgerItems from './BurgerItems';

function Header() {
  // ________________Affichage des catégories____________________//

  // Selection des catégorie récupérée dans le state
  const categories = useSelector((state) => state.categories.list);

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.displayOrder < 10);
    return filteredCategorie;
  };

  // Stockage de la fonction de filtre dans une constante pour pouvoir l'utiliser
  const categoriesToDisplay = filteredCategories();

  // _____________________________________________________________//

  const dispatch = useDispatch();

  const searchBarValue = useSelector((state) => state.header.navbar.searchBarValue);
  const articles = useSelector((state) => state.article.list);
  const islogged = useSelector((state) => state.user.user.logged);

  const navigate = useNavigate();
  // champs controllé pour la searchBar
  function handleSearchBar(event) {
    dispatch(setSearchBarValue(event.target.value));
  }

  function handleOnSearch(searchTerm) {
    dispatch(setSearchBarValue(searchTerm));
  // dispatch(sendResearch(searchTerm)); // #TODO a envoyer a l'API
  }
  function handleLauchSearch(evt) {
    evt.preventDefault();
    navigate(`/article/${searchBarValue}`);
  }

  //  ______________Gestion du menu burger_____________
  // Recherche dans le state de la valeur de isOpen
  //  conditionnant l'affichage du menu burger
  const isOpen = useSelector((state) => state.header.navbar.isOpen);
  // Gestion des classes CSS

  const className = classnames('header--container', { 'header--container__closed': !isOpen });

  function handleToggleClick() {
    dispatch(toggleBurger());
  }

  //  ______________User connecté_____________
  // Récupération des données utilisateur connecté
  const username = useSelector((state) => state.user.user.username);

  function handleUserNav() {
    console.log('test');
    dispatch(toggleUserNav());
  }

  const userNavIsOpen = useSelector((state) => state.header.userNavbar.isOpen);

  function handleDisconnect() {
    console.log('Je me déconnecte');
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
            <div className="dropdown">
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
              <Link to="/profil">
                <img className="header--top__user" src={hello} alt="logo user" onMouseOver={handleUserNav} />
              </Link>
            )}
            {userNavIsOpen && (
              <div className="header--top__usernav">
                <ul>
                  <Link to="/profil">
                    <li>Votre compte</li>
                  </Link>
                  <Link to="/favoris">
                    <li>Vos favoris</li>
                  </Link>
                  <Link to="historique">
                    <li>Historique des commandes</li>
                  </Link>
                  <button type="button" className="header--top__usernav__disconnect" onClick={handleDisconnect}>Déconnexion</button>
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
