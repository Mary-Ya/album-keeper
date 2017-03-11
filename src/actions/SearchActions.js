import axios from 'axios';

import * as types from '../constants/ActionTypes';

function requestAlbums() {
  return {
    type: types.REQUEST_RESULTS
  };
}

function receiveAlbums(data) {
  return{
    type: types.RECEIVE_RESULTS,
    payload: {
      data
    }
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_ERROR,
    payload: {
      data
    }
  };
}

export function saveAlbum(album) {
  return {
    type: types.SAVE_ALBUM,
    album
  };
}

export function fetchAlbums(url) {
  return function(dispatch) {
    dispatch(requestAlbums());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      dispatch(receiveAlbums(response.data.releases));
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
