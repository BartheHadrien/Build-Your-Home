// npm
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';

function Home() {
  const categories = useSelector((state) => state.categories.categories);

  const filteredCategories = () => {
    console.log('filteredCategories');
  };
  // console.log(filteredCategories);
  console.log(categories);
  return (
    <div className="home">
      <section className="home__categories">
        {categories.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)}
        <CardCategory />
        <CardCategory />
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
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
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
