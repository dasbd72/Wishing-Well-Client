const initialState = {
  navHeight: 0,
  width: 0,
};

export const SET_NAVHEIGHT = "@MAIN/SET_NAVHEIGHT";
export const SET_WIDTH = "@MAIN/SET_WIDTH";
export const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVHEIGHT:
      return {
        ...state,
        navHeight: action.navHeight,
      };
    case SET_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    default:
      return state;
  }
};
