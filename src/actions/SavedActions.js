import * as types from '../constants/ActionTypes';
import config from '../constants/config';
import storage from '../services/storage';

export function removeSaved(id) {
  return {
    type: types.REMOVE_ALBUM,
    id
  };
}

export function loadSaved() {
  return function(dispatch) {
    console.log('WOOO', storage.getObject(config.localKey));
    return {
      type: types.RECEIVE_SAVES,
      data: storage.getObject(config.localKey)
    };
  };
}
