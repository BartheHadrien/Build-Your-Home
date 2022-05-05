// npm
import PropTypes from 'prop-types';

// styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function CardCategory({ name }) {
  return (
    <div className="card-category">
      <p>{name}Test catégorie</p>
      <img src={desktop} alt={desktop} className="card-category__picture" />
    </div>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardCategory;
