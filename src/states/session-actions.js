import * as T from "./session-reducers";

import {
  getUserInfo as getUserInfoApi,
  registerUserName as registerUserNameApi,
  updateUserName as updateUserNameApi,
} from "Api/users";
import shortid from "shortid";

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
      if (!info) dispatch(registerUserName(userId, shortid.generate()));
      else dispatch(storeUserName(info.userName));
    });
  };
};

export const registerUserName = (userId, userName) => {
  return (dispatch) => {
    return registerUserNameApi(userId, userName).then((info) => {
      dispatch(storeUserName(info.userName));
    });
  };
};

export const updateUserName = (userId, userName) => {
  return (dispatch) => {
    return updateUserNameApi(userId, userName).then((info) => {
      dispatch(storeUserName(info.userName));
    });
  };
};

const storeUserName = (userName) => {
  return { type: T.STORE_USERNAME, userName: userName };
};
