import React from 'react';
import { Route } from 'react-router-dom';
import Bundle from './Bundle';

// const ExtendRoute = (route) => (
//   <Route path={route.path} exact={route.exact} render={props => (
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )
const ExtendRoute = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      <Bundle load={route.component}>
        {(Comp) => <Comp {...props} routes={route.routes} />}
      </Bundle>
    )}
  />
);
export default ExtendRoute;
