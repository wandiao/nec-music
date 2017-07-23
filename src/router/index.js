import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from '../App'
import Recommend from '../views/discover/Recommend'
import TopList from '../views/discover/TopList'
import PlayList from '../views/discover/PlayList'
import DjRadio from '../views/discover/DjRadio'
import Artist from '../views/discover/Artist'
import Album from '../views/discover/Album'

const history = createBrowserHistory();


const routes = [
	//推荐
	{
		path:'/',
		exact:true,
		component:Recommend
	},
	//排行榜
	{
		path:'/discover/toplist',
		component:TopList
	},
	//歌单
	{
		path:'/discover/playlist',
		component:PlayList
	},
	//主播电台
	{
		path:'/discover/djradio',
		component:DjRadio
	},
	//歌手
	{
		path:'/discover/artist',
		component:Artist
	},
	//新碟上架
	{
		path:'/discover/album',
		component:Album
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