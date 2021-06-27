const initialRoomState = {
  role: "",
  roomId: "",
  users: [],
  loading: false,
};

export const SET_ROOM_ID = "@ROOM/SET_ROOM_ID";
export const WRONG_INPUT = "@ROOM/WRONG_INPUT";
export const START_LOADING = "@ROOM/START_LOADING";
export const END_LOADING = "@ROOM/END_LOADING";
export const END_GET_ROLE = "@ROOM/END_GET_ROLE";

export const room = (state = initialRoomState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case SET_ROOM_ID:
      return { ...state, roomId: action.roomId };
    case END_GET_ROLE:
      return { ...state, role: action.role };
    default:
      return state;
  }
};
