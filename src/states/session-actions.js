export function setUser(user) {
  var userName =
    user.username || user.name
      ? user.username
        ? user.username
        : user.name
      : "";
  var logged = userName === "" ? false : true;
  return {
    type: "@SESSION/SET_USER",
    userName,
    logged,
  };
}
export function setLogged(logged) {
  return {
    type: "@SESSION/SET_LOGGED",
    logged,
  };
}
