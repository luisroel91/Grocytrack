import { TRIGGER_LOAD_ANIMATION } from "../constants/action-types";
import { TURN_OFF_LOAD_ANIMATION } from "../constants/action-types";

const initialState = {
    isVisible: false,
};

function loadingAnimationReducer(state = initialState, action) {
    switch (action.type) {
        case TRIGGER_LOAD_ANIMATION:
            return {
                ...state,
                isVisible: true
            }
        case TURN_OFF_LOAD_ANIMATION:
            return {
                ...state,
                isVisible: false
            }
        default:
            return state
    }
}

export default loadingAnimationReducer;