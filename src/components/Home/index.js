// npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './styles.scss';
import desktop from 'src/assets/images/desktop.svg';
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';
import { fetchCategories } from '../../actions/categories';

function Home() {
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
        {
          // Boucle avec la méthode map sur le tableau de catégorie récupéré qui va afficher les
          // chaque catégorie via le composant enfant CardCategory
          categoriesToDisplay.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)
        }
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
