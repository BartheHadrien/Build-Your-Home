import { setEmailInLogin, setPasswordInLogin, login, logout, deleteUser,
  setLoginUnknown, resetLoginUnknown, saveUser, fetchUser, saveUserData,
  addArticleToFavorite, addArticleToFavoriteBdd, deleteArticleToFavorite,
  deleteArticleToFavoriteInBdd, setFirstNameInSignup, setLastNameInSignup,
  setBirthDateInSignup, setPhoneInSignup, setAdressInSignup, setEmailInSignup,
  setPasswordInSignup, setConfirmPasswordInSignup, passwordError, createUser,
  validateCaptcha, saveCaptchaToken, sendToGoogle, modifyProfile, setFirstNameInProfile,
  setLastNameInProfile, setBirthDateInProfile, setPhoneInProfile, setAdressInProfile } from 'src/actions/user.js';

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

// TEST ACTION TYPE ADD_ARTICLE_TO_FAVORITE
it('creates a ADD_ARTICLE_TO_FAVORITE action', () => {
  const article = 'undefined';
  const expectedAction = {
    type: 'ADD_ARTICLE_TO_FAVORITE',
    article,
  }

  expect(addArticleToFavorite(article)).toEqual(expectedAction);
});

// TEST ACTION TYPE ADD_ARTICLE_TO_FAVORITE_BDD
it('creates a ADD_ARTICLE_TO_FAVORITE_BDD action', () => {
  const expectedAction = {
    type: 'ADD_ARTICLE_TO_FAVORITE_BDD',
  }

  expect(addArticleToFavoriteBdd()).toEqual(expectedAction);
});

// TEST ACTION TYPE DELETE_ARTICLE_TO_FAVORITE
it('creates a DELETE_ARTICLE_TO_FAVORITE action', () => {
  const favID = 'undefined';
  const expectedAction = {
    type: 'DELETE_ARTICLE_TO_FAVORITE',
    favID,
  }

  expect(deleteArticleToFavorite(favID)).toEqual(expectedAction);
});

// TEST ACTION TYPE DELETE_ARTICLE_TO_FAVORITE_IN_BDD
it('creates a DELETE_ARTICLE_TO_FAVORITE_IN_BDD action', () => {
  const expectedAction = {
    type: 'DELETE_ARTICLE_TO_FAVORITE_IN_BDD',
  }

  expect(deleteArticleToFavoriteInBdd()).toEqual(expectedAction);
});

// ==============================================
// ==================NEW USER====================
// ==============================================

