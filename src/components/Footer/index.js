// Import
import { Link } from 'react-router-dom';

// Import Styles
import './styles.scss';
import facebook from 'src/assets/images/facebook.svg';
import twitter from 'src/assets/images/twitter.svg';
import share from 'src/assets/images/share.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={facebook} alt="facebook logo" className="footer__icons__icon" />
        <img src={twitter} alt="twitter logo" className="footer__icons__icon" />
        <img src={share} alt="share logo" className="footer__icons__icon" />
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
