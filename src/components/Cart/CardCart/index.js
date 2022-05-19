// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// ==================Action======================
import { setArticleInCart } from 'src/actions/cart';

// ==================Style&IMG===================
import deleteimg from 'src/assets/images/delete.svg';
import './style.scss';

function CardCart({
  name,
  picture,
  description,
  price,
  stock,
  quantity,
}) {
  // ==================HOOK===================
  const dispatch = useDispatch();

  // =================HANDLER==================
  // supprimer un article du panier
  function handleDeleteArticle() {
    const value = localStorage.getItem('allCart');
    const initialValue = JSON.parse(value);
    const findValue = initialValue.find((item) => item.article.name === name);
    const indexInitialValue = initialValue.indexOf(findValue);
    initialValue.splice(indexInitialValue, 1);
    localStorage.setItem('allCart', JSON.stringify(initialValue));
    dispatch(setArticleInCart(initialValue));
  }

  // baisser la quantité du panier
  function handleLessCart() {
    if (quantity === 1) {
      handleDeleteArticle();
    }
    const value = localStorage.getItem('allCart');
    const initialValue = JSON.parse(value);
    const findValue = initialValue.find((item) => item.article.name === name);
    findValue.quantity = quantity - 1;
    const indexInitialValue = initialValue.indexOf(findValue);
    initialValue.splice(indexInitialValue, 1, findValue);
    localStorage.setItem('allCart', JSON.stringify(initialValue));
    dispatch(setArticleInCart(initialValue));
  }

  // Augmenter la quantité du panier
  function handleMoreCart() {
    if (quantity >= stock) {
      console.log('ce produit n\'est plus en stock des délais de livraisons supplémentaires sont à prévoir');
    }
    const value = localStorage.getItem('allCart');
    const initialValue = JSON.parse(value);
    const findValue = initialValue.find((item) => item.article.name === name);
    findValue.quantity = quantity + 1;
    const indexInitialValue = initialValue.indexOf(findValue);
    initialValue.splice(indexInitialValue, 1, findValue);
    localStorage.setItem('allCart', JSON.stringify(initialValue));
    dispatch(setArticleInCart(initialValue));
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
        <span className="carts__article__stock__quantity">
          {quantity}
        </span>
        <span className="carts__article__stock__add">
          <button
            type="button"
            className="carts__article__stock__add__icon"
            onClick={handleMoreCart}
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

// ==================PropTypes====================
CardCart.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardCart;
