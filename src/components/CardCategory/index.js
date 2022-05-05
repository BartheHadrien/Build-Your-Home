// npm
import PropTypes from 'prop-types';

// styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function CardCategory({ name, picture }) {
  return (
    <div className="card-category">
      <p>{name}</p>
      <img src={picture} alt={picture} className="card-category__picture" />
    </div>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default CardCategory;
