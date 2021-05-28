import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import Main from "Components/Main.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const federated = {
  googleClientId:
    "200959026416-psvbb7e09g5e74noktdvdd9sq0js8um1.apps.googleusercontent.com",
};

window.onload = function () {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({}),
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
  console.log(store.getState());
  ReactDOM.render(
    <Provider>
      <Main federated={federated} />
    </Provider>,
    document.getElementById("root")
  );
};
