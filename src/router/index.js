import React from 'react';
import { BrowserRouter, HashRouter,Route, Switch, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import ExtendRoute from '../components/ExtendRoute'

import App from '../App'
import NoMatch from '../components/NoMatch'

import DRecommend from '../views/discover/Recommend'
import DTopList from '../views/discover/TopList'
import DPlayList from '../views/discover/PlayList'
import DDjRadio from '../views/discover/djradio/Index'
import DDjRadioRecommend from '../views/discover/djradio/Recommend'
import DDjRadioRank from '../views/discover/djradio/Rank'
import DDjRadioCategory from '../views/discover/djradio/Category'
import DArtist from '../views/discover/artist/Index'
import DArtistCat from '../views/discover/artist/Cat'
import DArtistRcmd from '../views/discover/artist/Recommend'
import DArtistSigned from '../views/discover/artist/Signed'
import DAlbum from '../views/discover/Album'

import PlayList from '../views/Playlist'

import Song from '../views/Song'

import Program from '../views/Program'

import MV from '../views/MV'

import DjRadio from '../views/DjRadio'

import UserHome from '../views/user/Home'
import UserEvent from '../views/user/Event'
import UserFollows from '../views/user/Follows'
import UserFans from '../views/user/Fans'

import Artist from '../views/artist/Index'
import ATop50 from '../views/artist/Top50'
import AAlbum from '../views/artist/Album'
import AMV from '../views/artist/MV'
import ADesc from '../views/artist/Desc'

import MToLogin from '../views/my/ToLogin'

import FToLogin from '../views/friend/ToLogin'

import Search from '../views/search/Index'
import SSong from '../views/search/Song'
import SArtist from '../views/search/Artist'
import SAlbum from '../views/search/Album'
import SMV from '../views/search/MV'
import SLrc from '../views/search/Lrc'
import SPlaylist from '../views/search/Playlist'
import SRadio from '../views/search/Radio'
import SUser from '../views/search/User'

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
		exact:true,
		component:DDjRadio
	},
	//发现音乐/主播电台/推荐
	{
		path:'/discover/djradio/recommend',
		component:DDjRadioRecommend
	},
	//发现音乐/主播电台/排行榜
	{
		path:'/discover/djradio/rank',
		component:DDjRadioRank
	},
	//发现音乐/主播电台/分类
	{
		path:'/discover/djradio/category',
		component:DDjRadioCategory
	},
	//发现音乐/歌手
	{
		path:'/discover/artist',
		component:DArtist,
		routes:[
			//推荐歌手
			{
				path:'/discover/artist',
				exact:true,
				component:DArtistRcmd
			},
			//分类歌手
			{
				path:'/discover/artist/cat',
				component:DArtistCat
			},
			//入驻歌手
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
	},
	//电台详情
	{
		path:'/djradio',
		component:DjRadio
	},//mv详情
	{
		path:'/mv',
		component:MV
	},
	//用户首页
	{
		path:'/user/home',
		component:UserHome
	},
	//用户动态页
	{
		path:'/user/event',
		component:UserEvent
	},
	//用户关注页
	{
		path:'/user/follows',
		component:UserFollows
	},
	//用户粉丝页
	{
		path:'/user/fans',
		component:UserFans
	},
	//歌手详情页
	{
		path:'/artist',
		component:Artist,
		routes:[
			//歌手热门单曲
			{
				path:'/artist',
				exact:true,
				component:ATop50
			},
			//歌手专辑
			{
				path:'/artist/album',
				component:AAlbum
			},
			//歌手mv
			{
				path:'/artist/mv',
				component:AMV
			},
			//歌手介绍
			{
				path:'/artist/desc',
				component:ADesc
			}
		]
	},
	//我的音乐
	{
		path:'/my',
		component:MToLogin
	},
	//朋友
	{
		path:'/friend',
		component:FToLogin
	},
	//搜索
	{
		path:'/search',
		component:Search,
		routes:[
			//搜索歌曲
			{
				path:'/search/song',
				component:SSong
			},
			//搜索歌手
			{
				path:'/search/artist',
				component:SArtist
			},
			//搜索专辑
			{
				path:'/search/album',
				component:SAlbum
			},
			//搜索MV
			{
				path:'/search/mv',
				component:SMV
			},
			//搜索lrc
			{
				path:'/search/lrc',
				component:SLrc
			},
			//搜索歌单
			{
				path:'/search/playlist',
				component:SPlaylist
			},
			//搜索电台
			{
				path:'/search/radio',
				component:SRadio
			},
			//搜索用户
			{
				path:'/search/user',
				component:SUser
			}
		]
	}
]


let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const router = (
	<Router history={history}>
		<App history={history}>
			<Switch>
				{routes.map((route, i) => (
				  <ExtendRoute key={i} {...route}/>
		    	))}
		    	<Redirect from="/my/tologin" to="/my" />
		    	<Redirect from="/friend/tologin" to="/friend" />
		    	<Route component={NoMatch}/>
			</Switch>
		</App>
	</Router>
)

export default router;