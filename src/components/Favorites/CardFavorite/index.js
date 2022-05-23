// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// ==================Style&IMG===================
import './styles.scss';

// ==================Action======================
import { deleteArticleToFavorite, deleteArticleToFavoriteInBdd, fetchUser } from '../../../actions/user';

function CardFavorite({
  name,
  picture,
  price,
  slug,
  favID,
}) {
  // ==================HOOK===================
  const dispatch = useDispatch();

  // ==================Handler=================
  // suppression d'un article en favoris
  function handleDelete() {
    // On dispatch l'action de récupération d'un utilisateur
    dispatch(fetchUser());
    // On dispatch l'action de suppression des favoris en lui
    // passant en argument l'ID des favoris
    dispatch(deleteArticleToFavorite(favID));
    // On dispatch l'action de suppression d'un article en BDD
    dispatch(deleteArticleToFavoriteInBdd());
  }

  return (
    <div className="card">
      <div className="card--position">
        <button type="button" className="card--button" onClick={handleDelete}> </button>
        <Link to={`/article/${slug}`}>
          <div className="card--article">
            <img src={picture} alt="" className="card--article__picture--favorite" />
            <h1 className="card--article__title">{name}</h1>
            <div className="card--article--container">
              <p className="card--article--container__price">{price}€</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// ==================PropTypes====================
CardFavorite.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  favID: PropTypes.number.isRequired,
};

export default CardFavorite;
