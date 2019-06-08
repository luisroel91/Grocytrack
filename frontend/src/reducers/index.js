import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loadingAnimationReducer from "./loadingAnimationReducer";

export default history =>
  combineReducers({
    isVisible: loadingAnimationReducer,
    router: connectRouter(history)
  });
