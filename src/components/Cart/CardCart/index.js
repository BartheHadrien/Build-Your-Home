import PropTypes from 'prop-types';

import deleteimg from 'src/assets/images/delete.svg';

function CardCart({
  name,
  picture,
  description,
  price,
  stock,
  quantity,
}) {
  function handleDeleteArticle() {
    localStorage.removeItem(name);
  }
  return (
    <div className="carts__article">
      <img src={picture} alt={name} className="carts__article__picture" />
      <p className="carts__article__description">{description}
      </p>
      <span className="carts__article__value">{price}</span>

      <span className="carts__article__avalaible">{stock}</span>

      <div className="carts__article__stock">
        <span className="carts__article__stock__delete">
          <button
            type="button"
            className="carts__article__stock__delete__icon"
            // onClick={handleLessCart}
          >
            -
          </button>
        </span>
        <input
          type="number"
          className="carts__article__stock__quantity"
          value={quantity}
          // onChange={handleNbArticleInCart}
        />
        <span className="carts__article__stock__add">
          <button
            type="button"
            className="carts__article__stock__add__icon"
            // onClick={handleAddCart}
          >
            +
          </button>
          <button
            type="button"
            className="carts__article__stock__add__icon"
            onClick={handleDeleteArticle}
          >
            <img src={deleteimg} alt={deleteimg} />
          </button>
        </span>
      </div>
    </div>
  );
}

CardCart.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardCart;
