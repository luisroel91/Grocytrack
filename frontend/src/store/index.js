import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "../reducers";

export const history = createBrowserHistory();

export default function configureStore(preloadedstate) {
  const store = createStore(
    createRootReducer(history),
    preloadedstate,
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}
