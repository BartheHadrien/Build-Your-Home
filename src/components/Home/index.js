// Import
import { useSelector } from 'react-redux';

// Styles
import './styles.scss';

// Components
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';

function Home() {
  // ________________________________________________________________ //
  // _______________________ Categories_____________________________ //
  // Selection des catégorie récupérée dans le state
  const categories = useSelector((state) => state.categories.list);
  // console.log(categories);

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.displayOrder < 10 && categorie.displayOrder > 0);
    return filteredCategorie;
  };
  console.log(filteredCategories());

  // Stockage de la fonction de filtre dans une constante pour pouvoir l'utiliser
  const categoriesToDisplay = filteredCategories();

  // ________________________________________________________________ //
  // __________________________ Articles_____________________________ //

  // Selection des artciles récupérée dans le state
  const articles = useSelector((state) => state.article.list);

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredArticles = () => {
    const filteredArticle = articles.filter((article) => article.displayOrder < 6 && article.displayOrder > 0);
    return filteredArticle;
  };
  // console.log(filteredArticles());

  // Stockage de la fonction de filtre dans une constante pour pouvoir l'utiliser
  const articlesToDisplay = filteredArticles();

  // ________________________________________________________________ //

  return (

    <div className="home">
      <section className="home__categories">

        {
          // Boucle avec la méthode map sur le tableau de catégorie récupéré qui va afficher les
          // chaque catégorie via le composant enfant CardCategory
          categoriesToDisplay.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)
        }

      </section>

      <section className="home__articles">

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
