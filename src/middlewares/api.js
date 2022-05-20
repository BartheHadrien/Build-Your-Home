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
    // =============================================================
    // ====================== USER =================================

    // Action qui créé un utilisateur
    case CREATE_USER: {
      // On déstructure pour récupérer les données de l'utilisateur
      const {
        user: {
          signup: {
            firstname, lastname, birthdate, phone, adress, email, password,
          },
        },
      } = store.getState();

      // on la traduit par un appel en POST à l'API
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
            // On réexecute l'action login
            store.dispatch(login());
          },
        );
      next(action);
      break;
    }

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

      // A la déconnexion on passe la propriété
      // userUnknown à false
      store.dispatch(resetLoginUnknown());

      next(action);
      break;

      // Action qui va récupérer les données d'un utilisateur
    case FETCH_USER: {
      const { user: { user: { token } } } = store.getState();

      // on la traduit par un appel en GET à l'API
      axiosInstance
        .get(
          'user/profile',
          // On envoie le token dans un header avec la requête
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          (response) => {
            // L'api renvoie les données d'un user
            // On demande la sauvegarde de nos données
            // via l'action saveUserData
            console.log('response.data', response.data);
            store.dispatch(saveUserData(response.data));
          },
        );
      next(action);
      break;
    }

    // Action qui va gérer la modification d'un profil
    case MODIFY_PROFILE: {
      // On déstrucuture pour récupérer les données utilisateur
      const { user: { user: { id, token, email } } } = store.getState();
      // On récupère les nouvelle données
      const {
        user: {
          profile: {
            lastname, firstname, adress, birthdate, phone,
          },
        },
      } = store.getState();

      // on la traduit par un appel en PATCH à l'API
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
            // On exécute l'action saveUserData afin de sauvegarder les données
            store.dispatch(saveUserData(response.data));
          },
        );
      next(action);
      break;
    }

    // Action qui va supprimer un utilisateur en BDD
    case DELETE_USER: {
      // On détructure pour récupérer l'id et le token de l'utilisateur
      const { user: { user: { id, token } } } = store.getState();

      // on la traduit par un appel en DELETE à l'API
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

    // =============================================================
    // ====================== Articles =============================

    // Action qui va récupérer nos articles depuis l'API avec axios
    case FETCH_ARTICLES: {
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
    }

    // Action qui va ajouter un article favoris en BDD
    case ADD_ARTICLE_TO_FAVORITE_BDD: {
      // On déstructure pour récupérer l'id et token de l'utilisateur
      // ainsi que l'article à mettre en favoris
      const { user: { user: { id, token, newfavorites } } } = store.getState();

      // on la traduit par un appel en POST à l'API
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
          // On réexécute l'action fetchUser
          store.dispatch(fetchUser()),
        );
      next(action);
      break;
    }

    // Action qui va supprimer les articles favoris en BDD
    case DELETE_ARTICLE_TO_FAVORITE_IN_BDD: {
      // On déstructure pour récupérer le token utilisateur et le favoris à supprimer
      const { user: { user: { token, deletefavorites } } } = store.getState();

      // on la traduit par un appel en DELETE à l'API
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
          // On réexécute l'action fetchUser
          store.dispatch(fetchUser()),
        );
      next(action);
      break;
    }

    // =============================================================
    // ====================== Catégories ===========================

    // Action qui va récupérer les catégories
    case FETCH_CATEGORIES: {
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
    }

    // =============================================================
    // ======================== Panier =============================

    // Action qui va ajouter une commande en BDD
    case ADD_CART_TO_ORDER_BDD: {
      // On déstructure pour récupérer l'id et token utilisateur
      const { user: { user: { id, token } } } = store.getState();
      // On récupère la commande
      const { cart: { cart: { orderlist } } } = store.getState();

      // On stocke dans une constante les articles à ajouter
      // en récupérant l'id et quantité
      const datatoapi = orderlist.map((item) => {
        let data = {};
        data = { article: item.articleID, quantity: item.quantity };
        return data;
      });

      // on la traduit par un appel en POST à l'API
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
          // On réexécute l'action fetchUser
          store.dispatch(fetchUser()),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
