// Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function BurgerItems({ name, id, slug }) {
  // URL de la catégorie à afficher
  const link = `/categorie/${slug}`;
  return (
    <Link to={link}>
      <li className="header--nav__burgertranslation--item" key={id}>
        {name}
      </li>
    </Link>
  );
}

BurgerItems.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BurgerItems;
