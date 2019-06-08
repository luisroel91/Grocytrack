import store from "../store/index";
import { triggerPageLoadAnimation } from "../actions/index";
import { resetLoadAnimationState } from "../actions/index";

window.store = store;
window.triggerPageLoadAnimation = triggerPageLoadAnimation;
window.resetLoadAnimationState = resetLoadAnimationState;
