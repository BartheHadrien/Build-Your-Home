// Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { toggleBurger, setSearchBarValue } from 'src/actions';

// librairies
import classnames from 'classnames';

// Styles
import './styles.scss';
// Images
import user from 'src/assets/images/user.svg';
import cart from 'src/assets/images/cart.svg';
import logo from 'src/assets/images/logo.svg';
import burger from 'src/assets/images/burger.svg';

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

  // const dispatch = useDispatch();
  // const searchBarValue = useSelector((state) => state.navbar.searchBarValue);

  // function handleSearchBar(event) {
  //   dispatch(setSearchBarValue(event.target.value));
  // }

  // function handleSubmitSearchBar(event) {
  //   event.preventDefault();
  //   dispatch(sendResearch()); // #TODO a envoyer a l'API
  // }

  // Fonction qui permet de trier les articles en fonction de la valeur du champs.
  // function getFilteredArticle() {
  //   const search = useSelector((state) => state.navbar.searchBarValue);
  //   let filteredArticles = articlesList; // articlesList a récupérer de l'API
  //   if (search.length > 0) {
  //     filteredArticles = articlesList.filter((item) => {
  //       const nameLowerCase = item.name.toLowerCase();
  //       const inputSearchLowerCase = search.toLowerCase();

  //       return nameLowerCase.includes(inputSearchLowerCase);
  //     });
  //   }
  // }

  //  ______________Gestion du menu burger_____________
  // Recherche dans le state de la valeur de isOpen
  //  conditionnant l'affichage du menu burger
  // const isOpen = useSelector((state) => state.navbar.isOpen);
  // Gestion des classes CSS

  // const className = classnames('header--container', { 'header--container__closed': !isOpen });

  // function handleToggleClick() {
  //   dispatch(toggleBurger());
  // }

  return (
    <>
      <div className="header">
        <div className="header--top">
          <Link to="/">
            <img className="header--top__logoSite" src={logo} alt="logo site" />
          </Link>
          <form
            className="header--top__form"
            // onSubmit={handleSubmitSearchBar}
          >
            <input
              className="header--top__input"
              type="text"
              placeholder="Rechercher"
              // value={searchBarValue}
              // onChange={handleSearchBar}
            />
            <input className="header--top__submit" type="submit" value=" " />
          </form>
          <div className="header--top__logo">
            <Link to="/connexion">
              <img className="header--top__user" src={user} alt="logo user" />
            </Link>
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
              // onClick={handleToggleClick}
            >
              <img src={burger} alt={burger} />
            </button>

          </div>
          <ul className="header--nav__list">
            {
              categoriesToDisplay.map((categorie) => (<Navbar key={categorie.id} {...categorie} />))
            }
          </ul>

        </nav>

      </div>
      <div className="">
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
