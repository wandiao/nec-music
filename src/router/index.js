import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from '../App'
import Recommend from '../views/discover/Recommend'

const history = createBrowserHistory();


const routes = [
	{
		path:'/',
		component:Recommend
	}
]


let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const router = (
	<Router>
		<App>
			<Switch>
				{routes.map((route, index) => (
				    <Route
					    key={index}
					    {...route}
				    />
		    	))}
		    	<Redirect from="/discover" to="/" />
			</Switch>
		</App>
	</Router>
)

export default router;