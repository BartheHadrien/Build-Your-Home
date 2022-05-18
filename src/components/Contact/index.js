// ==============================================
// ==================Import======================
// ==============================================

// ==================Style&IMG===================
import './styles.scss';

function Contacts() {
  return (
    <div className="contact">
      <section className="contact--left">
        <h1 className="contact--left__title"> Une question, un besoin, un projet ?</h1>
        <h2 className="contact--left__subtitle"> Contactez-nous, nos conseillers vous répondent !</h2>
        <div className="contact--left__container">
          <div className="contact--left__card">
            <h1 className="contact--left__card__title">Prénom Nom</h1>
            <p className="contact--left__card__text">
              02 98 02 02 02
              <br />
              Rue de la paix
              <br />
              75000 Paris
            </p>
          </div>
          <div className="contact--left__card">
            <h1 className="contact--left__card__title">Prénom Nom</h1>
            <p className="contact--left__card__text">
              02 98 02 02 02
              <br />
              Rue de la paix
              <br />
              75000 Paris
            </p>
          </div>
        </div>

      </section>
      <section className="contact--right">
        <div className="contact--right--container">
          <h1 className="contact--right--container__title">Demande d'information</h1>
          <form className="contact--right--container__form">
            <input
              className="contact--right--container__form__input"
              type="text"
              placeholder="Nom et Prénom"
            />
            <input
              className="contact--right--container__form__input"
              type="text"
              placeholder="Email"
            />
            <input
              className="contact--right--container__form__input"
              type="text"
              placeholder="Téléphone"
            />
            <textarea
              className="contact--right--container__form__input"
              type="text"
              placeholder="Commentaire"
            />
            <button
              type="submit"
              className="contact--right--container__form__submit"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
