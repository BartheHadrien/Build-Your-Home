import axios from 'axios';
import { FETCH_ARTICLES, saveArticles } from '../actions/article';


import { FETCH_CATEGORIES, saveCategories } from '../actions/categories';
import { LOGIN } from '../actions/user';

// On utilisera aisinsi cette instance plutôt qu'axios directement
const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/api/',
});



// pour que ce middleware puisse intercepter les actions,
// il faut qu'il soit brancher sur le store -> src/store/index.js
const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      // on la traduit par un appel à l'API
      axiosInstance
        .get('articles')
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
      axiosInstance
        .get('categories')
        .then(
          // lorsque l'api nous renvoie les catégories
          (response) => {
            // on demande au store de les enregistrer
            // on dispatche donc une action (de type SAVE_CATEGORIES)
            // avec les catégories à sauver en payload
            store.dispatch(saveCategories(response.data));
          },
        )
        .catch(
          () => console.log('Erreur lors de la requete FETCH_CATEGORIES'),
        );
      next(action);
      break;

    case LOGIN: {
      // double destructuration
      const { user: { email, password } } = store.getState();

      axiosInstance
        .post(
          'login',
          {
            email,
            password,
          },
        )
        .then((response) => {
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une vaiable user
          const { data: user } = response;

          // j'enregistre mon token sur l'instance d'axios
          axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;

          // on demande la sauvegarde de ce user
          store.dispatch(saveUser(user));

          // équivalent à :
          // store.dispatch(saveUser(response.data));

          // on peut demander la récupération des favoris
          // immédiatement après s'être loggé
          store.dispatch(fetchFavorites());
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleWare;
