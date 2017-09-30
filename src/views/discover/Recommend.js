import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from '../../api';
import { numberFormat } from '../../util';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../../store/actions';
import { chunk } from '../../util/array';
import config from '../../config';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      hotRecommends: [],
      topAlbums: [],
      topLists: [],
      artists: [],
      djs: [],
    };
  }
  componentDidMount() {
    // 获取banner数据
    api.getBanner().then(res => {
      if (res.data.code === 200) {
        this.setState({
          banners: res.data.banners,
        });
      }
    });
    // 获取推荐歌单和电台数据
    axios.all([api.getPersonalized(), api.getRecDjprogram()]).then(axios.spread((p, d) => {
      if (p.data.code === 200 && d.data.code === 200) {
        const hotRecommends = p.data.result;
        hotRecommends.splice(3, 0, d.data.result[0]);
        hotRecommends.splice(5, 0, d.data.result[1]);
        hotRecommends.splice(7, 0, d.data.result[2]);
        hotRecommends.splice(-1, 1);
        this.setState({
          hotRecommends,
        });
      }
    }));
    // 获取新碟上架数据
    api.getHotAlbum().then(res => {
      if (res.data.code === 200) {
        let topAlbums = res.data.albums.slice(0, 10);
        topAlbums = chunk(topAlbums, 5);
        topAlbums.unshift(topAlbums[topAlbums.length - 1]);
        topAlbums.push(topAlbums[1]);
        this.setState({
          topAlbums,
        });
      }
    });
    // 获取排行榜数据
    axios.all([api.getTopList(19723756), api.getTopList(3779629), api.getTopList(2884035)]).then(axios.spread((b, x, y) => {
      const topLists = [b.data.result, x.data.result, y.data.result].map(i => {
        i.tracks.forEach(tr => {
          tr.source = `/discover/toplist?id=${i.id}`;
        });
        return i;
      });
      this.setState({
        topLists,
      });
    }));

    // 获取入驻歌手
    api.getArtistsList(5001, undefined, 0, 5).then(res => {
      if (res.data.code === 200) {
        this.setState({
          artists: res.data.artists,
        });
      }
    });
    // 获取热门dj
    api.getDjRecommend().then(res => {
      if (res.data.code === 200) {
        const djs = res.data.djRadios.slice(0, 5).map(i => i.dj);
        this.setState({
          djs,
        });
      }
    });
  }
  render() {
    const { banners, hotRecommends, topAlbums, topLists, artists, djs } = this.state;
    return (
      <div className="recommend-page">
        <Banner banners={banners} />
        <div className="g-bd1 clearfix">
          <MainCon data={{ hotRecommends, topAlbums, topLists }} {...this.props} />
          <Sidebar data={{ artists, djs }} />
        </div>
      </div>
    );
  }
}

