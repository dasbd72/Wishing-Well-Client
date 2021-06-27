const initialState = {
  signedin: false,
  user: null,
  userName: "",
  email: "",
  userId: "",
};

export const SET_USER = "@SESSION/SET_USER";
export const SET_AUTH_STATE = "@SESSION/SET_AUTH_STATE";
export const SIGN_OUT = "@SESSION/SIGN_OUT";
export const ERR_SIGN_IN = "@SESSION/ERR_SIGN_IN";

export const session = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        userName: action.userName,
        signedin: action.signedin,
        email: action.email,
        userId: action.userId,
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
