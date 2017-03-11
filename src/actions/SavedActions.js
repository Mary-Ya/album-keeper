import * as types from '../constants/ActionTypes';
import config from '../constants/config';
import storage from '../services/storage';

export function removeAlbum(album) {
  return {
    type: types.REMOVE_ALBUM,
    albumId: album.id
  };
}

export function saveAlbum(album) {
  return {
    type: types.SAVE_ALBUM,
    album
  };
}

export function loadSaved() {
  return {
    type: types.RECEIVE_SAVES,
    data: storage.getObject(config.localKey)
  };
}
