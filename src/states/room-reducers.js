const initialState = {
  rooms: [],
  users: [],
};

export const CREATE_ROOM = "@ROOM/CREATE_ROOM";
export const LIST_ROOMS = "@ROOM/LIST_ROOMS";
export const LIST_USERS = "@ROOM/LIST_USERS";

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return { ...state, ...payload };
    case CREATE_ROOM:
      return { ...state, ...payload };
    case CREATE_ROOM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
