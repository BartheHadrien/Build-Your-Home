// styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function CardCategory() {
  return (
    <div className="card-category">
      <p>Test catégorie</p>
      <img src={desktop} alt={desktop} className="card-category__picture" />
    </div>
  );
}

export default CardCategory;
