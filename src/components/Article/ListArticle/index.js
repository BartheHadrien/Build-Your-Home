// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ==================Style&IMG===================
import './style.scss';

function ListArticle({
  name, picture, price,
}) {
  return (
    <div className="slider--container__box">
      <Link className="slider--container__box--link" to={`/article/${name}`}>

        <img className="slider--container__box--img" src={picture} alt="slider" />
        <h3 className="slider--container__box--title">{name}</h3>
        <p className="slider--container__box--price">{price}€</p>
      </Link>
    </div>

  );
}

ListArticle.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ListArticle;
