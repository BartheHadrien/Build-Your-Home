// import {
//   SET_EMAIL_IN_LOGIN, SET_PASSWORD_IN_LOGIN, SET_SEARCH_BAR_VALUE, TOGGLE_BURGER,
// } from '../actions';

// const initialState = {
//   navbar: {
//     isOpen: false,
//     searchBarValue: '',
//   },
//   login: {
//     email: '',
//     password: '',
//   },
// };

// function userReducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case SET_SEARCH_BAR_VALUE:
//       return {
//         ...state,
//         navbar: {
//           ...state.navbar,
//           searchBarValue: action.value,
//         },
//       };
//     case TOGGLE_BURGER:
//       return {
//         ...state,
//         navbar: {
//           ...state.navbar,
//           isOpen: !state.navbar.isOpen,
//         },
//       };
//     case SET_EMAIL_IN_LOGIN:
//       return {
//         ...state,
//         login: {
//           ...state.login,
//           email: action.value,
//         },
//       };
//     case SET_PASSWORD_IN_LOGIN:
//       return {
//         ...state,
//         login: {
//           ...state.login,
//           password: action.value,
//         },
//       };
//     default:
//       return state;
//   }
// }

// export default userReducer;
