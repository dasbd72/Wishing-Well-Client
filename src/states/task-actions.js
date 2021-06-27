import {
  createTask as createTaskFromApi,
  listTasks as listTasksFromApi,
  AorRTask as AorRTaskFromApi,
  childrenComplete as childrenCompleteFromApi,
  parentVerify as parentVerifyFromApi,
} from "Api/tasks.js";

/**
 *
 * @returns task create
 */
function startLoading() {
  return {
    type: "@TASK/START_LOADING",
  };
}

function endLoading() {
  return {
    type: "@TASK/END_LOADING",
  };
}

function endListTasks(tasks) {
  return {
    type: "@TASK/END_LIST_TASKS",
    tasks,
  };
}

export function listTasks(roomId, userId, selectActive) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return listTasksFromApi(roomId, userId, selectActive)
      .then((posts) => {
        dispatch(endListTasks(posts));
      })
      .catch((err) => {
        console.error("Error listing tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
}

export function createTask(
  roomId,
  type,
  taskName,
  deadLine,
  targetPoints,
  userId
) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return createTaskFromApi(
      roomId,
      type,
      taskName,
      deadLine,
      targetPoints,
      userId
    )
      .then((tasks) => {
        dispatch(listTasks());
      })
      .catch((err) => {
        console.error("Error creating tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
}

export function AorRTask(taskId, isAccepted) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return AorRTaskFromApi(taskId, isAccepted)
      .then((posts) => {
        dispatch(listTasks());
      })
      .catch((err) => {
        console.error("Error creating tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
}

export function childrenComplete(taskId) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return childrenCompleteFromApi(taskId)
      .then((posts) => {
        dispatch(listTasks());
      })
      .catch((err) => {
        console.error("Error creating tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
}

export function parentVerify(taskId) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return parentVerifyFromApi(taskId)
      .then((posts) => {
        dispatch(listTasks());
      })
      .catch((err) => {
        console.error("Error creating tasks", err);
      })
      .then(() => {
        dispatch(endLoading());
      });
  };
}
