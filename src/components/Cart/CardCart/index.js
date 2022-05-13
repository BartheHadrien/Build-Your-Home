import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteimg from 'src/assets/images/delete.svg';
import { lessQuantityCart, setArticleInCart } from '../../../actions/cart';

function CardCart({
  name,
  picture,
  description,
  price,
  stock,
  quantity,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.article.list);
  const navigate = useNavigate();

  function handleDeleteArticle() {
    localStorage.removeItem(name);

    const cartsaved = cart.filter((item) => localStorage.getItem(item.name));

    const value = cartsaved.map((item) => localStorage.getItem(item.name));

    const initialValue = value.map((item) => JSON.parse(item));

    dispatch(setArticleInCart(initialValue));
  }

  function handleLessCart() {
    const localStorageArticle = localStorage.getItem(name);
    const parsed = JSON.parse(localStorageArticle);
    parsed.quantity = quantity - 1;
    navigate('/panier');
    // dispatch(lessQuantityCart(quantity - 1));
    localStorage.setItem(name, JSON.stringify(parsed));

    // console.log(parsed);
  }

  // const localStorageValue = localStorage.getItem(name);
  // const localStorageToJSX = JSON.parse(localStorageValue);

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
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardCart;
