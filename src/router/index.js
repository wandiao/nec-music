import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from '../App'
import DRecommend from '../views/discover/Recommend'
import DTopList from '../views/discover/TopList'
import DPlayList from '../views/discover/PlayList'
import DDjRadio from '../views/discover/DjRadio'
import DArtist from '../views/discover/Artist'
import DAlbum from '../views/discover/Album'
import PlayList from '../views/playlist/PlayList'

const history = createBrowserHistory();


const routes = [
	//发现音乐/推荐
	{
		path:'/',
		exact:true,
		component:DRecommend
	},
	//发现音乐/排行榜
	{
		path:'/discover/toplist',
		component:DTopList
	},
	//发现音乐/歌单
	{
		path:'/discover/playlist',
		component:DPlayList
	},
	//发现音乐/主播电台
	{
		path:'/discover/djradio',
		component:DDjRadio
	},
	//发现音乐/歌手
	{
		path:'/discover/artist',
		component:DArtist
	},
	//发现音乐/新碟上架
	{
		path:'/discover/album',
		component:DAlbum
	},
	//歌单详情
	{
		path:'/playlist',
		component:PlayList
	}
]


let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const router = (
	<Router history={history}>
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