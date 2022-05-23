import { setEmailInLogin, setPasswordInLogin, login, logout, deleteUser,
  setLoginUnknown, resetLoginUnknown, saveUser, fetchUser, saveUserData } from 'src/actions/user.js';

// ==============================================
// ==================LOGIN=======================
// ==============================================

// TEST ACTION TYPE SET_EMAIL_IN_LOGIN
it('creates a SET_EMAIL_IN_LOGIN action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SET_EMAIL_IN_LOGIN',
    value,
  }

  expect(setEmailInLogin(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_EMAIL_IN_LOGIN
it('creates a SET_PASSWORD_IN_LOGIN action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SET_PASSWORD_IN_LOGIN',
    value,
  }

  expect(setPasswordInLogin(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE LOGIN
it('creates a LOGIN action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'LOGIN',
    value,
  }

  expect(login(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE LOGOUT
it('creates a LOGOUT action', () => {
  const expectedAction = {
    type: 'LOGOUT',
  }

  expect(logout()).toEqual(expectedAction);
});

// TEST ACTION TYPE DELETE_USER
it('creates a DELETE_USER action', () => {
  const expectedAction = {
    type: 'DELETE_USER',
  }

  expect(deleteUser()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_LOGIN_UNKNOWN
it('creates a SET_LOGIN_UNKNOWN action', () => {
  const expectedAction = {
    type: 'SET_LOGIN_UNKNOWN',
  }

  expect(setLoginUnknown()).toEqual(expectedAction);
});

// TEST ACTION TYPE RESET_LOGIN_UNKNOWN
it('creates a RESET_LOGIN_UNKNOWN action', () => {
  const expectedAction = {
    type: 'RESET_LOGIN_UNKNOWN',
  }

  expect(resetLoginUnknown()).toEqual(expectedAction);
});

// ==============================================
// ==================SIGN UP=====================
// ==============================================

// TEST ACTION TYPE SAVE_USER
it('creates a SAVE_USER action', () => {
  const user = 'undefined';
  const expectedAction = {
    type: 'SAVE_USER',
    user,
  }

  expect(saveUser(user)).toEqual(expectedAction);
});

// TEST ACTION TYPE FETCH_USER
it('creates a FETCH_USER action', () => {
  const expectedAction = {
    type: 'FETCH_USER',
  }

  expect(fetchUser()).toEqual(expectedAction);
});

// TEST ACTION TYPE SAVE_USER_DATA
it('creates a SAVE_USER_DATA action', () => {
  const user = 'undefined';
  const expectedAction = {
    type: 'SAVE_USER_DATA',
    user,
  }

  expect(saveUserData(user)).toEqual(expectedAction);
});

// ==============================================
// ==================FAVORITES===================
// ==============================================
