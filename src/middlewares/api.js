// ==============================================
// ==================Import======================
// ==============================================

// ================Dépendances===================
import axios from 'axios';

// ===================Actions====================
import { FETCH_ARTICLES, saveArticles } from '../actions/article';
import { ADD_CART_TO_ORDER_BDD } from '../actions/cart';
import { FETCH_CATEGORIES, saveCategories } from '../actions/categories';
import {
  fetchUser, FETCH_USER, saveUser, saveUserData, LOGIN, LOGOUT,
  CREATE_USER, DELETE_USER, ADD_ARTICLE_TO_FAVORITE_BDD,
  DELETE_ARTICLE_TO_FAVORITE_IN_BDD, login, MODIFY_PROFILE,
  setLoginUnknown, resetLoginUnknown,
} from '../actions/user';

// On défini une instance
const axiosInstance = axios.create({
  // URL de base :
  baseURL: 'http://floriannaud-server.eddi.cloud/projet-09-build-your-home-back/public/api/',

});

// On défini notre MiddleWare qui va intercepter nos actions
// Pour cela, on l'a branché sur le store (src/store/index.js)
const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // Action qui va récupérer nos articles depuis l'API avec axios
    case FETCH_ARTICLES:
      // on la traduit par un appel en GET à l'API
      axiosInstance
        .get('articles')
        .then(
          // Lorsque l'api nous renvoie les articles
          (response) => {
            // on demande au store de les enregistrer
            // on dispatche donc une action (de type SAVE_ARTICLES)
            // avec les articles à sauver en payload
            store.dispatch(saveArticles(response.data));
          },
        );
      next(action);
      break;

    // Action qui va récupérer les catégories
    case FETCH_CATEGORIES:
      // on la traduit par un appel en GET à l'API
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
        );
      next(action);
      break;

    // Action qui va férer la connexion utilisateur
    case LOGIN: {
      // Triple destructuration pour récupérer l'email et le password rentrés par l'utilisateur
      // depuis notre store
      const { user: { login: { email, password } } } = store.getState();
      // on la traduit par un appel en POST à l'API
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
          // Si l'utilisateur n'est pas en BDD, alors on passe la propriété
          // userUnknown à true
          store.dispatch(setLoginUnknown());
        });
      next(action);
      break;
    }
    // Action qui va gérer la déconnexion d'un utilisateur
    case LOGOUT:
      // on nettoie notre instance axios du token
      axiosInstance.defaults.headers.common.Authorization = null;
      // syntaxe alternative
      // delete axiosInstance.defaults.headers.common.Authorization;

      console.log('nettoyage du token');

      // A la déconnexion on passe la propriété
      // userUnknown à false
      store.dispatch(resetLoginUnknown());

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

            user: id,
            article: newfavorites.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          store.dispatch(fetchUser()),
        )
        .catch(() => console.log('Vous l\'avez deja en favoris'));
      next(action);
      break;
    }
    case ADD_CART_TO_ORDER_BDD: {
      const { user: { user: { id, token } } } = store.getState();
      const { cart: { cart: { orderlist } } } = store.getState();
      const datatoapi = orderlist.map((item) => {
        let data = {};
        data = { article: item.articleID, quantity: item.quantity };
        return data;
      });

      console.log('datatoapi', datatoapi);
      axiosInstance
        .post(
          'order/add',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            status: 0,
            user: id,
            deliveries: 11,
            orderlists: datatoapi,
          },
        )
        .then(
          store.dispatch(fetchUser()),
        )
        .catch(() => console.log('commande non envoyé'));
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
            birthdate: birthdate,
            email: email,
            password: password,
            phone: phone,
          },

        )
        .then(
          () => {
            store.dispatch(login());
          },
        )
        .catch(() => console.log('Utilisateur non créé'));
      next(action);
      break;
    }
    case MODIFY_PROFILE: {
      const { user: { user: { id, token, email } } } = store.getState();
      const {
        user: {
          profile: {
            lastname, firstname, adress, birthdate, phone,
          },
        },
      } = store.getState();
      axiosInstance
        .patch(
          `user/${id}`,
          {
            lastname: lastname,
            firstname: firstname,
            adress: adress,
            birthdate: birthdate,
            email: email,
            phone: phone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // `Bearer ${token}`
            },
          },
        )
        .then(
          (response) => {
            store.dispatch(saveUserData(response.data));
          },
        )
        .catch(() => console.log('echec lors de la modification'));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
