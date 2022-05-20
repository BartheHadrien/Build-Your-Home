// ==============================================
// ==================Import======================
// ==============================================

// ==================PropTypes===================
import PropTypes from 'prop-types';

// ==================Dépendance==================
import { Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// ==================Style&IMG===================
import './styles.scss';

function CardArticle({
  name, picture, price, slug,
}) {
  return (
    <Link className="card" to={`/article/${slug}`}>
      <div className="card--article">
        <img src={picture} alt="" className="card--article__picture" />
        <h1 className="card--article__title">{name}</h1>
        <div className="card--article--container">
          <p className="card--article--container__price">{price}€</p>
          {/* <Rating className="card--article--container__rate" icon="star" defaultRating={3} maxRating={4} /> */}
        </div>
      </div>
    </Link>
  );
}

// ==================PropTypes====================
CardArticle.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardArticle;
