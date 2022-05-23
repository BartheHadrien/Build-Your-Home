// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';

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
  const alert = useAlert();

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
      alert.info('ce produit n\'est plus en stock des délais de livraisons supplémentaires sont à prévoir');
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
      <div className="carts__article__container">
        <h3 className="carts__article__title">{name}</h3>
        <p className="carts__article__description">{description}</p>

        <div className="carts__article__stock">
          <button
            type="button"
            className="carts__article__stock__delete__icon"
            onClick={handleLessCart}
          >
            -
          </button>
          <span className="carts__article__stock__quantity">
            {quantity}
          </span>

          <button
            type="button"
            className="carts__article__stock__add"
            onClick={handleMoreCart}
          >
            +
          </button>
          <button type="button" className="carts__article__stock__delete" onClick={handleDeleteArticle}> </button>
        </div>
      </div>
      <span className="carts__article__value">Prix : {price} €</span>

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
