const SWITCH_USER = "@SESSION/SWITCH_USER";
const SIGN_OUT = "@SESSION/SIGN_OUT";

export const setUser = (user) => {
  var userName = user
    ? user.username || user.name
      ? user.username
        ? user.username
        : user.name
      : ""
    : "";
  return {
    type: SWITCH_USER,
    userName: userName,
    logged: user ? true : false,
    cognitoUser: user,
  };
};

export const setSignOut = () => {
  return { type: SIGN_OUT };
};

export { SWITCH_USER, SIGN_OUT };
