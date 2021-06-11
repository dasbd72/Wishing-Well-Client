const SET_USER = "@SESSION/SWITCH_USER";
const SIGN_OUT = "@SESSION/SIGN_OUT";
const ERR_SIGN_IN = "@SESSION/ERR_SIGN_IN";

export const setUser = (user) => {
  var userName = user
    ? user.username || user.name
      ? user.username
        ? user.username
        : user.name
      : ""
    : "";
  return {
    type: SET_USER,
    userName: userName,
    logged: user ? true : false,
    cognitoUser: user,
  };
};

export const setSignOut = () => {
  return { type: SIGN_OUT };
};

export const setErrSignIn = (err) => {
  return { type: ERR_SIGN_IN, error: err };
};

export { SET_USER, SIGN_OUT, ERR_SIGN_IN };
