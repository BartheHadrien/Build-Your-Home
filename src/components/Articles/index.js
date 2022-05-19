/* eslint-disable no-else-return */
// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

// ==================Composant===================
import CardArticle from 'src/components/CardArticle';

// ==================Style&IMG===================
import './styles.scss';

function Articles() {
  // ==================HOOK===================
  // On utilise le Hook useParams pour récupérer le slug de l'URL courante
  const { slug } = useParams();

  // On sélectionne les articles dans le state
  const articles = useSelector((state) => state.article.list);

  const categories = useSelector((state) => state.categories.list);

  const existCategory = categories.map((item) => item.name);

  const existCategoryContain = existCategory.includes(slug);

  // On filtre le articles correspondant au slug de l'URL
  const articlesToDisplay = articles.filter((article) => article.category.name === slug);

  // Si l'article n'est pas trouvé alors on redirige vers la page erreur
  if (existCategoryContain === true && articlesToDisplay.length === 0) {
    return <Navigate to="/not-found" replace />;
  }
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
