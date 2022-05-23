// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Navigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useMemo } from 'react';
import { Rating } from 'semantic-ui-react';

// ==================Action======================
import {
  setAddArticleInCart, setAddArticleToBuy, setLessArticleInCart,
  setLessArticleToBuy,
  setNbArticleInCart, setNbArticleToBuy, setNotNull, setNotNullBuy,
} from 'src/actions/article';
import { addArticleToFavorite, addArticleToFavoriteBdd, fetchUser } from 'src/actions/user';

// ==================Style&IMG===================
import './styles.scss';
import user from 'src/assets/images/user.svg';

// ==================Fonction====================
import { findArticle, findFiveArticles } from '../../selectors/article';

// ==================Composant===================
import ListArticle from './ListArticle';

function Article() {
// ====================HOOK======================

  const dispatch = useDispatch();
  const alert = useAlert();
  // useParams permet d'extraire les paramètres d'url dynamique
  // ici on s'en sert pour récupérer le slug de l'article à afficher
  const { slug } = useParams();

  // ========Récupération des informations issues du state=========

  // Utilisateur connecté
  const isLogged = useSelector((state) => state.user.user.logged);

  // liste de tous les articles
  const articles = useSelector((state) => state.article.list);

  // quantité d'articles à ajouter au panier
  const counterCart = useSelector((state) => state.article.nbArticleCart);

  // quantité d'articles à ajouter aux achats
  const counterBuy = useSelector((state) => state.article.nbArticleBuy);

  // Favoris de l'user connecté
  const favoriteArticles = useSelector((state) => state.user.user.favorites);

  // ========================Fonctions filtres=========================

  // On passe le slug en argument de l'article à la fonction findArticle
  // (codée dans le selectors correspondant) pour récupérer l'article à afficher
  const article = findArticle(articles, slug);

  // Fonction permettant d'afficher 5 article en fonction du display order

  const listArticle = findFiveArticles(articles);

  // Boucle pour extraire tous les id d'articles des favoris de l'user.
  // Pour comparer dans le handler AddFavorite si l'article n'a pas été déjà ajouté en favoris
  const favoriteArray = favoriteArticles.map((favorite) => (favorite.article.id));

  // ==========================LocalSorage Article ==========================

  // Récupération de la liste de tout les articles depuis le localStorage
  const listArticlesInLocalStorage = useMemo(() => {
    const value = localStorage.getItem('articles');
    return JSON.parse(value);
  }, []);

  // Filtre sur le tableau de tout les articles pour récupérer l'article visé
  // (comparaison avec le slug issus de l'url => useParams)
  const articleToLocalStorage = listArticlesInLocalStorage.find((item) => item.slug === slug);

  // Si le slug entré dans l'url ne correspond à aucun articles extrait du loclaStorage
  // redirection vers page 404

  if (articleToLocalStorage === undefined) {
    return <Navigate to="/error" replace />;
  }

  // Extraction de l'article visé depuis le localStorage
  let articleInLocalStorage = JSON.parse(localStorage.getItem('article'));

  // Si article localStorage vide ou article null création ajout d'un slug null
  if (articleInLocalStorage == null) articleInLocalStorage = [{ slug: null }];

  // Si le slug correspondant à l'article visé ne correspond pas à celui de l'url
  // on le remplace (key article) par l'article filtré dans le tableau de tout les articles
  if (articleInLocalStorage.slug !== slug) {
    localStorage.setItem('article', JSON.stringify(articleToLocalStorage));
  }

  // On extrait l'entrée mis à jour du localStorage
  articleInLocalStorage = JSON.parse(localStorage.getItem('article'));

  // ==========================================
  // ==================Handler=================

  // ========Compteurs========

  // Handlers pour incrémenter le compteur du panier & de l'achat immédiat
  function handleAddCart() {
    dispatch(setAddArticleInCart());
  }
  function handleAddBuy() {
    dispatch(setAddArticleToBuy());
  }

  // Handler pour décrémenter le Panier & achat immédiat
  function handleLessCart() {
    dispatch(setLessArticleInCart());
  }
  function handleLessBuy() {
    dispatch(setLessArticleToBuy());
  }

  // ========Favoris========

  // Handler pour l'ajout d'un article au favoris

  function handleAddFavorite() {
    // Comparaison entre les id des articles favoris et de l'article courant pour savoir
    // si ce dernier n'a pas déjà été ajouté  en favoris
    const isFavorite = favoriteArray.includes(article.id);
    // Si l'article n'est pas déjà dans les favoris de l'utilisateur connecté alors:
    if (!isFavorite) {
      dispatch(fetchUser());
      // J'ajoute l'article dans ces favoris => state
      dispatch(addArticleToFavorite(article));
      // Je l'ajoute également en BDD
      dispatch(addArticleToFavoriteBdd());
      alert.success("L'article a bien était ajouté a vos favoris");
    }
    else alert.error('Vous avez deja cet article en favoris');
  }

  // ========Panier========

  // Handler pour ajout de l'article au panier

  function handleAddArticleCart() {
    // création de l'objet à stocker dans le local storage contenant toute les informations
    // nécessaire => quantité et données de l'article concerné
    const addArticle = { quantity: counterCart, article: article, articleID: article.id };
    // Récupération (création) des données stockées dans le localStorage à la key allCart
    let allCart = JSON.parse(localStorage.getItem('allCart'));
    // Si localStorage vide (null) attribution d'une valeur par défaut étant un tableau vide
    if (allCart == null) allCart = [];
    // mise à jour de la key cart dans le local Storage avec les données souhaitées
    localStorage.setItem('cart', JSON.stringify(addArticle));
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Injection de l'objet à stocker dans le tableau extrait du localStorage
    const allCartMapped = allCart.map((item) => item.articleID);

    if (allCartMapped.includes(cart.articleID)) {
      alert.error("L'article est déja dans votre panier");
    }
    else {
      allCart.push(addArticle);
      // Réinjection de ce même tableau à la key allCart dans le localstorage
      localStorage.setItem('allCart', JSON.stringify(allCart));
      // alerte confirmant l'ajout de l'article au panier
      alert.success("L'article a bien était ajouté a votre panier");
    }
  }
  // ==================Champs Controllés==========

  // Handler champ controlé de l'input panier
  function handleNbArticleInCart(event) {
    dispatch(setNbArticleInCart(event.target.value));
  }

  // Handler pour champ controllé d'achat immédiats
  function handleNbArticleToBuy(event) {
    dispatch(setNbArticleToBuy(event.target.value));
  }

  // ================ Conditions ===============
  // Si le compteur panier est inférieur à 1 je le réinitialise
  if (counterCart < 1) {
    dispatch(setNotNull());
  }
  // Si le compteur achat immédiat est inférieur à 1 je le réinitialise

  if (counterBuy < 1) {
    dispatch(setNotNullBuy());
  }

  return (
    <div className="article">
      {/* Article */}
      <section className="article--container">
        <div className="article--container__img">
          <img className="article--container__img--art" src={articleInLocalStorage.picture} alt={`illustration ${articleInLocalStorage.name}`} />
        </div>
        <div className="article--container__details">
          <div className="article--container__details--box">
            <h2 className="article--container__details--box__title">{articleInLocalStorage.name}</h2>
            {/* <div>
              <a className="article--container__details--box__notation" href="#">Notes :</a>
              <Rating className="article--container__details--box__rate" icon="star" defaultRating={articleInLocalStorage.rating} maxRating={5} size="tiny" />
            </div> */}
          </div>

          {/* <div className="box">
            <Link className="box__tag" to={`/categories/${articleInLocalStorage.category.name}`}> {articleInLocalStorage.category.name} </Link>
            <Link className="box__tag" to="#"> {articleInLocalStorage.brand.name} </Link>
          </div> */}
          <p className="article--container__details--description">
            {articleInLocalStorage.description}
            <span> Prix : <span>{articleInLocalStorage.price} €</span> </span>
            <span> Stock : {articleInLocalStorage.stock} U </span>
          </p>
        </div>
        <div className="article--container__cart">
          <h2 className="article--container__cart--title">Ajouter au panier</h2>

          {/* Counter Cart */}
          <div className="article--container__cart--add">
            <button
              type="button"
              className="article--container__cart--add__click"
              onClick={handleLessCart}

            >
              -
            </button>
            <input
              type="number"
              className="article--container__cart--add__counter"
              value={counterCart}
              onChange={handleNbArticleInCart}
            />

            <button
              type="button"
              className="article--container__cart--add__click"
              onClick={handleAddCart}
            >
              +
            </button>
            <button
              type="submit"
              className="article--container__cart--add__cart"
              onClick={handleAddArticleCart}
            >
              Ajouter au panier
            </button>
          </div>

          {/* Counter Buy */}
          <div className="article--container__cart--buy">
            <button
              type="button"
              className="article--container__cart--buy__click"
              onClick={handleLessBuy}
            >
              -
            </button>
            <input
              type="number"
              className="article--container__cart--buy__counter"
              value={counterBuy}
              onChange={handleNbArticleToBuy}
            />

            <button
              type="button"
              className="article--container__cart--buy__click"
              onClick={handleAddBuy}
            >
              +
            </button>

            <button
              type="submit"
              className="article--container__cart--buy__cart"
            >
              Acheter
            </button>
          </div>

          {/* Button add Favorite */}
          {isLogged && (
          <button
            type="submit"
            className="article--container__cart--favorite"
            onClick={handleAddFavorite}
          >
            Ajouter aux favoris
          </button>
          )}

        </div>
      </section>

      {/* Selection of five article */}
      <section className="slider--container">
        {listArticle.map((itemArticle) => <ListArticle key={itemArticle.id} {...itemArticle} />)}

      </section>

      {/* Avis */}

      {/* <section className="avis--container">
        <h2 className="avis--container__title">Avis</h2>
        <div className="avis--container__box">
          <img className="avis--container__img" src={user} alt="user" />
          <h4 className="avis--container__user">Username</h4>
          <Rating className="avis--container__user--rate" icon="star" defaultRating={4} maxRating={4} />
          <p className="avis--container__message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, consectetur iusto impedit dolore velit natus
          </p>
        </div>
        <div className="avis--container__box">
          <img className="avis--container__img" src={user} alt="user" />
          <h4 className="avis--container__user">Username</h4>
          <Rating className="avis--container__user--rate" icon="star" defaultRating={1} maxRating={4} />
          <p className="avis--container__message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, consectetur iusto impedit dolore velit natus
          </p>
        </div>
      </section> */}
    </div>
  );
}

export default Article;
