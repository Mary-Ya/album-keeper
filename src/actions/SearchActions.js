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

export function fetchAlbums(query) {
  return function(dispatch) {
    dispatch(requestAlbums());
    return axios({
      url: `http://musicbrainz.org/ws/2/release/?query=${query}&fmt=json`,
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
