// ==============================================
// ================Import Actions================
// ==============================================
import {
  SET_EMAIL_IN_LOGIN, SET_PASSWORD_IN_LOGIN, SAVE_USER, SAVE_USER_DATA,
  SET_FIRSTNAME_IN_SIGNUP, SET_LASTNAME_IN_SIGNUP, SET_BIRTHDATE_IN_SIGNUP,
  SET_PHONE_IN_SIGNUP, SET_ADRESS_IN_SIGNUP, SET_EMAIL_IN_SIGNUP,
  SET_PASSWORD_IN_SIGNUP, SET_CONFIRM_PASSWORD_IN_SIGNUP, LOGOUT,
  PASSWORD_ERROR, VALIDATE_CAPTCHA,
  ADD_ARTICLE_TO_FAVORITE, DELETE_ARTICLE_TO_FAVORITE,
  SET_FIRSTNAME_IN_PROFILE, SET_LASTNAME_IN_PROFILE,
  SET_BIRTHDATE_IN_PROFILE, SET_PHONE_IN_PROFILE, SET_ADRESS_IN_PROFILE,
  SET_LOGIN_UNKNOWN, RESET_LOGIN_UNKNOWN, SAVE_CAPTCHA_TOKEN,

} from '../actions/user';

// ===============================================
// ===================InitialState================

const initialState = {
  login: {
    email: 'admin@admin.com',
    password: 'admin',
    isVerified: false,
    captchaToken: '',
  },
  signup: {
    firstname: '',
    lastname: '',
    birthdate: '',
    phone: '',
    adress: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  user: {
    id: null,
    firstname: '',
    lastname: '',
    adress: '',
    birthdate: '',
    email: '',
    phone: '',
    roles: [],
    orders: [],
    favorites: [],
    newfavorites: [],
    deletefavorites: null,
    comments: [],
    token: '',
    logged: false,
  },
  profile: {
    firstname: '',
    lastname: '',
    adress: '',
    birthdate: '',
    phone: '',
  },
  passwordIsFalse: false,
  userUnknown: false,
};

// ==========================================
// ==================Reducer=================
// ==========================================

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Sauvegarde des utilisateurs dans le state
    case SAVE_USER:
      return {
        // Copie du state
        ...state,
        user: {
          ...state.user,
          // Passage de logged à true et sauvegarde du token
          logged: true,
          token: action.user.token,
        },
        login: {
          email: '',
          password: '',
        },
      };
    // Sauvegarde des donneés utilisateur
    case SAVE_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.user.id,
          logged: true,
          lastname: action.user.lastname,
          firstname: action.user.firstname,
          adress: action.user.adress,
          birthdate: action.user.birthdate,
          phone: action.user.phone,
          roles: action.user.roles,
          orders: action.user.orders,
          favorites: action.user.favorites,
          comments: action.user.comments,
          email: action.user.email,
        },
        profile: {
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          adress: action.user.adress,
          birthdate: action.user.birthdate,
          phone: action.user.phone,
        },
      };
    // Set d'une propriété boolean de login
    case SET_LOGIN_UNKNOWN:
      return {
        ...state,
        userUnknown: true,
      };
    // Reset d'une propiété boolean de login
    case RESET_LOGIN_UNKNOWN:
      return {
        ...state,
        userUnknown: false,
      };
    // Ajout des articles en favoris
    case ADD_ARTICLE_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          newfavorites: action.article,
        },
      };
    // Suppression des aricles des favoris
    case DELETE_ARTICLE_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          deletefavorites: action.favID,
        },
      };
    // Déconnexion
    case LOGOUT:
      return {
        ...state,
        user: {
          id: null,
          logged: false,
          lastname: null,
          firstname: null,
          adress: null,
          birthdate: null,
          phone: null,
          roles: null,
          orders: null,
          favorites: [],
          comments: null,
          token: null,
        },
        signup: {
          firstname: '',
          lastname: '',
          birthdate: '',
          phone: '',
          adress: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        passwordIsFalse: false,
      };
    // Données du prénom dans un champ controllé création de compte
    case SET_FIRSTNAME_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          firstname: action.firstname,
        },
      };
    // Données du nom dans un champ controllé création de compte
    case SET_LASTNAME_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          lastname: action.lastname,
        },
      };
    // Données de la date d'anniversaire dans un champ controllé création de compte
    case SET_BIRTHDATE_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          birthdate: action.birthdate,
        },
      };
    // Données du téléphone dans un champ controllé création de compte
    case SET_PHONE_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          phone: action.phone,
        },
      };
      // Données de l'adresse dans un champ controllé création de compte
    case SET_ADRESS_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          adress: action.adress,
        },
      };
    // Données de l'email dans un champ controllé création de compte
    case SET_EMAIL_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          email: action.email,
        },
      };
    // Données du mot de passe dans un champ controllé création de compte
    case SET_PASSWORD_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.password,
        },
      };
    // Données de la confirmation de mot de passe dans un champ controllé création de compte
    case SET_CONFIRM_PASSWORD_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          confirmPassword: action.confirmPassword,
        },
      };
    // Erreur lors de la rentrée des mots de passe dans la création de compte
    case PASSWORD_ERROR:
      return {
        ...state,
        passwordIsFalse: !state.user.passwordIsFalse,

      };
    // Validation du captcha
    case VALIDATE_CAPTCHA:
      return {
        ...state,
        login: {
          ...state.login,
          isVerified: action.response,
        },
      };
    // Sauvegarde du token du captcha
    case SAVE_CAPTCHA_TOKEN:
      return {
        ...state,
        login: {
          ...state.login,
          captchaToken: action.value,
        },
      };
    // Données du prénom dans le profil
    case SET_FIRSTNAME_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          firstname: action.firstname,
        },
      };
    // Données du nom dans le profil
    case SET_LASTNAME_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          lastname: action.lastname,
        },
      };
    // Données de la date d'anniversaire dans le profil
    case SET_BIRTHDATE_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          birthdate: action.birthdate,
        },
      };
    // Données du téléphone dans le profil
    case SET_PHONE_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          phone: action.phone,
        },
      };
    // Données de l'adresse dans le profil
    case SET_ADRESS_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          adress: action.adress,
        },
      };
    // Données de l'email dans le login
    case SET_EMAIL_IN_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          email: action.value,
        },
      };
    // Données du mot de passe dans le login
    case SET_PASSWORD_IN_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          password: action.value,
        },
      };
    default:
      return state;
  }
}

export default userReducer;
