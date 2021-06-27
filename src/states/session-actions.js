import {
  SET_USER,
  SIGN_OUT,
  ERR_SIGN_IN,
  SET_AUTH_STATE,
} from "./session-reducers";

export const setUser = (user) => {
  var signedin = false;
  var userName = "";
  var email = "";
  var userId = "";

  signedin = user ? true : false;
  if (signedin) {
    if (user.attributes && user.attributes.name)
      userName = user.attributes.name;
    else if (user.name) userName = user.name;

    if (user.email) email = user.email;
    else if (user.attributes.email) email = user.attributes.email;

    if (user.id) userId = user.id.split(":")[1];
    else if (user.attributes.sub) userId = user.attributes.sub;
  }
  return {
    type: SET_USER,
    user: user,
    userName: userName,
    signedin: signedin,
    email: email,
    userId: userId,
  };
};

export const setSignOut = () => {
  return { type: SIGN_OUT };
};

export const setErrSignIn = (err) => {
  return { type: ERR_SIGN_IN, error: err };
};
