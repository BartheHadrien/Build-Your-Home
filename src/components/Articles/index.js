import './styles.scss';
import CardArticle from 'src/components/CardArticle';

import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

function Articles() {
  // On utilise le Hook useParams pour récupérer le slug de l'URL courante
  const { slug } = useParams();

  // On sélectionne les articles dans le state
  const articles = useSelector((state) => state.article.list);

  // On filtre le articles correspondant au slug de l'URL
  const articlesToDisplay = articles.filter((article) => article.category.name === slug);
  console.log(articlesToDisplay);

  if (articlesToDisplay.map((item) => item.slug) == !slug) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="articles">
      <h1 className="articles--title">{slug}</h1>
      <section className="articles--articles">
        {articlesToDisplay.map((article) => <CardArticle key={article.id} {...article} />)}
      </section>
    </div>
  );
}

export default Articles;
