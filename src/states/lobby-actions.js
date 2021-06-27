import * as T from "./lobby-reducers";
import { userJoinRoom as userJoinRoomApi } from "Api/users";
import {
  createRoom as createRoomApi,
  listRooms as listRoomsApi,
} from "Api/rooms";

const startLoading = () => {
  return {
    type: T.START_LOADING,
  };
};

const endLoading = () => {
  return {
    type: T.END_LOADING,
  };
};

export const userListRooms = (userId) => {
  if (!userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listRoomsApi(userId)
      .then((rooms) => {
        dispatch(endListRooms(rooms));
      })
      .catch((err) => {
        console.error("Error Listing Room", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const endListRooms = (rooms) => {
  return { type: T.END_LIST_ROOMS, rooms: rooms };
};

export const userCreateRoom = (roomName, userId, role) => {
  if (!roomName || !userId || !role) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return createRoomApi(roomName, userId, role)
      .then((room) => {
        dispatch(endCreateRoom(room));
      })
      .catch((err) => {
        console.error("Error Creating Room", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const endCreateRoom = (room) => {
  return { type: T.END_CREATE_ROOM, room: room };
};

export const userJoinRoom = (roomId, userId, role) => {
  if (!roomId || !userId || !role) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return userJoinRoomApi(roomId, userId, role)
      .then((room) => {
        dispatch(endJoinRoom(room));
      })
      .catch((err) => {
        console.error("Error Joining Room", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const endJoinRoom = (room) => {
  return { type: T.END_JOIN_ROOM, room: room };
};
