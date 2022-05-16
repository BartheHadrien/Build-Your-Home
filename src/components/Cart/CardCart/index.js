import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteimg from 'src/assets/images/delete.svg';
import { setArticleInCart } from '../../../actions/cart';

function CardCart({
  name,
  picture,
  description,
  price,
  stock,
  quantity,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cart = useSelector((state) => state.cart.name);
  // const cartMapped = cart.map((item) => item.article);
  // console.log(cart);

  function handleDeleteArticle() {
    const value = localStorage.getItem('allCart');
    const initialValue = JSON.parse(value);
    const findValue = initialValue.find((item) => item.article.name === name);
    const indexInitialValue = initialValue.indexOf(findValue);
    initialValue.splice(indexInitialValue, 1);
    localStorage.setItem('allCart', JSON.stringify(initialValue));
  }

  function handleLessCart() {
    const localStorageArticle = localStorage.getItem(name);
    const parsed = JSON.parse(localStorageArticle);
    parsed.quantity = quantity - 1;
    navigate('/panier');
    localStorage.setItem(name, JSON.stringify(parsed));
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
            onClick={handleLessCart}
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
  // description: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // picture: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardCart;
