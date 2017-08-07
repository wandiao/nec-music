import React from 'react';
import { BrowserRouter, HashRouter, Switch, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import ExtendRoute from '../components/ExtendRoute'
import App from '../App'
import DRecommend from '../views/discover/Recommend'
import DTopList from '../views/discover/TopList'
import DPlayList from '../views/discover/PlayList'
import DDjRadio from '../views/discover/DjRadio'

import DArtist from '../views/discover/artist/Index'
import DArtistCat from '../views/discover/artist/Cat'
import DArtistRcmd from '../views/discover/artist/Recommend'
import DArtistSigned from '../views/discover/artist/Signed'

import DAlbum from '../views/discover/Album'
import PlayList from '../views/Playlist'
import Song from '../views/Song'
import Program from '../views/Program'

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
		component:DArtist,
		routes:[
			{
				path:'/discover/artist',
				exact:true,
				component:DArtistRcmd
			},
			{
				path:'/discover/artist/cat',
				component:DArtistCat
			},
			{
				path:'/discover/artist/signed',
				component:DArtistSigned
			}

		]
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
	},
	//歌曲详情
	{
		path:'/song',
		component:Song
	},
	//节目详情
	{
		path:'/program',
		component:Program
	}
]


let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const router = (
	<Router history={history}>
		<App>
			<Switch>
				{routes.map((route, i) => (
				  <ExtendRoute key={i} {...route}/>
		    	))}
		    	<Redirect from="/discover" to="/" />
			</Switch>
		</App>
	</Router>
)

export default router;