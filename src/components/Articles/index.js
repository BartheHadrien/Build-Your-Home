import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function Articles() {
  return (
    <div className="articles">
      <h1 className="articles--title">Catégorie</h1>
      <section className="articles--articles">
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
          <p>Price</p>
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
        <div className="articles--article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="articles--article__picture" />
        </div>
      </section>
    </div>
  );
}

export default Articles;
