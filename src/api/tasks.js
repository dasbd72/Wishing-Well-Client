import axios from "axios";
import { baseUrl } from "Api/backend";

const tasksBaseUrl = baseUrl + "/tasks";

/**
 *
 * @param {number} roomId
 * @param {string} userId
 * @param {number} selectActive 0:not confirmed, 1:rejected, 2:undone
 * @returns
 */
export function listTasks(roomId, userId, selectActive = 0) {
  let url = tasksBaseUrl;
  let query = [];
  query.push(`roomId=${roomId}`);
  query.push(`userId=${userId}`);
  query.push(`selectActive=${selectActive}`);
  if (query.length()) url += "?" + query.join("&");

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

/**
 *
 * @param {number} roomId
 * @param {string} type
 * @param {number} taskName
 * @param {string} deadLine
 * @param {number} targetPoints
 * @param {string} userId
 * @returns
 */
export function createTask(
  roomId,
  type,
  taskName,
  deadLine,
  targetPoints,
  userId
) {
  let url = tasksBaseUrl;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      roomId,
      type,
      taskName,
      deadLine,
      targetPoints,
      userId,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}

export function AorRTask(taskId, isAccepted) {
  let url = tasksBaseUrl;
  let query = [];
  query.push(`${taskId}`);
  query.push(`${isAccepted}`);
  if (query.length()) url += "/" + query.join("/");

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function childrenComplete(taskId) {
  let url = tasksBaseUrl + `/childrenDone/${taskId}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function parentVerify(taskId) {
  let url = tasksBaseUrl + `/parentDone/${taskId}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}
