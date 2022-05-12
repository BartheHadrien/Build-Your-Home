import deleteCart from 'src/assets/images/delete.svg';
import PropTypes from 'prop-types';

import add from 'src/assets/images/add.svg';

function CardCart({
  name,
  picture,
  description,
  price,
  stock,
}) {
  return (
    <div className="carts__article">
      <img src={picture} alt={name} className="carts__article__picture" />
      <p className="carts__article__description">{description}
      </p>
      <span className="carts__article__value">{price}</span>

      <span className="carts__article__avalaible">{stock}</span>

      <div className="carts__article__stock">
        <span className="carts__article__stock__delete">
          <img src={deleteCart} alt={deleteCart} className="carts__article__stock__delete__icon" />
          <p className="carts__article__stock__delete__paragraph">Supprimer</p>
        </span>
        <mark className="carts__article__stock__quantity">Quantité : XX</mark>
        <span className="carts__article__stock__add">
          <img src={add} alt={add} className="carts__article__stock__add__icon" />
          <p className="carts__article__stock__add__paragraph">Ajouter</p>
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
};

export default CardCart;