// banner
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
    };
    // 切换当前banner
    this.changeIndex = (index) => {
      if (index < 0) {
        index = this.props.banners.length - 1;
      }
      if (index > this.props.banners.length - 1) {
        index = 0;
      }
      this.setState({
        currIndex: index,
      });
    };
    // 自动轮播
    this.autoPlay = () => {
      this.timer = setInterval(() => {
        const currIndex = this.state.currIndex;
        if (currIndex >= this.props.banners.length - 1) {
          this.setState({
            currIndex: 0,
          });
        } else {
          this.setState({
            currIndex: currIndex + 1,
          });
        }
      }, 4000);
    };
    // 暂停自动播放
    this.clear = () => {
      if (this.timer) {
        clearInterval(this.timer);
      }
    };
  }
  componentDidMount() {
    this.autoPlay();
  }
  componentWillUnmount() {
    this.clear();
  }
  render() {
    const { currIndex } = this.state;
    const { banners } = this.props;
    let bannerList = null;
    if (!banners.length) {
      bannerList = <div className="loading"><Spin tip="Loading..." /></div>;
    } else {
      bannerList = banners.map((banner, index) => (
        <a key={index} href={banner.url} className={'b-item ' + (index === currIndex ? 'active' : '')}>
          <img src={banner.pic} alt="" />
        </a>
      ));
    }
    return (
      <div className="n-ban">
        <div className="wrap">
          <div className="ban pr" onMouseEnter={this.clear} onMouseLeave={() => this.autoPlay()}>
            <div className="ban-list">{bannerList}</div>
            <a onClick={() => this.changeIndex(currIndex - 1)} href="javascript:;" className="btnl">&gt;</a>
            <a onClick={() => this.changeIndex(currIndex + 1)} href="javascript:;" className="btnr">&lt;</a>
            <div className="dots">
              {
                banners.map((i, index) => (
                  <a onClick={() => this.changeIndex(index)} className={`pg ${index === currIndex ? 'active' : ''}`} key={index} />
                ))
              }
            </div>
          </div>
          <div className="download pr">
            <a href="" className="btn">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="shadow" />
            <span className="shadowr" />
          </div>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  banners: PropTypes.array,
};

// 左边主体内容
class MainCon extends Component {
  render() {
    const { hotRecommends, topAlbums, topLists } = this.props.data;
    return (
      <div className="g-mn1">
        <div className="g-mn1c">
          <div className="g-wrap3">
            <HotRcmd hotRecommends={hotRecommends} {...this.props} />
            <div className="n-clmnad">
              <a href="javascript:;" className="dm_ad_hover" />
              <img src={`${config.baseUrl}static/img/ad-ex.jpg`} alt="" />
            </div>
            <Disk topAlbums={topAlbums} {...this.props} />
            <Bill topLists={topLists} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
MainCon.propTypes = {
  data: PropTypes.object.isRequired,
};

// 热门推荐
const recCat = ['华语', '流行', '摇滚', '民谣', '电子'];
class HotRcmd extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    // 切换播放列表
    this.changePlaylist = (item) => {
      let playList = null;
      if (!item.program) {
        api.getPlayListDetail(item.id).then(res => {
          if (res.data.code === 200) {
            playList = res.data.playlist;
            if (!playList.tracks.length) {
              return false;
            }
            const tracks = playList.tracks.map(i => {
              i.source = `/playlist?id=${playList.id}`;
              return i;
            });
            dispatch(changePlayList(tracks));
            dispatch(ac(0, playList.tracks[0].id, true));
          }
        });
      } else {
        item.program.source = `/program?id=${item.id}`;
        dispatch(addPlayItem(item.program));
      }
    };
  }

  render() {
    const { hotRecommends } = this.props;
    let hotlist = null;
    if (!hotRecommends.length) {
      hotlist = <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      hotlist = hotRecommends.map((item) => (
        <li key={item.id}>
          <div className="u-cover u-cover-1">
            <img src={item.picUrl} alt="" />
            {item.highQuality ? <i className="u-jp u-icn2 u-icn2-jp3" /> : ''}
            <Link title={item.name} to={item.program ? `/program?id=${item.id}` : `/playlist?id=${item.id}`} className="msk" />
            <div className="bottom">
              <a href="javascript:;" onClick={() => this.changePlaylist(item)} className="icon-play fr" />
              <span className="icon-headset" />
              <span className="nb">{item.playCount ? numberFormat(item.playCount) : numberFormat(item.program.listenerCount)}</span>
            </div>
          </div>
          <p className="dec">
            <a href="javascript:;" className="tit s-fc0">{item.program ? <i className="u-icn u-icn-53" /> : ''} {item.name}</a>
          </p>
        </li>
      ));
    }
    return (
      <div className="n-rcmd">
        <div className="v-hd2">
          <Link to="/discover/playlist" className="tit f-ff2 f-tdn">热门推荐</Link>
          <div className="tab">
            {
              recCat.map((cat, index) => (
                <span key={index}>
                  <Link to={`/discover/playlist?cat=${cat}`} className="s-fc3"> {cat} </Link>
                  {index === recCat.length - 1 ? '' : <span className="line">|</span>}
                </span>
              ))
            }
          </div>
          <span className="more">
            <Link to="/discover/playlist" className="s-fc3">更多</Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <ul className="m-cvrlst clearfix">
          {hotlist}
        </ul>
      </div>
    );
  }
}
HotRcmd.propTypes = {
  hotRecommends: PropTypes.array,
};

// 新碟上架
class Disk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 1,
      changing: true,
    };
    // 切换分组
    this.changeIndex = (index) => {
      if (!this.state.changing) {
        return false;
      }
      this.setState({
        currIndex: index,
      });
      if (index <= 0) {
        setTimeout(() => {
          this.setState({
            currIndex: this.props.topAlbums.length - 2,
            changing: false,
          });
        }, 500);
      } else if (index >= this.props.topAlbums.length - 1) {
        setTimeout(() => {
          this.setState({
            currIndex: 1,
            changing: false,
          });
        }, 500);
      }
      setTimeout(() => {
        this.setState({
          changing: true,
        });
      }, 550);
    };
    // 切换播放列表
    this.changePlaylist = (id) => {
      const { dispatch } = this.props;
      api.getAlbum(id).then(res => {
        if (res.data.code === 200) {
          const songs = res.data.songs.map(i => {
            i.source = `/album?id=${id}`;
            return i;
          });
          if (res.data.album.status < 0) {
            message.error('需要付费，无法播放');
            return false;
          }
          dispatch(changePlayList(songs));
          dispatch(ac(0, songs[0].id, true));
        }
      });
    };
  }
  render() {
    const { topAlbums } = this.props;
    const { currIndex, changing } = this.state;
    let albumList = null;
    if (!topAlbums.length) {
      albumList = <div className="loading"><Spin tip="Loading..." /></div>;
    } else {
      albumList = topAlbums.map((group, index) => (
        <ul key={index} style={{ left: index === currIndex ? '0' : index < currIndex ? '-645px' : '645px', transition: changing ? 'left .5s' : 'none' }}>
          {
            group.map((item, index1) => (
              <li key={index1}>
                <div className="u-cover u-cover-alb1">
                  <img className="j-img" alt="" src={item.picUrl} />
                  <Link title={item.name} to={`/album?id=${item.id}`} className="msk" />
                  <a onClick={() => this.changePlaylist(item.id)} href="javascript:;" className="icon-play fr" title="播放" />
                </div>
                <p className="f-thide"><a href="/album?id=35792020" className="s-fc0 tit">{item.name}</a></p>
                <p className="tit f-thide">
                  <a className="s-fc3" href="">{item.artist.name}</a>
                </p>
              </li>
            ))
          }
        </ul>
      ));
    }
    return (
      <div className="n-news">
        <div className="v-hd2">
          <Link to="/discover/album" className="tit f-ff2 f-tdn">新碟上架</Link>
          <span className="more">
            <Link to="/discover/album" className="s-fc3">更多</Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-disk">
          <div className="inner">
            <a onClick={() => this.changeIndex(currIndex - 1)} href="javascript:;" className="pre s-bg s-bg-7 f-tdn">&nbsp;</a>
            <div className="roll pr">
              {albumList}
            </div>
            <a onClick={() => this.changeIndex(currIndex + 1)} href="javascript:;" className="click-flag nxt s-bg s-bg-8 f-tdn">&nbsp;</a>
          </div>
        </div>
      </div>
    );
  }
}
Disk.propTypes = {
  topAlbums: PropTypes.array,
};

