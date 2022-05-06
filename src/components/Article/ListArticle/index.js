// import Proptypes
import PropTypes from 'prop-types';

// Import style
import './style.scss';

function ListArticle({
  name, picture, description,
}) {
  return (
    <div className="slider--container__box">
      <img className="slider--container__box--img" src={picture} alt="slider" />
      <h3 className="slider--container__box--title">{name}</h3>
      <span className="slider--container__box--description">{description}</span>
    </div>
  );
}

ListArticle.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ListArticle;
