export const setUser = (user) => {
  var userName = user
    ? user.username || user.name
      ? user.username
        ? user.username
        : user.name
      : ""
    : "";
  var logged = userName === "" ? false : true;
  return {
    type: "@SESSION/SET_USER",
    userName,
    logged,
  };
};

export const setLogged = (logged) => ({
  type: "@SESSION/SET_LOGGED",
  logged,
});
