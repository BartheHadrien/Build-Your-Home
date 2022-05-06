import {
  SET_EMAIL_IN_LOGIN, SET_PASSWORD_IN_LOGIN,
} from '../actions/user';

const initialState = {
  login: {
    email: '',
    password: '',
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
    default:
      return state;
  }
}

export default userReducer;
