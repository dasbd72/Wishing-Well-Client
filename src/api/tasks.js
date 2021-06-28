import axios from "axios";
import baseUrl from "Api/backend";

const tasksBaseUrl = baseUrl + "/tasks";

/**
 *
 * @param {number} roomId
 * @param {string} userId
 * @param {number} selectActive 0:not confirmed, 1:rejected, 2:undone
 * @returns
 */
export function listTasks(roomId, userId, selectActive = -1) {
  let url = tasksBaseUrl;
  let query = [];
  if (roomId) query.push(`roomId=${roomId}`);
  if (userId) query.push(`userId=${userId}`);
  if (selectActive != -1) query.push(`selectActive=${selectActive}`);
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
 * @param {string} userId user id
 * @param {string} description
 * @returns
 */
export function createTask(
  roomId,
  type,
  taskName,
  deadline,
  points,
  userId,
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
      userId,
      description,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}

/**
 *
 * @param {number} taskId
 * @param {boolean} isAccepted
 * @returns
 */
export function responseTask(taskId, isAccepted) {
  let url = `${tasksBaseUrl}/${taskId}/${isAccepted}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function childrenComplete(taskId) {
  let url = baseUrl + `/tasksChildrenDone/${taskId}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function parentVerify(taskId, roomId, accept) {
  let url = baseUrl + `/tasksParentDone/${taskId}/${roomId}/${accept}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}
