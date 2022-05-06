// Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function BurgerItems({ name, id }) {
  return (
    <Link to="">
      <li className="header--nav__burgertranslation--item" key={id}>
        {name}
      </li>
    </Link>
  );
}

BurgerItems.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BurgerItems;
