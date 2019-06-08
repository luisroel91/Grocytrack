import { TRIGGER_LOAD_ANIMATION } from "../constants/action-types";
import { TURN_OFF_LOAD_ANIMATION } from "../constants/action-types";

export function triggerPageLoadAnimation(payload) {
  return { type: TRIGGER_LOAD_ANIMATION, payload };
}

export function resetLoadAnimationState(payload) {
  return { type: TURN_OFF_LOAD_ANIMATION, payload };
}
