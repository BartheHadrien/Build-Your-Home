// import npm
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

function Article() {
  // useParams permet d'extraire les paramètres d'url dynamique
  // ici on s'en sert pour récupérer l'id de l'article à afficher
  const { id } = useParams();

  // On passe l'id en argument de l'article à la fonction findRecipes
  // (codée dans le selectors correspondant) pour récupérer l'article à afficher
  const articles = useSelector((state) => state.article.list);
  console.log(articles);

  const article = findArticle(articles, id);
  console.log(article);

  const listArticle = findFiveArticles(articles);
  console.log(listArticle);

  // Si l'id rentré dans l'url ne match pas avec un article
  // en BDD on fait une redirection vers une 404
  if (!article) {
    return <Navigate to="/error" replace />;
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
            <strong> {article.category.name} </strong>
            <strong> {article.brand.name} </strong>
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
            >
              -
            </button>
            <input type="number" className="article--container__cart--add__counter" />

            <button
              type="button"
              className="article--container__cart--add__click"
            >
              +
            </button>
            <button
              type="submit"
              className="article--container__cart--add__cart"
            >
              Ajouter au panier
            </button>

          </div>

          {/* Counter Buy */}
          <div className="article--container__cart--buy">
            <button
              type="button"
              className="article--container__cart--buy__click"
            >
              -
            </button>
            <input type="number" className="article--container__cart--buy__counter" />

            <button
              type="button"
              className="article--container__cart--buy__click"
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
          >
            Ajouter aux favoris
          </button>

        </div>
      </section>

      {/* Slider */}
      <section className="slider--container">
        {listArticle.map((itemArticle) => <ListArticle key={itemArticle.id} {...itemArticle} />)}

        {/* <div className="slider--container__box">
          <img className="slider--container__box--img" src={keyboard} alt="slider" />
          <h3 className="slider--container__box--title">Title</h3>
          <span className="slider--container__box--description">Description de l'article</span>
        </div>
        <div className="slider--container__box">
          <img className="slider--container__box--img" src={keyboard} alt="slider" />
          <h3 className="slider--container__box--title">Title</h3>
          <span className="slider--container__box--description">Description de l'article</span>
        </div>
        <div className="slider--container__box">
          <img className="slider--container__box--img" src={keyboard} alt="slider" />
          <h3 className="slider--container__box--title">Title</h3>
          <span className="slider--container__box--description">Description de l'article</span>
        </div>
        <div className="slider--container__box">
          <img className="slider--container__box--img" src={keyboard} alt="slider" />
          <h3 className="slider--container__box--title">Title</h3>
          <span className="slider--container__box--description">Description de l'article</span>
        </div> */}
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