// TEST ACTION TYPE SET_FIRSTNAME_IN_SIGNUP
it('creates a SET_FIRSTNAME_IN_SIGNUP action', () => {
  const firstname = 'undefined';
  const expectedAction = {
    type: 'SET_FIRSTNAME_IN_SIGNUP',
    firstname,
  }

  expect(setFirstNameInSignup(firstname)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_LASTNAME_IN_SIGNUP
it('creates a SET_LASTNAME_IN_SIGNUP action', () => {
  const lastname = 'undefined';
  const expectedAction = {
    type: 'SET_LASTNAME_IN_SIGNUP',
    lastname,
  }

  expect(setLastNameInSignup(lastname)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_BIRTHDATE_IN_SIGNUP
it('creates a SET_BIRTHDATE_IN_SIGNUP action', () => {
  const birthdate = 'undefined';
  const expectedAction = {
    type: 'SET_BIRTHDATE_IN_SIGNUP',
    birthdate,
  }

  expect(setBirthDateInSignup(birthdate)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_PHONE_IN_SIGNUP
it('creates a SET_PHONE_IN_SIGNUP action', () => {
  const phone = 'undefined';
  const expectedAction = {
    type: 'SET_PHONE_IN_SIGNUP',
    phone,
  }

  expect(setPhoneInSignup(phone)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_ADRESS_IN_SIGNUP
it('creates a SET_ADRESS_IN_SIGNUP action', () => {
  const adress = 'undefined';
  const expectedAction = {
    type: 'SET_ADRESS_IN_SIGNUP',
    adress,
  }

  expect(setAdressInSignup(adress)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_EMAIL_IN_SIGNUP
it('creates a SET_EMAIL_IN_SIGNUP action', () => {
  const email = 'undefined';
  const expectedAction = {
    type: 'SET_EMAIL_IN_SIGNUP',
    email,
  }

  expect(setEmailInSignup(email)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_PASSWORD_IN_SIGNUP
it('creates a SET_PASSWORD_IN_SIGNUP action', () => {
  const password = 'undefined';
  const expectedAction = {
    type: 'SET_PASSWORD_IN_SIGNUP',
    password,
  }

  expect(setPasswordInSignup(password)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_CONFIRM_PASSWORD_IN_SIGNUP
it('creates a SET_CONFIRM_PASSWORD_IN_SIGNUP action', () => {
  const confirmPassword = 'undefined';
  const expectedAction = {
    type: 'SET_CONFIRM_PASSWORD_IN_SIGNUP',
    confirmPassword,
  }

  expect(setConfirmPasswordInSignup(confirmPassword)).toEqual(expectedAction);
});

// TEST ACTION TYPE PASSWORD_ERROR
it('creates a PASSWORD_ERROR action', () => {
  const expectedAction = {
    type: 'PASSWORD_ERROR',
  }

  expect(passwordError()).toEqual(expectedAction);
});

// TEST ACTION TYPE CREATE_USER
it('creates a CREATE_USER action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'CREATE_USER',
    value,
  }

  expect(createUser(value)).toEqual(expectedAction);
});

// ==============================================
// ==================CAPTCHA=====================
// ==============================================

// TEST ACTION TYPE VALIDATE_CAPTCHA
it('creates a VALIDATE_CAPTCHA action', () => {
  const response = 'undefined';
  const expectedAction = {
    type: 'VALIDATE_CAPTCHA',
    response,
  }

  expect(validateCaptcha(response)).toEqual(expectedAction);
});

// TEST ACTION TYPE SAVE_CAPTCHA_TOKEN
it('creates a SAVE_CAPTCHA_TOKEN action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SAVE_CAPTCHA_TOKEN',
    value,
  }

  expect(saveCaptchaToken(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE SAVE_CAPTCHA_TOKEN
it('creates a SEND_TO_GOOGLE action', () => {
  const expectedAction = {
    type: 'SEND_TO_GOOGLE',
  }

  expect(sendToGoogle()).toEqual(expectedAction);
});

// ==============================================
// ==================PROFILE=====================
// ==============================================

// TEST ACTION TYPE SAVE_CAPTCHA_TOKEN
it('creates a MODIFY_PROFILE action', () => {
  const expectedAction = {
    type: 'MODIFY_PROFILE',
  }

  expect(modifyProfile()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_FIRSTNAME_IN_PROFILE
it('creates a SET_FIRSTNAME_IN_PROFILE action', () => {
  const firstname = 'undefined';
  const expectedAction = {
    type: 'SET_FIRSTNAME_IN_PROFILE',
    firstname,
  }

  expect(setFirstNameInProfile(firstname)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_LASTNAME_IN_PROFILE
it('creates a SET_LASTNAME_IN_PROFILE action', () => {
  const lastname = 'undefined';
  const expectedAction = {
    type: 'SET_LASTNAME_IN_PROFILE',
    lastname,
  }

  expect(setLastNameInProfile(lastname)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_BIRTHDATE_IN_PROFILE
it('creates a SET_BIRTHDATE_IN_PROFILE action', () => {
  const birthdate = 'undefined';
  const expectedAction = {
    type: 'SET_BIRTHDATE_IN_PROFILE',
    birthdate,
  }

  expect(setBirthDateInProfile(birthdate)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_BIRTHDATE_IN_PROFILE
it('creates a SET_PHONE_IN_PROFILE action', () => {
  const phone = 'undefined';
  const expectedAction = {
    type: 'SET_PHONE_IN_PROFILE',
    phone,
  }

  expect(setPhoneInProfile(phone)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_ADRESS_IN_PROFILE
it('creates a SET_ADRESS_IN_PROFILE action', () => {
  const adress = 'undefined';
  const expectedAction = {
    type: 'SET_ADRESS_IN_PROFILE',
    adress,
  }

  expect(setAdressInProfile(adress)).toEqual(expectedAction);
});
