// styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';
import { Rating } from 'semantic-ui-react';

function CardArticle() {
  return (
    <div className="card--article">
      <img src={desktop} alt={desktop} className="card--article__picture" />
      <h1 className="card--article__title">Test</h1>
      <div className="card--article--container">
        <p className="card--article--container__price">10,90€</p>
        <Rating className="card--article--container__rate" icon="star" defaultRating={3} maxRating={4} />
      </div>

    </div>
  );
}

export default CardArticle;
