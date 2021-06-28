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
  if (query.length) url += "?" + query.join("&");

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

/**
 *
 * @param {string} roomId
 * @param {string} type normal/forced
 * @param {string} taskName
 * @param {number} deadline
 * @param {number} points
 * @param {string} targetUser user id
 * @param {string} description
 * @returns
 */
export function createTask(
  roomId,
  type,
  taskName,
  deadline,
  points,
  targetUser,
  description
) {
  let url = tasksBaseUrl;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      roomId,
      type,
      taskName,
      deadline,
      points,
      targetUser,
      description,
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
  if (query.length) url += "/" + query.join("/");

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
