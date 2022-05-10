import { useSelector } from 'react-redux';
import CardArticle from '../CardArticle';
import './styles.scss';

function Favorites() {
  const favorites = useSelector((state) => state.user.user.favorites);

  return (
    <div className="favorites">
      <h1 className="favorites--title">Votre liste de favoris</h1>
      <section className="favorites--articles">
        {
        favorites.map((favorite) => <CardArticle key={favorite.id} {...favorite.article} />)
        }
      </section>
    </div>
  );
}

export default Favorites;
