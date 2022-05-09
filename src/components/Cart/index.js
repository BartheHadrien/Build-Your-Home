// Import
import { useSelector } from 'react-redux';

// Actions
import { findFiveArticles } from '../../selectors/article';

// Styles
import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';
import deleteCart from 'src/assets/images/delete.svg';
import add from 'src/assets/images/add.svg';

// Components
import CardArticle from 'src/components/CardArticle';

function Carts() {
  // ________________________________________________________________ //
  // __________________________ Articles_____________________________ //

  // Selection des artciles récupérée dans le state
  const articles = useSelector((state) => state.article.list);

  // Stockage dans une constante de 5 articles à afficher
  const articlesToDisplay = findFiveArticles(articles);

  // ________________________________________________________________ //
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
          <div className="carts__article">
            <img src={desktop} alt={desktop} className="carts__article__picture" />
            <p className="carts__article__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit molestiae
            </p>
            <span className="carts__article__value">50$</span>

            <span className="carts__article__avalaible">En stock</span>

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
          {/* Content of article */}
          <div className="carts__article">
            <img src={desktop} alt={desktop} className="carts__article__picture" />
            <p className="carts__article__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit molestiae
            </p>
            <span className="carts__article__value">50$</span>

            <span className="carts__article__avalaible">En stock</span>

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
          <span className="carts__article__total">Sous-total (X article) : XX$</span>
        </section>

        {/* Content of payment section */}
        <section className="carts__pay">
          <p className="carts__pay__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, qui possimus, mollitia
            delectus maxime ex doloremque.
          </p>
          <p className="carts__pay__total">Sous-total (X article) : XX$</p>
          <button type="button" className="carts__pay__button">Passer la commande</button>
          <button type="button" className="carts__pay__button">Continuez vos achats</button>
        </section>
      </div>
      {/* Content of article to display */}
      {articlesToDisplay.map((article) => <CardArticle {...article} key={article.id} />)}

    </>
  );
}

export default Carts;
