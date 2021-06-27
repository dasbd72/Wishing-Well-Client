import { SET_NAVHEIGHT } from "./main-reducers";

export const setNavHeight = (navHeight) => ({
  type: SET_NAVHEIGHT,
  navHeight: navHeight,
});
