import React from 'react';
import {Route} from 'react-router-dom';

const ExtendRoute = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)
export default ExtendRoute