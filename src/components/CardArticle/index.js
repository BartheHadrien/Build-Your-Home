// styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function CardArticle() {
  return (
    <div className="card-article">
      <p>Test</p>
      <img src={desktop} alt={desktop} className="card-article__picture" />
    </div>
  );
}

export default CardArticle;
