import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchResults from './searchResults';
import savedAlbums from './savedAlbums';

const rootReducer = combineReducers({
  searchResults,
  savedAlbums,
  routing: routerReducer
});

export default rootReducer;
