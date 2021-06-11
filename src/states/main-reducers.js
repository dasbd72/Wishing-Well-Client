import { TOGGLE_OPEN, SET_NAVHEIGHT } from "./main-actions";

const initialState = {
  isOpen: false,
  navHeight: 0,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case SET_NAVHEIGHT:
      return {
        ...state,
        navHeight: action.navHeight,
      };
    default:
      return state;
  }
};
