// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Link } from 'react-router-dom';

// ==================Style&IMG===================
import './styles.scss';

function Error() {
  return (
    <div className="error">
      <div className="box">
        <div className="box__ghost">
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />

          <div className="box__ghost-container">
            <div className="box__ghost-eyes">
              <div className="box__eye-left" />
              <div className="box__eye-right" />
            </div>
            <div className="box__ghost-bottom">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="box__ghost-shadow" />
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Whoops!</div>
            <div className="box__description-text">La page demandée n'existe pas</div>
          </div>
          <Link to="/" target="_blank">
            <p className="box__button">Go home</p>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Error;
