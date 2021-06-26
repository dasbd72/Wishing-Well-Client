const SET_USER = "@SESSION/SET_USER";
const SET_AUTH_STATE = "@SESSION/SET_AUTH_STATE";
const SIGN_OUT = "@SESSION/SIGN_OUT";
const ERR_SIGN_IN = "@SESSION/ERR_SIGN_IN";

export const setUser = (user) => {
  var signedin = false;
  var userName = "";
  var email = "";
  var id = "";

  signedin = user ? true : false;
  if (signedin) {
    if (user.attributes && user.attributes.name)
      userName = user.attributes.name;
    else if (user.name) userName = user.name;

    if (user.email) email = user.email;
    else if (user.attributes.email) email = user.attributes.email;

    if (user.id) id = user.id;
    else if (user.attributes.sub) email = user.attributes.sub;
  }
  return {
    type: SET_USER,
    user: user,
    userName: userName,
    signedin: signedin,
    email: email,
  };
};

export const setSignOut = () => {
  return { type: SIGN_OUT };
};

export const setErrSignIn = (err) => {
  return { type: ERR_SIGN_IN, error: err };
};

export { SET_USER, SIGN_OUT, ERR_SIGN_IN, SET_AUTH_STATE };
