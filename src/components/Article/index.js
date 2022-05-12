// import npm
import { Navigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import semantic ui

import { Rating } from 'semantic-ui-react';

// import composant
import user from 'src/assets/images/user.svg';
import ListArticle from './ListArticle';

// import image

// import selectors function
import { findArticle, findFiveArticles } from '../../selectors/article';

// import style
import './styles.scss';
import {
  setAddArticleInCart, setAddArticleToBuy, setLessArticleInCart,
  setLessArticleToBuy,
  setNbArticleInCart, setNbArticleToBuy, setNotNull, setNotNullBuy,
} from '../../actions/article';
import { addArticleToFavorite, addArticleToFavoriteBdd } from '../../actions/user';
import { setArticleInCart } from '../../actions/cart';

function Article() {
  const dispatch = useDispatch();

  // Récupération des inforamtions issues du state
  // list des articles
  const articles = useSelector((state) => state.article.list);
  // console.log(articles);

  // nombre d'articles à ajouter au panier
  const counterCart = useSelector((state) => state.article.nbArticleCart);
  // console.log(counterCart);

  // Nb d'articles à ajouter aux achats
  const counterBuy = useSelector((state) => state.article.nbArticleBuy);

  // useParams permet d'extraire les paramètres d'url dynamique
  // ici on s'en sert pour récupérer le slug de l'article à afficher
  const { slug } = useParams();

  // On passe le slug en argument de l'article à la fonction findArticle
  // (codée dans le selectors correspondant) pour récupérer l'article à afficher

  const article = findArticle(articles, slug);
  // console.log(article);

  // Fonction permettant d'afficher 5 article en fonction du display order

  const listArticle = findFiveArticles(articles);
  // console.log(listArticle);

  // Handler champ controlé de l'input cart
  function handleNbArticleInCart(event) {
    dispatch(setNbArticleInCart(event.target.value));
  }

  // Handlers pour incrémenter le compteur du panier & de l'achat immédiat
  function handleAddCart() {
    dispatch(setAddArticleInCart());
  }
  function handleAddBuy() {
    dispatch(setAddArticleToBuy());
  }

  // Handler pour décrémenter le Panier
  function handleLessCart() {
    dispatch(setLessArticleInCart());
  }
  function handleLessBuy() {
    dispatch(setLessArticleToBuy());
  }
  const favoriteArticles = useSelector((state) => state.user.user.favorites);
  const favoriteArray = favoriteArticles.map((favorite) => (favorite.article.id));
  const isFavorite = favoriteArray.includes(article.id);

  // Handler pour champ controllé d'achat immédiats
  function handleNbArticleToBuy(event) {
    dispatch(setNbArticleToBuy(event.target.value));
  }
  // Handler pour l'ajout d'un article au favoris
  function handleAddFavorite() {
    if (!isFavorite) {
      dispatch(addArticleToFavorite(article));
      dispatch(addArticleToFavoriteBdd());
    }
    else console.log('Vous avez deja ce favoris');
  }

  // Si l'id rentré dans l'url ne match pas avec un article
  // en BDD on fait une redirection vers une 404
  if (!article) {
    return <Navigate to="/error" replace />;
  }

  if (counterCart < 0) {
    dispatch(setNotNull());
  }

  if (counterBuy < 0) {
    dispatch(setNotNullBuy());
  }

  // ________________________________________________________________ //
  // ________________________________________________________________ //
  // __________________________ Panier_______________________________ //
  function handleAddArticleCart() {
    localStorage.setItem(article.name, JSON.stringify(article));
    console.log(article.name);
    dispatch(setArticleInCart(article.name));
  }

  return (
    <div className="article">
      {/* Article */}
      <section className="article--container">
        <div className="article--container__img">
          <img className="article--container__img--art" src={article.picture} alt={`illustration ${article.name}`} />
        </div>
        <div className="article--container__details">
          <div className="article--container__details--box">
            <h2 className="article--container__details--box__title">{article.name}</h2>
            <div>
              <a className="article--container__details--box__notation" href="#">Notes :</a>
              <Rating className="article--container__details--box__rate" icon="star" defaultRating={article.rating} maxRating={5} size="tiny" />
            </div>
          </div>

          <div className="box">
            <Link className="box__tag" to={`/categories/${article.category.name}`}> {article.category.name} </Link>
            <Link className="box__tag" to="#"> {article.brand.name} </Link>
          </div>
          <p className="article--container__details--description">
            {article.description}
            <span> Prix : {article.price} € </span>
            <span> Stock : {article.stock} U </span>
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
          <button
            type="submit"
            className="article--container__cart--favorite"
            onClick={handleAddFavorite}
          >
            Ajouter aux favoris
          </button>

        </div>
      </section>

      {/* Slider */}
      <section className="slider--container">
        {listArticle.map((itemArticle) => <ListArticle key={itemArticle.id} {...itemArticle} />)}

      </section>

      {/* Avis */}

      <section className="avis--container">
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
      </section>
    </div>
  );
}

export default Article;
