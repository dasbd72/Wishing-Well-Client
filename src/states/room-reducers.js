const initialState = {
  role: "",
  roomId: "",
  loading: false,

  c_acceptedTasks: [],
  c_unacceptedTasks: [],
  c_prizeList: [],
  c_currentPrize: null,
};

export const SET_ROOM_ID = "@ROOM/SET_ROOM_ID";
export const WRONG_INPUT = "@ROOM/WRONG_INPUT";
export const START_LOADING = "@ROOM/START_LOADING";
export const END_LOADING = "@ROOM/END_LOADING";
export const END_GET_ROLE = "@ROOM/END_GET_ROLE";

export const C_END_LIST_TASKS = "@CHILD/END_LIST_TASKS";
export const C_END_LIST_PRIZE = "@CHILD/END_LIST_PRIZE";
export const C_END_CHOSE_PRIZE = "@CHILD/END_CHOSE_PRIZE";

export const room = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case SET_ROOM_ID:
      return { ...state, roomId: action.roomId };
    case END_GET_ROLE:
      return { ...state, role: action.role };
    case C_END_LIST_TASKS:
      return {
        ...state,
        c_acceptedTasks: action.acceptedTasks,
        c_unacceptedTasks: action.unacceptedTasks,
      };
    case C_END_LIST_PRIZE:
      return {
        ...state,
        c_prizeList: action.prizes,
        c_currentPrize: action.prize,
      };
    case C_END_CHOSE_PRIZE:
      return { ...state, c_currentPrize: action.prize };
    default:
      return state;
  }
};
