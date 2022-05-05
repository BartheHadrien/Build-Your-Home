import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';

function Home() {
  return (
    <div className="home">
      <section className="home__categories">
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
        <div className="home__categories__category">
          <p>Catégorie</p>
          <img src={desktop} alt={desktop} className="home__categories__category__picture" />
        </div>
      </section>
      <section className="home__articles">
        <div className="home__articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="home__articles__article__picture" />
        </div>
        <div className="home__articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="home__articles__article__picture" />
        </div>
        <div className="home__articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="home__articles__article__picture" />
        </div>
        <div className="home__articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="home__articles__article__picture" />
        </div>
        <div className="home__articles__article">
          <p>Article</p>
          <img src={desktop} alt={desktop} className="home__articles__article__picture" />
        </div>
      </section>
    </div>
  );
}

export default Home;
