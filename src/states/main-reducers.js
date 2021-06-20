import { SET_NAVHEIGHT } from "./main-actions";

const initialState = {
  navHeight: 0,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
   
    case SET_NAVHEIGHT:
      return {
        ...state,
        navHeight: action.navHeight,
      };
    default:
      return state;
  }
};