// 排行榜
class Bill extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.changePlaylist = (index) => {
      const currBill = this.props.topLists[index];
      dispatch(changePlayList(currBill.tracks));
      dispatch(ac(0, currBill.tracks[0].id, true));
    };
    this.playSong = (index, subIndex) => {
      const item = this.props.topLists[index].tracks[subIndex];
      if (item.st < 0) {
        message.error('需要付费，无法播放');
        return false;
      }
      dispatch(addPlayItem(item));
    };
  }
  render() {
    const { topLists } = this.props;
    let billList = null;
    if (!topLists.length) {
      billList = <div className="loading"><Spin tip="Loading..." /></div>;
    } else {
      billList = topLists.map((topList, index) => (
        <dl className="blk" key={index}>
          <dt className="top">
            <div className="cver u-cover u-cover-4">
              <img src={topList.coverImgUrl} alt="" />
              <Link to={`/discover/toplist?id=${topList.id}`} className="msk" title={topList.name} />
            </div>
            <div className="tit">
              <Link to={`/discover/toplist?id=${topList.id}`} title={topList.name}>
                <h3 className="f-fs1 f-thide">{topList.name}</h3>
              </Link>
              <div className="btn">
                <a onClick={() => this.changePlaylist(index)} href="javascript:;" className="s-bg s-bg-9 f-tdn">播放</a>
                <a href="javascript:;" className="s-bg s-bg-10 f-tdn">收藏</a>
              </div>
            </div>
          </dt>
          <dd>
            <ol>
              {
                topList.tracks.slice(0, 10).map((item, index1) => (
                  <li key={index1}>
                    <span className={index1 < 3 ? 'no no-top' : 'no'}>{index1 + 1}</span>
                    <Link to={`/song?id=${item.id}`} className="nm s-fc0 f-thide" title={item.name}>{item.name}</Link>
                    <div className="oper">
                      <a onClick={() => this.playSong(index, index1)} href="javascript:;" className="s-bg s-bg-11" />
                      <a href="javascript:;" className="u-icn u-icn-81" />
                      <a href="javascript:;" className="s-bg s-bg-12" />
                    </div>
                  </li>
                ))
              }
            </ol>
            <div className="more">
              <Link to={`/discover/toplist?id=${topList.id}`} className="s-fc0">查看全部&gt;</Link>
            </div>
          </dd>
        </dl>
      ));
    }
    return (
      <div className="n-bill">
        <div className="v-hd2">
          <Link to="/discover/toplist" className="tit f-ff2 f-tdn">榜单</Link>
          <span className="more">
            <Link to="/discover/toplist" className="s-fc3">更多</Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-bilst">
          {billList}
        </div>
      </div>
    );
  }
}
Bill.propTypes = {
  topLists: PropTypes.array,
};

