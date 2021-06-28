import axios from "axios";
import baseUrl from "Api/backend";

const prizesUrl = baseUrl + "/prizes";

/**
 *
 * @param {string} roomId
 * @param {string} userId
 * @param {number} selectActive 0-unconfirmed, 1-rejected, 2-undone
 * @returns List of Prize object
 */
export function listPrizes(roomId, userId, selectActive = -1) {
  let url = prizesUrl;
  let query = [];
  if (roomId.length) query.push(`roomId=${roomId}`);
  if (userId.length) query.push(`userId=${userId}`);
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
 * @param {string} userId
 * @param {string} prizeName
 * @param {number} targetPoints
 * @returns Prize Object
 */
export function createPrize(roomId, userId, prizeName, targetPoints) {
  let url = prizesUrl;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      userId,
      prizeName,
      targetPoints,
      roomId,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}

/**
 *
 * @param {number} prizeId
 * @param {boolean} isAccepted
 * @returns Prize object
 */
export function responsePrize(prizeId, isAccepted) {
  let url = prizesUrl;
  url += `/${prizeId}/${isAccepted}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

/**
 *
 * @param {number} prizeId
 * @returns
 */
export function exchangePrize(prizeId) {
  let url = baseUrl;
  utl += `/prizesdone/${prizeId}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}
