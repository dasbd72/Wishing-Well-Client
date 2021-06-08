import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import Main from "Components/Main";
import { session, federated } from "States/session-reducers";
import { main } from "States/main-reducers";
import { room } from "States/room-reducers";

import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(config);

window.onload = function () {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      session,
      federated,
      main,
      room,
    }),
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById("root")
  );
};
