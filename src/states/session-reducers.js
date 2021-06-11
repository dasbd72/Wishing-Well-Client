const initialState = {
  logged: false,
  userId: "",
  userName: "",
  userGroup: "",
  cognitoUser: null,
  errSignIn: "",
};

const initFederated = {
  googleClientId:
    "200959026416-psvbb7e09g5e74noktdvdd9sq0js8um1.apps.googleusercontent.com",
};

import { SET_USER, SIGN_OUT, ERR_SIGN_IN } from "./session-actions";

export const session = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.userName,
        logged: action.logged,
        cognitoUser: action.cognitoUser,
      };
    case SIGN_OUT:
      return initialState;
    case ERR_SIGN_IN:
      return {
        ...state,
        errSignIn: action.error,
      };
    default:
      return state;
  }
};

export const federated = (state = initFederated, action) => {
  return state;
};
