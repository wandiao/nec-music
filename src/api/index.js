import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.reqUrl;
axios.defaults.withCredentials = true;

// 手机登录
export const telLogin = (phone, password) => axios.get(`login/cellphone?phone=${phone}&password=${password}`);

// 刷新登录
export const refresh = (token) => axios.get(`login/refresh?t=${token}`);

// banner
export const getBanner = () => axios.get('banner');

// 推荐歌单
export const getPersonalized = () => axios.get('personalized');

// 推荐电台
export const getRecDjprogram = () => axios.get('personalized/djprogram');

// 获取推荐节目
export const getRecProgram = (offset = 0, limit = 10) => axios.get('program/recommend', {
  params: {
    offset,
    limit,
  },
});

// 获取节目排行榜
export const getTopProgram = (offset = 0, limit = 10) => axios.get('program/toplist', {
  params: {
    offset,
    limit,
  },
});

// 获取节目详情
export const getDjProgramDetail = id => axios.get(`dj/program/detail?id=${id}`);

// 获取节目评论
export const getDjComment = (id, offset = 0, limit = 20) => axios.get('comment/dj', {
  params: {
    id,
    offset: offset * limit,
    limit,
  },
});

// 新碟上架
export const getTopAlbum = (area, offset = 0, limit = 35) => axios.get('top/album', {
  params: {
    offset: offset * limit,
    limit,
    area,
  },
});

// 热门新碟
export const getHotAlbum = () => axios.get('hot/album');

// 排行榜
export const getTops = () => axios.get('toplist');

// 排行榜详情
export const getTopList = idx => axios.get(`top/list?idx=${idx}`);

// 获取热门歌手
export const getTopArtists = (offset = 0, limit = 10) => axios.get('top/artists', {
  params: {
    offset,
    limit,
  },
});

// 获取歌手列表(5001入驻歌手)
export const getArtistsList = (cat = 5001, initial = 66, offset = 0, limit = 20) => axios.get('artists/list', {
  params: {
    cat,
    initial,
    offset: offset * limit,
    limit,
  },
});

// 获取歌手歌曲
export const getArtistSong = id => axios.get(`artists?id=${id}`);

// 获取歌手专辑
export const getArtistAlbum = (id, offset = 0, limit = 12) => axios.get('artist/album', {
  params: {
    id,
    offset: offset * limit,
    limit,
  },
});


// 获取歌手mv
export const getArtistMV = (id, offset = 0, limit = 12) => axios.get('artist/mv', {
  params: {
    id,
    offset: offset * limit,
    limit,
  },
});

// 获取歌手描述
export const getArtistDesc = id => axios.get(`artist/desc?id=${id}`);

// 获取推荐电台
export const getDjRecommend = () => axios.get('dj/recommend');

// 获取歌单详情
export const getPlayListDetail = id => axios.get(`playlist/detail?id=${id}`);

// 获取音乐url
export const getMusicUrl = id => axios.get(`music/url?id=${id}`);

// 获取音乐详情
export const getSongDetail = ids => axios.get(`song/detail?ids=${ids}`);

// 获取歌曲评论
export const getSongComment = (id, offset = 0, limit = 20) => axios.get('comment/music', {
  params: {
    id,
    offset: offset * limit,
    limit,
  },
});

// 获取音乐歌词
export const getLyric = id => axios.get(`lyric?id=${id}`);

// 获取歌单分类
export const getPlayListCat = () => axios.get('playlist/catlist');

// 获取歌单列表
export const getPlayList = ({ cat = '全部', order = 'hot', offset = 0, limit = 35 }) => axios.get('top/playlist', {
  params: {
    cat,
    order,
    offset: offset * limit,
    limit,
  },
});

// 获取歌单评论
export const getPlayListComment = (id, offset = 0, limit = 20) => axios.get('comment/playlist', {
  params: {
    id,
    offset: offset * 20,
    limit,
  },
});

// 搜索
export const search = (keywords, type = 1, offset = 0, limit = 30) => axios.get('search', {
  params: {
    keywords,
    offset: offset * limit,
    limit,
    type,
  },
});

// 搜索建议
export const searchSuggest = (keywords, type = 1, offset = 0, limit = 30) => axios.get('search', {
  params: {
    keywords,
    offset: offset * limit,
    limit,
    type,
  },
});

// 获取电台分类
export const getDjCate = () => axios.get('dj/catelist');

// 获取电台分类推荐
export const getDjRecommendByCate = (type, offset = 0, limit = 4) => axios.get('dj/recommend/type', {
  params: {
    type,
    offset,
    limit,
  },
});

// 获取电台节目列表
export const getDjPrograms = (rid, offset = 0, limit = 5, asc = 0) => axios.get('dj/program', {
  params: {
    rid,
    offset: (offset - 1) * limit,
    limit,
    asc,
  },
});

// 获取电台详情
export const getDjDetail = id => axios.get(`dj/detail?rid=${id}`);

// 获取分类热门电台
export const getHotDjByCat = (cat, offset = 0, limit = 5, order = 0) => axios.get('dj/hot', {
  params: {
    cat,
    offset: offset * limit,
    limit,
    order,
  },
});

// 获取用户信息
export const getUserInfo = uid => axios.get(`user/detail?uid=${uid}`);

// 获取用户电台
export const getUserDj = uid => axios.get(`user/audio?uid=${uid}`);

// 获取用户听歌记录
export const getUserRecord = (uid, type = 0) => axios.get(`user/record?uid=${uid}&type=${type}`);

// 获取用户歌单
export const getUserPlaylist = uid => axios.get(`user/playlist?uid=${uid}`);

// 获取用户动态
export const getUserEvent = (uid, offset = 0, limit = 20) => axios.get('user/event', {
  params: {
    uid,
    offset: offset * limit,
    limit,
  },
});

// 获取用户关注
export const getUserFollows = (uid, offset = 0, limit = 20) => axios.get('user/follows', {
  params: {
    uid,
    offset: offset * limit,
    limit,
  },
});

// 获取用户粉丝列表
export const getUserFans = (uid, offset = 0, limit = 20) => axios.get('user/followeds', {
  params: {
    uid,
    offset: offset * limit,
    limit,
  },
});

// 获取mv详情
export const getMV = id => axios.get(`mv?id=${id}`);

// 获取相似mv
export const getSimiMV = id => axios.get(`simi/mv?mvid=${id}`);

// 获取mv评论
export const getMVComment = (id, offset = 0, limit = 20) => axios.get('comment/mv', {
  params: {
    id,
    offset: offset * 20,
    limit,
  },
});

// 获取专辑详情
export const getAlbum = id => axios.get(`album?id=${id}`);

// 获取专辑评论
export const getAlbumComment = (id, offset = 0, limit = 20) => axios.get('comment/album', {
  params: {
    id,
    offset: offset * 20,
    limit,
  },
});

// 获取最近听歌用户
export const getListenUser = id => axios.get(`simi/user?id=${id}`);

// 给评论点赞
export const commentLike = (id, cid, t, type) => axios.get('comment/like', {
  params: {
    id,
    cid,
    t,
    type,
  },
});

// 新增评论
export const commentAdd = (id, content, type) => axios.get('comment/add', {
  params: {
    id,
    content,
    type,
  },
});

// 删除评论
export const commentDelete = (id, cid, type) => axios.get('comment/delete', {
  params: {
    id,
    cid,
    type,
  },
});

