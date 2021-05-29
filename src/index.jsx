import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import Amplify from "@aws-amplify/core";
import config from "./aws-exports.js";

import Main from "Components/Main.jsx";
import { session, federated } from "States/session-reducers.js";

import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(config);

window.onload = function () {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      session,
      federated,
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
