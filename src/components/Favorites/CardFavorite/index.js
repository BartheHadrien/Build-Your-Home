import PropTypes from 'prop-types';
// styles
import './styles.scss';
import { Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteArticleToFavorite, deleteArticleToFavoriteInBdd } from '../../../actions/user';

function CardFavorite({
  name,
  picture,
  price,
  slug,
  favID,
}) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteArticleToFavorite(favID));
    dispatch(deleteArticleToFavoriteInBdd());
  }

  return (
    <>
      <Link to={`/article/${slug}`}>
        <div className="card--article">
          <img src={picture} alt="" className="card--article__picture" />
          <h1 className="card--article__title">{name}</h1>
          <div className="card--article--container">
            <p className="card--article--container__price">{price}€</p>
            <Rating className="card--article--container__rate" icon="star" defaultRating={3} maxRating={4} />
          </div>
        </div>
      </Link>
      <button type="button" onClick={handleDelete}>Supprimer</button>
    </>
  );
}

CardFavorite.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  favID: PropTypes.number.isRequired,
};

export default CardFavorite;
