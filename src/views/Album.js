import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dateFormat, formatSongTime } from '../util/date';
import * as api from '../api';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../store/actions';
import { download } from '../util/query';

import Comments from '../components/Comments';
import DlTemp from '../components/DlTemp';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: null,
      songs: [],
      commentData: null,
      oAlbums: [],
      showDesc: false,
    };
    // 评论分页
    this.choosePage = (page, pageSize, pos) => {
      const id = qs.parse(this.props.location.search).id;
      api.getAlbumComment(id, page - 1).then(res => {
        if (res.data.code === 200) {
          window.scrollTo.apply(null, pos);
          this.setState({
            commentData: res.data,
          });
        }
      });
    };
    // 是否展示详细描述
    this.toggleDesc = () => {
      this.setState(ps => {
        return {
          showDesc: !ps.showDesc,
        };
      });
    };
    // 播放专辑歌曲
    this.changePlaylist = () => {
      if (this.state.album.status < 0) {
        message.error('需要付费，无法播放');
        return false;
      }
      const tracks = this.state.songs;
      this.props.dispatch(changePlayList(tracks));
      this.props.dispatch(ac(0, tracks[0].id, true));
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    if (!id) {
      return false;
    }
    api.getAlbum(id).then(res => {
      if (res.data.code === 200) {
        const songs = res.data.songs.map(i => {
          i.source = `/album?id=${i.id}`;
          return i;
        });
        this.setState({
          album: res.data.album,
          songs,
        });
        return api.getArtistAlbum(res.data.album.artist.id, 0, 5);
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          oAlbums: res.data.hotAlbums,
        });
      }
    });
    api.getAlbumComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location === nextProps.location) {
      return false;
    }
    const id = qs.parse(nextProps.location.search).id;
    if (!id) {
      return false;
    }
    this.setState({
      album: null,
    });
    api.getAlbum(id).then(res => {
      if (res.data.code === 200) {
        const songs = res.data.songs.map(i => {
          i.source = `/album?id=${i.id}`;
          return i;
        });
        this.setState({
          album: res.data.album,
          songs,
        });
        return api.getArtistAlbum(res.data.album.artist.id, 0, 5);
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          oAlbums: res.data.hotAlbums,
        });
      }
    });
    api.getAlbumComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
  }
  render() {
    const { album, songs, commentData, oAlbums, showDesc } = this.state;
    if (!album) {
      return (
        <div className="g-bd4 clearfix">
          <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
        </div>
      );
    }
    return (
      <div className="g-bd4 f-cb p-share">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="m-info f-cb">
                <div className="cover u-cover u-cover-alb">
                  <img src={album.picUrl} alt="" />
                  <span className="msk" />
                </div>
                <div className="cnt">
                  <div className="cntc">
                    <div className="topblk">
                      <div className="hd f-cb">
                        <i className="f-fl u-icn u-icn-16" />
                        <div className="tit">
                          <h2 className="f-ff2">{album.name}</h2>
                        </div>
                      </div>
                      <p className="intr">
                        <b>歌手：</b>
                        <span title={album.artist.name}><Link className="s-fc7" to={`/artist?id=${album.artist.id}`}>{album.artist.name}</Link></span>
                      </p>
                      <p className="intr"><b>发行时间：</b>{dateFormat(album.publishTime, 'yyyy-MM-dd')}</p>
                      <p className="intr"><b>发行公司：</b>{album.company}</p>
                    </div>
                    <div className="btns clearfix">
                      <a onClick={this.changePlaylist} href="javascript:;" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
                        <i>
                          <em className="ply" />播放
                        </i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-add" />
                      <a href="javascript:;" className="u-btni u-btni-fav">
                        <i>收藏</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-share">
                        <i>({album.info.shareCount})</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-dl ">
                        <i>下载</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-cmmt ">
                        <i>({album.info.commentCount})</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="n-albdesc">
                <h3>专辑介绍：</h3>
                <div className={showDesc ? 'f-hide' : 'f-brk'}>
                  {
                    album.description ?
                      (album.description.substring(0, 100) + '...').split('\n').map((i, index) => (
                        <p key={index}>{i}</p>
                      )) :
                      <p className="f-tc">暂无介绍</p>
                  }
                </div>
                <div className={showDesc ? 'f-brk' : 'f-hide'}>
                  {
                    album.description ?
                      album.description.split('\n').map((i, index) => (
                        <p className="f-brk" key={index}>{i}</p>
                      )) :
                      <p className="f-tc">暂无介绍</p>
                  }
                </div>
                <div className="f-cb" style={{ display: album.description && album.description.length > 100 ? 'block' : 'none' }}>
                  <a onClick={this.toggleDesc} href="javascript:;" className="s-fc7 f-fr">{showDesc ? '收起' : '展开'}<i className={showDesc ? 'u-icn u-icn-70' : 'u-icn u-icn-69'} /></a>
                </div>
              </div>
              <div className="n-songtb">
                <div className="u-title u-title-1 f-cb">
                  <div className="out s-fc3">
                    <i className="u-icn u-icn-95 f-fl" />
                    <a className="s-fc7 des">生成外链播放器</a>
                  </div>
                  <h3><span className="f-ff2">包含歌曲列表</span></h3>
                  <span className="sub s-fc3">{album.size}首歌</span>
                </div>
                <SongList tracks={songs} {...this.props} />
              </div>
              <Comments type="playlist" onChange={this.choosePage} id={album.id} data={commentData} />
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            {/* <h3 className="u-hd3">
              <span className="f-fl">喜欢这张专辑的人</span>
            </h3>
            <div className="m-piclist f-cb">
            {Array(8).fill(1).map((i,index) =>
              <li key={index}>
                <a href="/user/home?id=54437668" className="f-tdn" title="Mrs-mango">
                  <img src="http://p1.music.126.net/c_stzJqZwDrWvkuC9WvNLw==/18998461416627079.jpg?param=40y40" />
                </a>
              </li>
            )}
            </div> */}
            <h3 className="u-hd3">
              <span className="f-fl">Ta的其他热门专辑</span>
              <Link to={`/artist/album?id=${album.artist.id}`} className="more f-ff1 s-fc3">全部&gt;</Link>
            </h3>
            <div className="m-rctlist f-cb">
              {
                oAlbums.length ?
                  oAlbums.map((i, index) => (
                    <li key={index}>
                      <div className="cver u-cover u-cover-3">
                        <Link to={`/album?id=${i.id}`} title={i.name}>
                          <img src={i.picUrl} alt="" />
                        </Link>
                      </div>
                      <div className="info">
                        <p className="f-thide"><Link className="sname f-fs1 s-fc0" to={`/album?id=${i.id}`} title={i.name}>{i.name}</Link></p>
                        <p className="s-fc3">{dateFormat(i.publishTime, 'yyyy-MM-dd')}</p>
                      </div>
                    </li>
                  )) :
                  <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>
              }
            </div>
            <DlTemp />
          </div>
        </div>
      </div>
    );
  }
}

