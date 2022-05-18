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
      <h1>Error 404</h1>
      <p>Cette page n'existe pas.</p>
      <p>Reformulez votre recherche ou allez sur <Link to="/">la page d'acceuil de Build Your Home</Link>.</p>
    </div>
  );
}

export default Error;
