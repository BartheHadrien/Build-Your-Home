import './styles.scss';

function Contacts() {
  return (
    <div className="contact">
      <section className="contact--left">
        <h1 className="contact--left__title"> Une question, un besoin, un projet ?</h1>
        <h2 className="contact--left__subtitle"> Contactez-nous, nos conseillers vous répondent !</h2>
        <div className="contact--left__container">
          <h1 className="contact--left__container__title">Damien Savary</h1>
          <p className="contact--left__container__text">02 98 02 02 02 </p>
        </div>
      </section>
      <section className="contact--right">
        <div className="contact--right--container">
          <h1 className="contact--right--container__title">Demande d'information</h1>
          <form className="contact--right--container__form">
            <input
              className="login--field__input"
              type="email"
              id="email"
            />
            <input
              className="login--field__input"
              type="password"
              id="password"
            />
            <button
              type="submit"
              className="login--button__submit"
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
