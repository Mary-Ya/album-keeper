import * as types from '../constants/ActionTypes';
import storage from '../services/storage';
import config from '../constants/config';

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: false
};

export default function countriesReducer(state = INITIAL_STATE, action = null) {
  const newState = Object.assign({}, state.data);

  switch(action.type) {
    case types.ADD_ALBUM:
      newState[action.payload.album.id] = action.payload.album;
      storage.setObject(config.localKey, newState);
      return Object.assign({}, state, {isLoading: false, data: newState, error: false });

    case types.REMOVE_ALBUM:
      delete newState[action.payload.id];
      storage.setObject(config.localKey, newState);
      return Object.assign({}, state, {isLoading: false, data: newState, error: false });

    case types.RECEIVE_SAVES:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: false });

    case types.REQUEST_SAVES:
      return Object.assign({}, state, {isLoading: true, data: Object.assign(INITIAL_STATE), error: false });

    default:
      return state;
  }
}
