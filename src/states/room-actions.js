import * as T from "./room-reducers";

import {
  getUserRole as getUserRoleApi,
  userChoosePrize as userChoosePrizeApi,
  getChosenPrize as getChosenPrizeApi,
} from "Api/users";
import {
  listTasks as listTasksApi,
  responseTask as responseTaskApi,
  childrenComplete as doneTaskApi,
  parentVerify as verifyTaskApi,
} from "Api/tasks";
import {
  listPrizes as listPrizesApi,
  createPrize as createPrizeApi,
} from "Api/prizes";
import { listUsers as listUsersApi } from "Api/rooms";

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

export const c_listTasks = (roomId, userId) => {
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
            dispatch(c_endListTasks(acceptedTasks, tasks));
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

const c_endListTasks = (acceptedTasks, unacceptedTasks) => {
  return { type: T.C_END_LIST_TASKS, acceptedTasks, unacceptedTasks };
};

export const c_responseTask = (taskId, accept, roomId, userId) => {
  if (!taskId || !roomId || !userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return responseTaskApi(taskId, accept)
      .then(() => {
        dispatch(c_listTasks(roomId, userId));
      })
      .catch((err) => {
        console.error("Error Response Tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

export const c_doneTask = (taskId, roomId, userId) => {
  if (!taskId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return doneTaskApi(taskId)
      .then(() => {
        dispatch(c_listTasks(roomId, userId));
      })
      .catch((err) => {
        console.error("Error Finishing Task", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

export const c_listPrizes = (roomId, userId) => {
  if (!roomId || !userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listPrizesApi(roomId, userId)
      .then((prizes) => {
        dispatch(c_endListPrizes(prizes));
      })
      .catch((err) => {
        console.error("Error Listing Prizes", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const c_endListPrizes = (prizes) => {
  return { type: T.C_END_LIST_PRIZE, prizes: prizes };
};

export const c_choosePrize = (prizeId, userId) => {
  if (!prizeId || !userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return userChoosePrizeApi(prizeId, userId)
      .then((prize) => {
        dispatch(c_endChoosePrize(prize));
      })
      .catch((err) => {
        console.error("Error Choosing Prize", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const c_endChoosePrize = (prize) => {
  return { type: T.C_END_CHOSE_PRIZE, prize: prize };
};

export const c_getChosenPrize = (roomId, userId) => {
  if (!roomId || !userId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return getChosenPrizeApi(roomId, userId)
      .then((prize) => {
        dispatch(c_endGetChosenPrize(prize));
      })
      .catch((err) => {
        console.error("Error Getting Prize", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const c_endGetChosenPrize = (prize) => {
  return { type: T.C_END_GET_CHOSEN_PRIZE, prize: prize };
};

export const p_listChild = (roomId) => {
  if (!roomId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listUsersApi(roomId, "children")
      .then((childList) => {
        dispatch(p_endListChild(childList));
      })
      .catch((err) => {
        console.error("Error Listing Child", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const p_endListChild = (childList) => {
  return { type: T.P_END_LIST_CHILD, childList: childList };
};

export const p_listPrizes = (roomId) => {
  if (!roomId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listPrizesApi(roomId, "", 0)
      .then((prizes) => {
        dispatch(p_endListPrizes(prizes));
      })
      .catch((err) => {
        console.error("Error Listing Prizes", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const p_endListPrizes = (prizes) => {
  return { type: T.P_END_LIST_PRIZE, prizeList: prizes };
};

export const p_spyTasks = (roomId, userId) => {
  if (!roomId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listTasksApi(roomId, userId)
      .then((tasks) => {
        dispatch(p_endSpyTasks(tasks));
      })
      .catch((err) => {
        console.error("Error Listing Prizes", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};

const p_endSpyTasks = (tasks) => {
  return { type: T.P_END_LIST_SPY_TASKS, tasks: tasks };
};

export const p_verifyTask = (taskId, roomId, accept, userId) => {
  if (!roomId || !userId || !taskId) return { type: T.WRONG_INPUT };
  return (dispatch, getState) => {
    dispatch(startLoading());
    return verifyTaskApi(taskId, roomId, accept)
      .then(() => {
        dispatch(p_spyTasks(roomId, userId));
      })
      .catch((err) => {
        console.error("Error Verifying Prize", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
};
