import {
  SET_USER,
  SIGN_OUT,
  ERR_SIGN_IN,
  SET_AUTH_STATE,
} from "./session-actions";

/*-------------------------------------------------------------------------------*/

const initialState = {
  signedin: false,
  user: null,
  userName: "",
  email: "",
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        userName: action.userName,
        signedin: action.signedin,
        email: action.email,
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

/*-------------------------------------------------------------------------------*/

const initFederated = {
  googleClientId:
    "200959026416-psvbb7e09g5e74noktdvdd9sq0js8um1.apps.googleusercontent.com",
};

export const federated = (state = initFederated, action) => {
  return state;
};
