import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { session, federated } from "States/session-reducers";
import { main } from "States/main-reducers";
import { task } from "States/task-reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    session,
    federated,
    main,
    task,
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
