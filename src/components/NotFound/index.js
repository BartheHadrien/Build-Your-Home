// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================

// ==================Style&IMG===================
import './styles.scss';
import notfound from 'src/assets/images/notFound.png';

function NotFound() {
  return (
    <div className="enter">
      <div className="notfound">
        <h1 className="notfound--title">Pas d'articles disponibles</h1>

        <img className="notfound--img" src={notfound} alt={notfound} />

        <p className="notfound--description">En cours d'approvisionnement</p>

      </div>
    </div>
  );
}

export default NotFound;
