import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function Carts() {
  return (
    <>
      <div className="carts">

        <section className="carts__content">
          <div className="carts__content__head">
            <h2 className="carts__content__head__title">Votre panier</h2>
            <span className="carts__content__head__price">Prix</span>
          </div>
          <div className="carts__content__article">
            <img src={desktop} alt={desktop} className="carts__content__article__picture" />
            <p className="carts__content__article__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit molestiae
            </p>
            <span className="carts__content__article__value">50$</span>
            <span className="carts__content__article__stock">En stock</span>
            <mark className="carts__content__article__quantity">Quantité : XX</mark>
            <span className="carts__content__article__delete">Supprimer</span>
          </div>
          <div className="carts__content__article">
            <img src={desktop} alt={desktop} className="carts__content__article__picture" />
            <p className="carts__content__article__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit molestiae
            </p>
            <span className="carts__content__article__value">50$</span>
            <span className="carts__content__article__stock">En stock</span>
            <mark className="carts__content__article__quantity">Quantité : XX</mark>
            <span className="carts__content__article__delete">Supprimer</span>
          </div>
          <span className="carts__content__article__total">Sous-total (X article) : XX$</span>
        </section>

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

      <section className="articles">
        <div className="articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles__article__picture" />
        </div>
        <div className="articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles__article__picture" />
        </div>
        <div className="articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles__article__picture" />
        </div>
        <div className="articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles__article__picture" />
        </div>
        <div className="articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles__article__picture" />
        </div>
      </section>
    </>
  );
}

export default Carts;