// sidebar
class Sidebar extends Component {
  render() {
    const { artists, djs } = this.props.data;
    let artistsList = null;
    let djsList = null;
    if (artists.length) {
      artistsList = artists.map((artist, index) => (
        <li key={index}>
          <Link to={`/artist?id=${artist.id}`} className="itm f-tdn">
            <div className="head">
              <img className="j-img" alt="" src={artist.img1v1Url} />
            </div>
            <div className="ifo">
              <h4>
                <span className="nm f-fs1 f-ib f-thide">{artist.name}</span>
              </h4>
              <p className="f-thide s-fc3">{artist.briefDesc}</p>
            </div>
          </Link>
        </li>
      ));
    }
    if (djs.length) {
      djsList = djs.map((dj, index) => (
        <li key={index}>
          <Link to={`/user/home?id=${dj.id}`} className="cver">
            <img src={dj.avatarUrl} alt="" />
          </Link>
          <div className="info">
            <p>
              <Link to={`/user/home?id=${dj.id}`} className="nm-icn f-thide s-fc0">{dj.nickname}</Link>
              {
                dj.userType ? <sup className="icn u-icn2 u-icn2-music2 " /> : dj.authStatus ? <sup className="u-icn u-icn-1 " /> : null
              }
            </p>
            <p className="f-thide s-fc3">{dj.description}</p>
          </div>
        </li>
      ));
    }
    return (
      <div className="g-sd1">
        <div className="n-myinfo n-myinfo-1 s-bg s-bg-1">
          <p className="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="javascript:;" className="btn s-bg s-bg-2 f-tdn">用户登录</a>
        </div>
        <div className="n-singer">
          <h3 className="v-hd3">
            <span className="fl">入驻歌手</span>
            <Link to="/discover/artist/signed/" className="more s-fc3">查看全部 &gt;</Link>
          </h3>
          <ul className="n-enter clearfix">
            {artistsList}
          </ul>
          <div>
            <a href="javascript:;" className="u-btn2 u-btn2-1"><i>申请成为网易音乐人</i></a>
          </div>
        </div>
        <div className="n-dj n-dj-1">
          <h3 className="v-hd3">热门DJ</h3>
          <ul className="n-hotdj clearfix">
            {djsList}
          </ul>
        </div>
      </div>
    );
  }
}
Sidebar.propTypes = {
  data: PropTypes.object,
};
function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Recommend);