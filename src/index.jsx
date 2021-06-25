import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import Main from "Components/Main";
import store from "States/store";

import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(config);

window.onload = function () {
  console.log("index.jsx");
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById("root")
  );
};
