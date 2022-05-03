// Import local :
// Styles
import './styles.scss';
// Images
import user from 'src/assets/images/user.svg';
import cart from 'src/assets/images/cart.svg';
import logo from 'src/assets/images/logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="header--top">
        <img className="header--top__logoSite" src={logo} alt="logo site" />
        <form className="header--top__form">
          <input className="header--top__input" type="text" placeholder="Rechercher" />
          <input className="header--top__submit" type="submit" value=" " />
        </form>
        <div className="header--top__logo">
          <img className="header--top__user" src={user} alt="logo user" />
          <img className="header--top__cart" src={cart} alt="logo panier" />
        </div>

      </div>
      <nav className="header--nav">
        <ul className="header--nav__list">
          <button className="header--nav__burger" type="button">
            <span className="burger-bar" />
          </button>
          <li className="header--nav__item">
            Catégorie 1
          </li>
          <li className="header--nav__item">
            Catégorie 1
          </li>
          <li className="header--nav__item">
            Catégorie 1
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Header;
