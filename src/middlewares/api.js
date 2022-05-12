import axios from 'axios';
import { FETCH_ARTICLES, saveArticles } from '../actions/article';
import { FETCH_CATEGORIES, saveCategories } from '../actions/categories';
import {
  fetchUser, FETCH_USER, saveUser, saveUserData, LOGIN, LOGOUT,
  CREATE_USER, DELETE_USER, ADD_ARTICLE_TO_FAVORITE_BDD, DELETE_ARTICLE_TO_FAVORITE, DELETE_ARTICLE_TO_FAVORITE_IN_BDD, setEmailInLogin,
} from '../actions/user';

// On utilisera aisinsi cette instance plutôt qu'axios directement
const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/api/',
  // benoitthaon     floriannaud
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
      // Triple destructuration
      const { user: { login: { email, password } } } = store.getState();
      axiosInstance
        .post(
          'login_check',
          {
            username: email,
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

          // on peut demander la récupération du user
          // immédiatement après s'être loggé
          store.dispatch(fetchUser());
        })
        .catch(() => {
          console.log('oups');
        });
      next(action);
      break;
    }
    case LOGOUT:
      // on nettoie notre instance axios du token
      axiosInstance.defaults.headers.common.Authorization = null;
      // syntaxe alternative
      // delete axiosInstance.defaults.headers.common.Authorization;

      console.log('nettoyage du token');

      next(action);
      break;
    case FETCH_USER: {
      const { user: { user: { token } } } = store.getState();

      axiosInstance
        .get(
          'user/profile',
          // on envoie le token dans un header avec la requête
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          (response) => {
            // l'api me répond en me renvoyant les données d'un user
            // on demande la sauvegarde de nos données
            store.dispatch(saveUserData(response.data));
          },
        )
        .catch(() => console.log('Je ne récupére pas les info d\'un user'));
      next(action);
      break;
    }
    case DELETE_USER: {
      const { user: { user: { id, token } } } = store.getState();
      axiosInstance
        .delete(
          `user/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      next(action);
      break;
    }
    case DELETE_ARTICLE_TO_FAVORITE_IN_BDD: {
      const { user: { user: { token, deletefavorites } } } = store.getState();
      axiosInstance
        .delete(
          `favorite/${deletefavorites}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          store.dispatch(fetchUser()),
        );
      next(action);
      break;
    }
    case ADD_ARTICLE_TO_FAVORITE_BDD: {
      const { user: { user: { id, token, newfavorites } } } = store.getState();
      axiosInstance
        .post(
          'favorite/add',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            user: id,
            article: newfavorites.id,
          },
        )
        .then(
          store.dispatch(fetchUser()),
        )
        .catch(() => console.log('Vous l\'avez deja en favoris'));
      next(action);
      break;
    }

    case CREATE_USER: {
      const {
        user: {
          signup: {
            firstname, lastname, birthdate, phone, adress, email, password,
          },
        },
      } = store.getState();

      axiosInstance
        .post(
          'user/add',
          {
            lastname: lastname,
            firstname: firstname,
            adress: adress,
            birthdate: '2022-05-11T13:36:19.797Z',
            email: email,
            password: password,
            phone: phone,
          },

        )
        .then(
          (response) => {
            store.dispatch(saveUserData(response.data));
            console.log(response.data);
          },
        )
        .catch(() => console.log('Utilisateur non créé'));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
