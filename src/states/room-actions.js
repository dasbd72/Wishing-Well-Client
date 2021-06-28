import * as T from "./room-reducers";

import { getUserRole as getUserRoleApi } from "Api/users";
import {
  listTasks as listTasksApi,
  responseTask as responseTaskApi,
} from "Api/tasks";
import {
  listPrizes as listPrizesApi,
  createPrize as createPrizeApi,
} from "Api/prizes";

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
        console.error("Error Getting Role", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const endGetUserRole = (role) => {
  return { type: T.END_GET_ROLE, role: role };
};

export const listTasks = (roomId, userId) => {
  console.log("ListTasks");
  console.log(roomId, userId);
  if (!roomId || !userId) return { type: T.WRONG_INPUT };
  let acceptedTasks;
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listTasksApi(roomId, userId, 2)
      .then((tasks) => {
        acceptedTasks = tasks;
      })
      .catch((err) => {
        console.error("Error Listing Accepted Tasks", err);
      })
      .then(() => {
        listTasksApi(roomId, userId, 0)
          .then((tasks) => {
            dispatch(endListTasks(acceptedTasks, tasks));
          })
          .catch((err) => {
            console.error("Error Listing Unaccepted Tasks", err);
          })
          .then(() => {
            dispatch(endLoading());
          });
      });
  };
};

const endListTasks = (acceptedTasks, unacceptedTasks) => {
  return { type: T.C_END_LIST_TASKS, acceptedTasks, unacceptedTasks };
};

export const responseTask = (taskId, accept, roomId, userId) => {
  if (!taskId || !isAccepted || !roomId || !userId)
    return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return responseTaskApi(taskId, accept)
      .then(() => {
        dispatch(listTasks(roomId, userId));
      })
      .catch((err) => {
        console.error("Error Response Tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};
