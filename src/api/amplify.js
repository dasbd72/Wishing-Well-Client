import { Auth } from "aws-amplify";
import { setSignOut, setUser, setErrSignIn } from "States/session-actions";
import store from "States/store";

export function reloadUser() {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      store.dispatch(setUser(user));
    })
    .catch((err) => {
      console.log(err);
    });
}
export function signOut() {
  Auth.signOut();
  store.dispatch(setSignOut());
}
export function signIn(email, password) {
  Auth.signIn(email, password)
    .then((user) => store.dispatch(setUser(user)))
    .catch((err) => {
      store.dispatch(setErrSignIn(err.message));
    });
}
