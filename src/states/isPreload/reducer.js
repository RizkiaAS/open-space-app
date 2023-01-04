/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

function isPreloadReducer(isPreload = false, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
