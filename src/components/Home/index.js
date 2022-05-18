// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { useSelector } from 'react-redux';

// ==================Composant===================
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';

// ==================Style&IMG===================
import './styles.scss';

function Home() {
  // ==================HOOK===================
  const categories = useSelector((state) => state.categories.list);
  const articles = useSelector((state) => state.article.list);

  // ==================Fonctions================
  // filtre le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.displayOrder < 10
    && categorie.displayOrder > 0);
    return filteredCategorie;
  };
  const categoriesToDisplay = filteredCategories();

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredArticles = () => {
    const filteredArticle = articles.filter((article) => article.displayOrder < 6
    && article.displayOrder > 0);
    return filteredArticle;
  };
  const articlesToDisplay = filteredArticles();

  return (
    <div className="home">
      <section className="home__categories">
        <h2 className="home__categories--title">Catégories</h2>
        {
          // Map sur le tableau de catégorie récupéré qui va afficher les
          // catégorie via le composant enfant CardCategory
          categoriesToDisplay.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)
        }
      </section>
      <section className="home__articles">
        <h2 className="home__articles--title">Articles</h2>
        {articlesToDisplay.map((article) => (
          // On map sur la liste des articles récupéré depuis le state.
          // On passe en props les données nécessaire au composant CardArticle.
          <CardArticle key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
}

export default Home;
