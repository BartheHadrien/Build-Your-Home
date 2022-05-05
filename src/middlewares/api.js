import axios from 'axios';
import { FETCH_ARTICLES, saveArticles } from '../actions/article';
import { FETCH_CATEGORIES, saveCategories } from '../actions/categories';

// pour que ce middleware puisse intercepter les actions,
// il faut qu'il soit brancher sur le store -> src/store/index.js
const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      // on la traduit par un appel à l'API
      axios
        .get('http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/api/articles')
        .then(
          // lorsque l'api nous renvoie les articles
          (response) => {
            // on demande au store de les enregistrer
            // on dispatche donc une action (de type SAVE_ARTICLES)
            // avec les articles à sauver en payload
            store.dispatch(saveArticles(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    case FETCH_CATEGORIES:
      // on la traduit par un appel à l'API
      axios
        .get('http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/api/categories')
        .then(
          // lorsque l'api nous renvoie les catégories
          (response) => {
            // on demande au store de les enregistrer
            // on dispatche donc une action (de type SAVE_CATEGORIES)
            // avec les catégories à sauver en payload
            console.log('test de ma requete');
            store.dispatch(saveCategories(response.data));
          },
        )
        .catch(
          () => console.log('Erreur lors de la requete FETCH_CATEGORIES'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};

export default apiMiddleWare;
