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

//获取音乐详情
export const getSongDetail = ids => axios.get(`song/detail?ids=${ids}`)

//获取音乐歌词
export const getLyric = id => axios.get(`lyric?id=${id}`);

//获取歌单列表
export const getPlayList = ({cat="全部",order="hot",offset=0,limit=20}) => axios.get('top/playlist',{
	params:{
		cat,
		order,
		offset,
		limit
	}
})

//搜索
export const search = (keywords,type=1,limit=30,offset=0) => axios.get('search',{
	params:{
		keywords,
		offset,
		limit,
		type
	}
})

//搜索建议
export const searchSuggest = (keywords,type=1,limit=30,offset=0) => axios.get('search',{
	params:{
		keywords,
		offset,
		limit,
		type
	}
})

