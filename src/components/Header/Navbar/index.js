// Import
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function Navbar({ name, id }) {
  return (
    <li className="header--nav__item" key={id}>
      {name}
    </li>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Navbar;
