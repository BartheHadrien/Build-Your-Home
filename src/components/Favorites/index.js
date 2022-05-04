import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function Favorites() {
  return (
    <div className="favorites">
      <h1 className="favorites--title">Votre liste de favoris</h1>
      <section className="favorites--articles">
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
        <div className="favorites--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="favorites--article__picture" />
        </div>
      </section>
    </div>
  );
}

export default Favorites;
