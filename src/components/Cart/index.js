// Import
import { useDispatch, useSelector } from 'react-redux';

import CardArticle from 'src/components/CardArticle';
// Actions
import { findFiveArticles } from '../../selectors/article';

// Styles
import './styles.scss';

// Components

import CardCart from './CardCart';
import { addCartToOrder, addCartToOrderBdd } from '../../actions/cart';

function Carts() {
  const dispatch = useDispatch();
  // ________________________________________________________________ //
  // __________________________ Articles_____________________________ //

  // Selection des artciles récupérée dans le state
  const articles = useSelector((state) => state.article.list);

  // Stockage dans une constante de 5 articles à afficher
  const articlesToDisplay = findFiveArticles(articles);

  // ________________________________________________________________ //
  // ________________________________________________________________ //
  // __________________________ Panier_____________________________ //

  // getting stored value
  const cart = useSelector((state) => state.cart.name);
  const cartsaved = cart.map((item) => localStorage.getItem(item));
  const initialValue = cartsaved.map((item) => JSON.parse(item));

  // console.log(cart);
  console.log('cart saved', cartsaved);
  console.log('initial value', initialValue);
  // console.log(localStorage);

  // ________________________________________________________________ //
  // ________________________________________________________________ //
  // ____________________Envoie de commande__________________________ //

  function handleSendOrder() {
    dispatch(addCartToOrder(initialValue));
    dispatch(addCartToOrderBdd());
  }

  return (
    <>
      <div className="carts">

        {/* Head of content */}
        <section className="carts__content">
          <div className="carts__content__head">
            <h2 className="carts__content__head__title">Votre panier</h2>
            <span className="carts__content__head__price">Prix</span>
          </div>

          {/* Content of article */}
          {initialValue.map((article) => (
            <CardCart
              key={article.article.id}
              quantity={article.quantity}
              {...article.article}
            />
          ))}

          <span className="carts__article__total">Sous-total (X article) : XX$</span>
        </section>

        {/* Content of payment section */}
        <section className="carts__pay">
          <p className="carts__pay__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, qui possimus, mollitia
            delectus maxime ex doloremque.
          </p>
          <p className="carts__pay__total">Sous-total (X article) : XX$</p>
          <button type="button" className="carts__pay__button" onClick={handleSendOrder}>Passer la commande</button>
          <button type="button" className="carts__pay__button">Continuez vos achats</button>
        </section>
      </div>
      {/* Content of article to display */}
      {articlesToDisplay.map((article) => <CardArticle {...article} key={article.id} />)}

    </>
  );
}

export default Carts;
