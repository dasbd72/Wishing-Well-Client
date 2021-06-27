import * as T from "./room-reducers";

import { getUserRole as getUserRoleApi } from "Api/users";

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

export const setRoomId = (roomId) => {
  if (!roomId) return { type: T.WRONG_INPUT };
  return {
    type: T.SET_ROOM_ID,
    roomId: roomId,
  };
};

export const getUserRole = (roomId, userId) => {
  if (!roomId || !userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return getUserRoleApi(roomId, userId)
      .then((role) => {
        dispatch(endGetUserRole(role));
      })
      .catch((err) => {
        console.error("Error Listing Room", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const endGetUserRole = (role) => {
  return { type: T.END_GET_ROLE, role: role };
};