// 音乐列表
class SongList extends Component {
  constructor(props) {
    super(props);
    // 播放歌曲
    this.playSong = (index) => {
      const item = this.props.tracks[index];
      if (item.st < 0) {
        message.error('需要付费，无法播放');
      } else {
        this.props.dispatch(addPlayItem(item));
      }
    };
  }
  render() {
    const { tracks, currMusic } = this.props;
    if (!tracks.length) {
      return null;
    }
    return (
      <div className="track-list">
        <table className="m-table">
          <thead>
            <tr>
              <th className="first w1">
                <div className="wp" />
              </th>
              <th>
                <div className="wp">歌曲标题</div>
              </th>
              <th className="w2">
                <div className="wp">时长</div>
              </th>
              <th className="w3">
                <div className="wp">歌手</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((track, index) => (
                <tr key={index}>
                  <td className="left">
                    <div className="hd">
                      <span onClick={() => this.playSong(index)} className={currMusic.info && currMusic.info.id === track.id ? 'ply curr' : 'ply'} />
                      <span className="num">{index + 1}</span>
                    </div>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="tt">
                        <div className="ttc">
                          <div className="txt">
                            <Link to={`/song?id=${track.id}`}>
                              <b title={track.name}>{track.name}</b>
                            </Link>
                            {track.alia.length ? <span title={track.alia.join('/')} className="s-fc8"> - ({track.alia.join('/')})</span> : null}
                            {track.mv ? <Link to={`/mv?id=${track.mv}`} className="mv">mv</Link> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="s-fc3">
                    <span className="u-dur">{formatSongTime(track.dt / 1000)}</span>
                    <div className="opt hshow">
                      <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                      <span className="icn icn-fav" />
                      <span className="icn icn-share" />
                      <span onClick={() => download(track.id)} className="icn icn-dl" />
                    </div>
                  </td>
                  <td>
                    <div className="text" title={track.ar.map(i => i.name).join('/')}>
                      {
                        track.ar.map((i, index1) => (
                          <span key={index1}>
                            <Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index1 >= track.ar.length - 1 ? null : '/'}
                          </span>
                        ))
                      }
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
SongList.propTypes = {
  currMusic: PropTypes.object.isRequired,
  tracks: PropTypes.array.isRequired,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Album);