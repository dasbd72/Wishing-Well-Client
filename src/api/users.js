import axios from "axios";
import baseUrl from "Api/backend";

const usersBaseUrl = baseUrl + "/users";

export function userJoinRoom(roomId, userId, role) {
  let url = usersBaseUrl;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      roomId,
      userId,
      role,
    })
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);
      return res.data;
    });
}

export function getUserRole(roomId, userId) {
  let url = usersBaseUrl;
  let query = [];
  query.push(`roomId=${roomId}`);
  query.push(`userId=${userId}`);
  if (query.length) url += "?" + query.join("&");

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function userChoosePrize(prizeId, roomId) {
  let url = usersBaseUrl + `/${prizeId}/${roomId}`;
  console.log("choose prize");
  console.log(`Making POST request to: ${url}`);

  return axios.post(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function getChosenPrize(roomId, userId) {
  let url = baseUrl + "/chosen";
  let query = [];
  query.push(`roomId=${roomId}`);
  query.push(`userId=${userId}`);
  if (query.length) url += "?" + query.join("&");

  console.log(`Making GET request to: ${url}`);

  return axios
    .get(url)
    .then((res) => {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function registerUserName(userId, userName) {
  let url = baseUrl + "/usersRegister";

  console.log(`Making POST request to: ${url}`);

  return axios.post(url, { userId, userName }).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function getUserInfo(userId) {
  let url = baseUrl + `/usersinfo?userId=${userId}`;

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}

export function updateUserName(userId, userName) {
  let url = baseUrl + "/usersChangeName";

  console.log(`Making POST request to: ${url}`);

  return axios.post(url, { userId, userName }).then((res) => {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}
