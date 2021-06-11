const TOGGLE_OPEN = "@MAIN/TOGGLE_OPEN";
const SET_NAVHEIGHT = "@MAIN/SET_NAVHEIGHT";

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const setNavHeight = (navHeight) => ({
  type: SET_NAVHEIGHT,
  navHeight: navHeight,
});

export { TOGGLE_OPEN, SET_NAVHEIGHT };
