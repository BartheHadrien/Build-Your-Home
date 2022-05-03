// Import
import { useSelector, useDispatch } from 'react-redux';

// Styles
import './styles.scss';
// Images
import user from 'src/assets/images/user.svg';
import cart from 'src/assets/images/cart.svg';
import logo from 'src/assets/images/logo.svg';
import burger from 'src/assets/images/burger.svg';
// actions
import { setSearchBarValue } from '../../actions';

function Header() {
  const dispatch = useDispatch();
  const searchBarValue = useSelector((state) => state.navbar.searchBarValue);

  function handleSearchBar(event) {
    dispatch(setSearchBarValue(event.target.value));
  }

  function handleSubmitSearchBar(event) {
    event.preventDefault();
    dispatch(sendResearch()); // #TODO a envoyer a l'API
  }

  // Fonction qui permet de trier les articles en fonction de la valeur du champs.
  function getFilteredArticle() {
    const search = useSelector((state) => state.navbar.searchBarValue);
    let filteredArticles = articlesList; // articlesList a récupérer de l'API
    if (search.length > 0) {
      filteredArticles = articlesList.filter((item) => {
        const nameLowerCase = item.name.toLowerCase();
        const inputSearchLowerCase = search.toLowerCase();

        return nameLowerCase.includes(inputSearchLowerCase);
      });
    }
  }

  return (
    <>
      <div className="header">
        <div className="header--top">
          <img className="header--top__logoSite" src={logo} alt="logo site" />
          <form
            className="header--top__form"
            onSubmit={handleSubmitSearchBar}
          >
            <input
              className="header--top__input"
              type="text"
              placeholder="Rechercher"
              value={searchBarValue}
              onChange={handleSearchBar}
            />
            <input className="header--top__submit" type="submit" value=" " />
          </form>
          <div className="header--top__logo">
            <img className="header--top__user" src={user} alt="logo user" />
            <img className="header--top__cart" src={cart} alt="logo panier" />
          </div>

        </div>
        <nav className="header--nav">
          <div className="header--nav__burger">
            <img src={burger} alt={burger} />
          </div>
          <ul className="header--nav__list">
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
            <li className="header--nav__item">
              Catégorie
            </li>
          </ul>

        </nav>

      </div>
      <div className="header--container">
        <div className="header--nav__burgertranslation">
          <ul className="header--nav__burgertranslation--list">
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
            <li className="header--nav__burgertranslation--item">
              Catégorie 1
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
