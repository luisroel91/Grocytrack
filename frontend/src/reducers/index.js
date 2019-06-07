import { combineReducers } from 'redux';

import loadingAnimationReducer from '../reducers/loadingAnimationReducer';

const rootReducer = combineReducers(
    {
        isVisible: loadingAnimationReducer,
    }
)

export default rootReducer;