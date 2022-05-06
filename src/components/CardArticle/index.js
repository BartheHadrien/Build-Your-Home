import PropTypes from 'prop-types';
// styles
import './styles.scss';
import { Rating } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

function CardArticle({
  id, name, picture, price,
}) {
  // On utilise le Hook useParams pour récupérer le slug de l'URL courante
  const { slug } = useParams();
  console.log(useParams());
  return (
    <Link to={`/article/${id}`}>
      <div className="card--article">
        <img src={picture} alt="" className="card--article__picture" />
        <h1 className="card--article__title">{name}</h1>
        <div className="card--article--container">
          <p className="card--article--container__price">{price}€</p>
          <Rating className="card--article--container__rate" icon="star" defaultRating={3} maxRating={4} />
        </div>
      </div>
    </Link>
  );
}

CardArticle.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardArticle;
