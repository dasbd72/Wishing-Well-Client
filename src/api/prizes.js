import axios from "axios";
import { baseUrl } from "Api/backend";

const prizesUrl = baseUrl + "/prizes";

export function listPrizes(roomId, userId, selectActive = 0) {
  let url = prizesUrl;
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

export function createPrizes(roomId, userId, prizeName, targetPoints) {
  let url = prizesUrl;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      roomId,
      userId,
      prizeName,
      targetPoints,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}