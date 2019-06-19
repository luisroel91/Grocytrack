import { TRIGGER_LOAD_ANIMATION } from "../constants/action-types";
import { SET_USER_DEFAULT_PAGE } from "../constants/action-types";

export function triggerPageLoadAnimation(payload) {
  return { type: TRIGGER_LOAD_ANIMATION, payload };
}

export function setDefaultPageOnLogin(payload) {
  return { type: SET_USER_DEFAULT_PAGE};
}
