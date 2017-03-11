import * as types from '../constants/ActionTypes';
import storage from '../services/storage';
import config from '../constants/config';

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: false
};

export default function countriesReducer(state = INITIAL_STATE, action = null) {
  const newState = Object.assign({}, state);


  switch(action.type) {
    case types.SAVE_ALBUM:
      newState.data[action.album.id] = action.album;
      storage.setObject(config.localKey, newState.data);
      return newState;

    case types.REMOVE_ALBUM:
      console.log('action', action);
      delete newState.data[action.albumId];
      storage.setObject(config.localKey, newState.data);
      return newState;

    case types.RECEIVE_SAVES:
      return Object.assign({}, state, {isLoading: false, data: action.data, error: false });

    case types.REQUEST_SAVES:
      return Object.assign({}, state, {isLoading: true, data: {data: Object.assign(INITIAL_STATE)}, error: false });

    default:
      return state;
  }
}
