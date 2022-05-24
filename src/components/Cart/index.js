// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useAlert } from 'react-alert';

// ==================Action======================
import { findFiveArticles } from 'src/selectors/article';
import { addCartToOrder, addCartToOrderBdd, setArticleInCart } from 'src/actions/cart';

// ==================Style&IMG===================
import './styles.scss';

// ==================Composant===================
import CardArticle from 'src/components/CardArticle';
import CardCart from './CardCart';

function Carts() {
  // ==================HOOK===================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const articles = useSelector((state) => state.article.list);
  const isLogged = useSelector((state) => state.user.user.logged);
  let listArticleInCart = useSelector((state) => state.cart.name);

  // ==================Fonctions================
  // Stockage dans une constante de 5 articles à afficher
  const articlesToDisplay = findFiveArticles(articles);

  // Gestion du panier a chaque changement de celui-ci
  const initialValue = useMemo(() => {
    const value = localStorage.getItem('allCart');
    return JSON.parse(value);
  }, [localStorage]);
  // Pour chaque item on récupère la quantité d'articles
  if (listArticleInCart == null) listArticleInCart = [0];
  const quantityListArticle = listArticleInCart.map((item) => item.quantity);

  // On déclare une variable nbArticle à 0
  let nbArticle = 0;
  // On boucle sur la liste pour récupérer le nombre d'articles
  for (let i = 0; i < quantityListArticle.length; i++) {
    nbArticle += quantityListArticle[i];
  }

  // On calcul le prix de chaque articles * par la quantité
  const priceListArticle = listArticleInCart.map((item) => item.article.price * item.quantity);

  // On déclare une variable sum à 0
  let sum = 0;
  // On boucle pour trouver le prix en fonction du nombre
  for (let i = 0; i < priceListArticle.length; i++) {
    sum += priceListArticle[i];
  }

  // ==================UseEffect===============
  // A chaque changement d'URL
  useEffect(
    () => {
      dispatch(setArticleInCart(initialValue));
    },
    [location],
  );

  // =================HANDLER==================
  // Valider la commande
  function handleSendOrder() {
    // Si l'utlisateur est connecté
    if (isLogged) {
      // On dispatch l'action d'ajout de commande en
      // lui passant en payload la valeur de initialValue défini ligne 42
      dispatch(addCartToOrder(initialValue));
      // On dispatch l'action d'ajout de commande en BDD
      dispatch(addCartToOrderBdd());
      alert.success('Votre commande a était prise en compte');
      localStorage.setItem('allCart', JSON.stringify([]));
      navigate('/');
    }
    else {
      // Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion
      navigate('/connexion');
    }
  }

  // Redirection vers la page d'acceuil
  function handleContinueShopping() {
    navigate('/');
  }

  return (
    <>
      <div className="carts">
        {/* Head of content */}
        <section className="carts__content">
          <div className="carts__content__head">
            <h2 className="carts__content__head__title">Votre panier</h2>
            {/* <span className="carts__content__head__price">Prix</span> */}
          </div>

          {/* Content of article */}
          {listArticleInCart.map((item) => (
            <CardCart
              key={item.article.id}
              quantity={item.quantity}
              {...item.article}
            />
          ))}

          <span className="carts__article__total">Sous-total ({nbArticle} article) : {sum}$</span>
        </section>

        {/* Content of payment section */}
        <section className="carts__pay">
          <p className="carts__pay__total">Sous-total ({nbArticle} article) : {sum}$</p>
          <button type="button" className="carts__pay__button" onClick={handleSendOrder}>Passer la commande</button>
          <button type="button" className="carts__pay__button" onClick={handleContinueShopping}>Continuez vos achats</button>
        </section>
      </div>
      {/* Content of article to display */}
      <section className="slider--container">
        {articlesToDisplay.map((article) => <CardArticle {...article} key={article.id} />)}
      </section>
    </>
  );
}

export default Carts;
