import * as T from "./session-reducers";

import {
  getUserInfo as getUserInfoApi,
  userRegister as userRegisterApi,
} from "Api/users";

export const setUser = (user) => {
  var signedin = false;
  var email = "";
  var userId = "";

  signedin = user ? true : false;
  if (signedin) {
    if (user.email) email = user.email;
    else if (user.attributes.email) email = user.attributes.email;

    if (user.id) userId = user.id.split(":")[1];
    else if (user.attributes.sub) userId = user.attributes.sub;
  }
  return {
    type: T.SET_USER,
    user: user,
    signedin: signedin,
    email: email,
    userId: userId,
  };
};

export const setSignOut = () => {
  return { type: T.SIGN_OUT };
};

export const setErrSignIn = (err) => {
  return { type: T.ERR_SIGN_IN, error: err };
};

export const getUserInfo = (userId) => {
  return (dispatch) => {
    return getUserInfoApi(userId).then((info) => {
      dispatch(storeUserName(info.userName));
    });
  };
};

export const setUserName = (userId, userName) => {
  return (dispatch) => {
    return userRegisterApi(userId, userName).then((info) => {
      console.log("Info", info);
      dispatch(storeUserName(info.userName));
    });
  };
};
const storeUserName = (userName) => {
  return { type: T.STORE_USERNAME, userName: userName };
};
