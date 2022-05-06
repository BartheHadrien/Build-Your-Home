// npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './styles.scss';
import { useSelector } from 'react-redux';
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';
import { fetchCategories } from '../../actions/categories';

function Home() {

  const articles = useSelector((state) => state.article.list);

  const dispatch = useDispatch();

  // Selection des catégorie récupérée dans le state
  const categories = useSelector((state) => state.categories.list);
  // console.log(categories);

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.id < 10);
    return filteredCategorie;
  };
  // console.log(filteredCategories());

  // Stockage de la fonction de filtre dans une constante pour pouvoir l'utiliser
  const categoriesToDisplay = filteredCategories();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


  return (

    <div className="home">
      <section className="home__categories">

        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />


        {
          // Boucle avec la méthode map sur le tableau de catégorie récupéré qui va afficher les
          // chaque catégorie via le composant enfant CardCategory
          categoriesToDisplay.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)
        }

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
