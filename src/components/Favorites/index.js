// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector } from 'react-redux';

// ==================Composant===================
import CardFavorite from './CardFavorite';

// ==================Style&IMG===================
import './styles.scss';

function Favorites() {
  // On récupère les articles favoris de l'utilisateur
  const favorites = useSelector((state) => state.user.user.favorites);

  return (
    <div className="favorites">
      <h1 className="favorites--title">Votre liste de favoris</h1>
      <section className="favorites--articles">
        {favorites.map((favorite) => (
          <CardFavorite
            key={favorite.id}
            favID={favorite.id}
            {...favorite.article}
          />
        ))}
      </section>
    </div>
  );
}

export default Favorites;
