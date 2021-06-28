import axios from "axios";
import baseUrl from "Api/backend";

const roomsBaseUrl = baseUrl + "/rooms";

/**
 *
 * @param {string} userId
 * @returns List of Room object
 */
export function listRooms(userId) {
  let url = roomsBaseUrl;
  let query = [];
  query.push(`userId=${userId}`);
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
 * @param {number} roomId
 * @param {string} role
 * @returns List of user object
 */
export function listUsers(roomId, role = "both") {
  let url = roomsBaseUrl;
  let query = [];
  query.push(`roomId=${roomId}`);
  if (role != "both") query.push(`role=${role}`);
  if (query.length) url += "?" + query.join("&");

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

/**
 * @param {string} roomName
 * @param {string} userId
 * @param {string} role
 * @returns Room Object
 */
export function createRoom(roomName, userId, role) {
  let url = roomsBaseUrl;

  console.log(`Making POST request to: ${url}`);
  console.log(roomName, userId, role);
  return axios
    .post(url, {
      roomName,
      userId,
      role,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
