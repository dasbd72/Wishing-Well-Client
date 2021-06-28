import axios from "axios";
import { baseUrl } from "Api/backend";

const prizesUrl = baseUrl + "/prizes";

/**
 *
 * @param {string} roomId
 * @param {string} userId
 * @param {number} selectActive
 * @returns List of Prize object
 */
export function listPrizes(roomId, userId, selectActive = 0) {
  let url = prizesUrl;
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
 * @param {string} userId
 * @param {string} prizeName
 * @param {number} targetPoints
 * @returns Prize Object
 */
export function createPrize(roomId, userId, prizeName, targetPoints) {
  let url = prizesUrl;

  console.log(`Making POST request to: ${url}`);
  console.log(roomId, userId, prizeName, targetPoints);

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
export function donePrize(prizeId) {
  let url = prizesUrl;
  utl += `/done/${prizeId}`;

  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}
