const initialState = {
  rooms: [],
  loading: false,
};

export const WRONG_INPUT = "@LOBBY/WRONG_INPUT";
export const END_CREATE_ROOM = "@LOBBY/END_CREATE_ROOM";
export const END_JOIN_ROOM = "@LOBBY/END_JOIN_ROOM";
export const END_LIST_ROOMS = "@LOBBY/END_LIST_ROOMS";
export const START_LOADING = "@LOBBY/START_LOADING";
export const END_LOADING = "@LOBBY/END_LOADING";

export const lobby = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case END_LIST_ROOMS:
      return { ...state, rooms: action.rooms };
    case END_CREATE_ROOM:
      return { ...state, rooms: [action.room, ...state.rooms] };
    case END_JOIN_ROOM:
      return { ...state, rooms: [action.room, ...state.rooms] };
    default:
      return state;
  }
};
