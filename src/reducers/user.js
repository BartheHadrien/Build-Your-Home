import {
  SET_EMAIL_IN_LOGIN, SET_PASSWORD_IN_LOGIN, SAVE_USER, SAVE_USER_DATA,
  SET_FIRSTNAME_IN_SIGNUP, SET_LASTNAME_IN_SIGNUP, SET_BIRTHDATE_IN_SIGNUP,
  SET_PHONE_IN_SIGNUP, SET_ADRESS_IN_SIGNUP, SET_EMAIL_IN_SIGNUP,
  SET_PASSWORD_IN_SIGNUP, SET_CONFIRM_PASSWORD_IN_SIGNUP, LOGOUT,
  CHANGE_VALUE, ADD_ARTICLE_TO_FAVORITE,
} from '../actions/user';

const initialState = {
  login: {
    email: 'admin@admin.com',
    password: 'admin',

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
    comments: [],
    logged: false,
  },
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
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
        },
      };
    case ADD_ARTICLE_TO_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          favorites: {
            ...state.user.favorites,
            favorites: action.article,
          },
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
          favorites: null,
          comments: null,
        },
      };
      // NEW USER
    case CHANGE_VALUE:
      return {
        ...state,
        signup: {
          [action.id]: action.value,
        },
      };
    // case SET_FIRSTNAME_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       firstname: action.firstname,
    //     },
    //   };
    // case SET_LASTNAME_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       lastname: action.lastname,
    //     },
    //   };
    // case SET_BIRTHDATE_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       birthdate: action.birthdate,
    //     },
    //   };
    // case SET_PHONE_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       phone: action.phone,
    //     },
    //   };
    // case SET_ADRESS_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       addres: action.adress,
    //     },
    //   };
    // case SET_EMAIL_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       email: action.email,
    //     },
    //   };
    // case SET_PASSWORD_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       password: action.password,
    //     },
    //   };
    // case SET_CONFIRM_PASSWORD_IN_SIGNUP:
    //   return {
    //     ...state,
    //     signup: {
    //       confirmPassword: action.confirmPassword,
    //     },
    //   };
    default:
      return state;
  }
}

export default userReducer;
