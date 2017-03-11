import * as types from '../constants/ActionTypes';
import storage from '../services/storage';
import config from '../constants/config';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false
};

export default function countriesReducer(state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case types.RECEIVE_ERROR:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: true});

    case types.RECEIVE_RESULTS:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: false });

    case types.REQUEST_RESULTS:
      return Object.assign({}, state, {isLoading: true, error: false });

    default:
      return state;
  }
}
