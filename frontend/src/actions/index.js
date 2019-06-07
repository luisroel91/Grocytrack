import { TRIGGER_LOAD_ANIMATION } from "../constants/action-types";

export function triggerPageLoadAnimation(payload) {
    return { type: TRIGGER_LOAD_ANIMATION, payload }
}

