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
  SET_LOGIN_UNKNOWN, RESET_LOGIN_UNKNOWN,

} from '../actions/user';

// ===============================================
// ===================InitialState================

const initialState = {
  login: {
    email: 'admin@admin.com',
    password: 'admin',
    isVerified: false,
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
    case SAVE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          logged: true,
          token: action.user.token,
        },
        login: {
          email: '',
          password: '',
        },
      };
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
          role: action.user.role,
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
    case SET_LOGIN_UNKNOWN:
      return {
        ...state,
        userUnknown: true,
      };
    case RESET_LOGIN_UNKNOWN:
      return {
        ...state,
        userUnknown: false,
      };
    case ADD_ARTICLE_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          newfavorites: action.article,
        },
      };
    case DELETE_ARTICLE_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          deletefavorites: action.favID,
        },
      };
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
          role: null,
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
    case SET_FIRSTNAME_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          firstname: action.firstname,
        },
      };
    case SET_LASTNAME_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          lastname: action.lastname,
        },
      };
    case SET_BIRTHDATE_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          birthdate: action.birthdate,
        },
      };
    case SET_PHONE_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          phone: action.phone,
        },
      };
    case SET_ADRESS_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          adress: action.adress,
        },
      };
    case SET_EMAIL_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          email: action.email,
        },
      };
    case SET_PASSWORD_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.password,
        },
      };
    case SET_CONFIRM_PASSWORD_IN_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          confirmPassword: action.confirmPassword,
        },
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        passwordIsFalse: !state.user.passwordIsFalse,

      };
    case VALIDATE_CAPTCHA:
      return {
        ...state,
        login: {
          ...state.login,
          isVerified: true,
        },
      };
    case SET_FIRSTNAME_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          firstname: action.firstname,
        },
      };
    case SET_LASTNAME_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          lastname: action.lastname,
        },
      };
    case SET_BIRTHDATE_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          birthdate: action.birthdate,
        },
      };
    case SET_PHONE_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          phone: action.phone,
        },
      };
    case SET_ADRESS_IN_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          adress: action.adress,
        },
      };
      // ========Champs Controllés========
    case SET_EMAIL_IN_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          email: action.value,
        },
      };
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
