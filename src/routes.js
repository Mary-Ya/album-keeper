import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import SearchContainer from './containers/Search';
import SavedContainer from './containers/Saved';
import NotFound from './components/NotFound';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SearchContainer}/>
    <Route path='saves' component={SavedContainer} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
