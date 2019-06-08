import { combineReducers } from "redux";

import loadingAnimationReducer from "./loadingAnimationReducer";

const rootReducer = combineReducers({
  isVisible: loadingAnimationReducer
});

export default rootReducer;
