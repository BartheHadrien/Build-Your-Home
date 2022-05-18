// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ==================Style&IMG===================
import './styles.scss';

function CardCategory({ name, picture, slug }) {
  return (
    <Link to={`/categories/${slug}`}>
      <div className="card-category">
        <p>{name}</p>
        <img src={picture} alt={picture} className="card-category__picture" />
      </div>
    </Link>
  );
}

// ==================PropTypes====================
CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CardCategory;
