// Import
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function Navbar({ name, id, slug }) {
  // URL de la catégorie à afficher
  const link = `/categories/${slug}`;

  return (
    <Link to={link}>
      <li className="header--nav__item" key={id}>
        {name}
      </li>
    </Link>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Navbar;
