import * as T from "./main-reducers";

export const setNavHeight = (navHeight) => ({
  type: T.SET_NAVHEIGHT,
  navHeight: navHeight,
});

export const setWidth = (width) => ({
  type: T.SET_WIDTH,
  width: width,
});
