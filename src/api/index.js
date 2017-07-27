import axios from 'axios'
import {reqUrl} from '../config'

axios.defaults.baseURL = reqUrl;

//banner
export const getBanner = () => axios.get('banner');

//推荐歌单
export const getPersonalized = () => axios.get('personalized');

//推荐电台
export const getRecDjprogram = () => axios.get('personalized/djprogram');

//新碟上架
export const getTopAlbum = (offset=0,limit=10) => axios.get('top/album',{
	params:{
		offset,
		limit
	}
});

//排行榜
export const getTopList = idx => axios.get(`top/list?idx=${idx}`);

//获取热门歌手
export const getTopArtists = (offset=0,limit=10) => axios.get('top/artists',{
	params:{
		offset,
		limit
	}
});

//获取推荐电台
export const getDjRecommend = () => axios.get('dj/recommend');

//获取歌单详情
export const getPlayListDetail = id => axios.get(`playlist/detail?id=${id}`)

//获取音乐url
export const getMusicUrl = id => axios.get(`music/url?id=${id}`)
