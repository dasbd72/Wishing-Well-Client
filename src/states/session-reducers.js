const initSessionState = {
  logged: false,
  userId: "",
  userName: "",
  userGroup: "",
};

const initFederated = {
  googleClientId:
    "200959026416-psvbb7e09g5e74noktdvdd9sq0js8um1.apps.googleusercontent.com",
};

export function session(state = initSessionState, action) {
  switch (action.type) {
    case "@SESSION/SET_USER":
      return {
        ...state,
        userName: action.userName,
        logged: action.logged,
      };
    case "@SESSION/SET_LOGGED":
      return {
        ...state,
        logged: action.logged,
      };
    default:
      return state;
  }
}

export function federated(state = initFederated, action) {
  return state;
}
