import './styles.scss';
import { Link } from 'react-router-dom';

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
