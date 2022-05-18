// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Link } from 'react-router-dom';

// ==================Style&IMG===================
import './styles.scss';
import facebook from 'src/assets/images/facebook.svg';
import twitter from 'src/assets/images/twitter.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://fr-fr.facebook.com/">
          <img src={facebook} alt="facebook logo" className="footer__icons__icon" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter logo" className="footer__icons__icon" />
        </a>
      </div>
      <div className="footer__cgv">
        <Link to="/mentions-legales">
          <span className="footer__cgv__legal-mentions">Mentions Légales</span>
        </Link>
        <Link to="/contact">
          <span className="footer__cgv__contact">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
