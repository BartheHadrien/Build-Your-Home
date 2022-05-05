import './styles.scss';
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
          // On map sur la liste des articles récupéré depuis le state.
          // On passe en props les données nécessaire au composant CardArticle.
          <CardArticle key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
}

export default Home;
