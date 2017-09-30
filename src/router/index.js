import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ExtendRoute from '../components/ExtendRoute';

import App from '../App';

const NoMatch = () => import('../components/NoMatch');

const DRecommend = () => import('../views/discover/Recommend');

const DTopList = () => import('../views/discover/TopList');
const DPlayList = () => import('../views/discover/PlayList');
const DDjRadio = () => import('../views/discover/djradio/Index');
const DDjRadioRecommend = () => import('../views/discover/djradio/Recommend');
const DDjRadioRank = () => import('../views/discover/djradio/Rank');
const DDjRadioCategory = () => import('../views/discover/djradio/Category');
const DArtist = () => import('../views/discover/artist/Index');
const DArtistCat = () => import('../views/discover/artist/Cat');
const DArtistRcmd = () => import('../views/discover/artist/Recommend');
const DArtistSigned = () => import('../views/discover/artist/Signed');
const DAlbum = () => import('../views/discover/Album');

const PlayList = () => import('../views/Playlist');

const Song = () => import('../views/Song');

const Program = () => import('../views/Program');

const MV = () => import('../views/MV');

const DjRadio = () => import('../views/DjRadio');

const UserHome = () => import('../views/user/Home');
const UserEvent = () => import('../views/user/Event');
const UserFollows = () => import('../views/user/Follows');
const UserFans = () => import('../views/user/Fans');

const Artist = () => import('../views/artist/Index');
const ATop50 = () => import('../views/artist/Top50');
const AAlbum = () => import('../views/artist/Album');
const AMV = () => import('../views/artist/MV');
const ADesc = () => import('../views/artist/Desc');

const MToLogin = () => import('../views/my/ToLogin');

const FToLogin = () => import('../views/friend/ToLogin');

const Search = () => import('../views/search/Index');
const SSong = () => import('../views/search/Song');
const SArtist = () => import('../views/search/Artist');
const SAlbum = () => import('../views/search/Album');
const SMV = () => import('../views/search/MV');
const SLrc = () => import('../views/search/Lrc');
const SPlaylist = () => import('../views/search/Playlist');
const SRadio = () => import('../views/search/Radio');
const SUser = () => import('../views/search/User');

const Album = () => import('../views/Album');


const history = createBrowserHistory();


const routes = [
  // 发现音乐/推荐
  {
    path: '/',
    exact: true,
    component: DRecommend,
  },
  // 发现音乐/排行榜
  {
    path: '/discover/toplist',
    component: DTopList,
  },
  // 发现音乐/歌单
  {
    path: '/discover/playlist',
    component: DPlayList,
  },
  // 发现音乐/主播电台
  {
    path: '/discover/djradio',
    exact: true,
    component: DDjRadio,
  },
  // 发现音乐/主播电台/节目推荐
  {
    path: '/discover/djradio/recommend',
    component: DDjRadioRecommend,
  },
  // 发现音乐/主播电台/节目排行榜
  {
    path: '/discover/djradio/rank',
    component: DDjRadioRank,
  },
  // 发现音乐/主播电台/分类
  {
    path: '/discover/djradio/category',
    component: DDjRadioCategory,
  },
  // 发现音乐/歌手
  {
    path: '/discover/artist',
    component: DArtist,
    routes: [
      // 推荐歌手
      {
        path: '/discover/artist',
        exact: true,
        component: DArtistRcmd,
      },
      // 分类歌手
      {
        path: '/discover/artist/cat',
        component: DArtistCat,
      },
      // 入驻歌手
      {
        path: '/discover/artist/signed',
        component: DArtistSigned,
      },

    ],
  },
  // 发现音乐/新碟上架
  {
    path: '/discover/album',
    component: DAlbum,
  },
  // 歌单详情
  {
    path: '/playlist',
    component: PlayList,
  },
  // 歌曲详情
  {
    path: '/song',
    component: Song,
  },
  // 节目详情
  {
    path: '/program',
    component: Program,
  },
  // 电台详情
  {
    path: '/djradio',
    component: DjRadio,
  }, // mv详情
  {
    path: '/mv',
    component: MV,
  },
  // 专辑详情
  {
    path: '/album',
    component: Album,
  },
  // 用户首页
  {
    path: '/user/home',
    component: UserHome,
  },
  // 用户动态页
  {
    path: '/user/event',
    component: UserEvent,
  },
  // 用户关注页
  {
    path: '/user/follows',
    component: UserFollows,
  },
  // 用户粉丝页
  {
    path: '/user/fans',
    component: UserFans,
  },
  // 歌手详情页
  {
    path: '/artist',
    component: Artist,
    routes: [
      // 歌手热门单曲
      {
        path: '/artist',
        exact: true,
        component: ATop50,
      },
      // 歌手专辑
      {
        path: '/artist/album',
        component: AAlbum,
      },
      // 歌手mv
      {
        path: '/artist/mv',
        component: AMV,
      },
      // 歌手介绍
      {
        path: '/artist/desc',
        component: ADesc,
      },
    ],
  },
  // 我的音乐
  {
    path: '/my',
    component: MToLogin,
  },
  // 朋友
  {
    path: '/friend',
    component: FToLogin,
  },
  // 搜索
  {
    path: '/search',
    component: Search,
    routes: [
      // 搜索歌曲
      {
        path: '/search/song',
        component: SSong,
      },
      // 搜索歌手
      {
        path: '/search/artist',
        component: SArtist,
      },
      // 搜索专辑
      {
        path: '/search/album',
        component: SAlbum,
      },
      // 搜索MV
      {
        path: '/search/mv',
        component: SMV,
      },
      // 搜索lrc
      {
        path: '/search/lrc',
        component: SLrc,
      },
      // 搜索歌单
      {
        path: '/search/playlist',
        component: SPlaylist,
      },
      // 搜索电台
      {
        path: '/search/radio',
        component: SRadio,
      },
      // 搜索用户
      {
        path: '/search/user',
        component: SUser,
      },
    ],
  },
];


const router = (
  <Router history={history}>
    <App history={history}>
      <Switch>
        {routes.map((route, i) => (
          <ExtendRoute key={i} {...route} />
        ))}
        <Redirect from="/my/tologin" to="/my" />
        <Redirect from="/friend/tologin" to="/friend" />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </Router>
);

export default router;