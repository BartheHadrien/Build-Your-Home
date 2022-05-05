import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';
import { useSelector } from 'react-redux';
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';

function Home() {
  const articles = useSelector((state) => state.article.list);
  return (
    <div className="home">
      <section className="home__categories">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />

      </section>
      <section className="home__articles">
        {articles.map((article) => (
          <CardArticle key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
}

export default Home;
