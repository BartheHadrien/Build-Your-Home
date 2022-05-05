// import style
import './styles.scss';

// import semantic ui

import { Rating } from 'semantic-ui-react';

// import image
import user from 'src/assets/images/user.svg';

import keyboard from 'src/assets/images/keyboard.svg';

function Article() {
  return (
    <div className="article">
      {/* Article */}
      <section className="article--container">
        <div className="article--container__img">
          <img className="article--container__img--art" src={keyboard} alt="illustration souris" />
        </div>
        <div className="article--container__details">
          <div className="article--container__details--box">
            <h2 className="article--container__details--box__title">Title</h2>
            <div>
              <a className="article--container__details--box__notation" href="#">Notes :</a>
              <Rating className="article--container__details--box__rate" icon="star" defaultRating={3} maxRating={4} />
            </div>
          </div>

          <div className="box">
            <strong> Tag </strong>
            <strong> Tag </strong>
          </div>
          <p className="article--container__details--description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, consectetur iusto impedit dolore velit natus
            molestias ab eos tempore eius aliquid, qui possimus, mollitia
            delectus maxime ex doloremque.
            <span> Prix : XX € </span>
            <span> Livraison : XX € </span>
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
