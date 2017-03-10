import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import CountriesContainer from './containers/Search';
import AboutContainer from './containers/About';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={CountriesContainer}/>
    <Route path='saves' component={AboutContainer} />
  </Route>
);

export default routes;
