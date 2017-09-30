import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import qs from 'query-string';
import PropTypes from 'prop-types';

import * as api from '../api';
import { dateFormat, formatSongTime } from '../util/date';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../store/actions';
import { download } from '../util/query';

import Comments from '../components/Comments';

// 歌单详情页面
class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plDetail: null,
      showMoreDesc: false,
      commentData: null,
      hotList: [],
    };
    this.choosePage = (page, pageSize, pos) => {
      const id = qs.parse(this.props.location.search).id;
      api.getPlayListComment(id, page - 1).then(res => {
        if (res.data.code === 200) {
          window.scrollTo.apply(null, pos);
          this.setState({
            commentData: res.data,
          });
        }
      });
    };
    // 播放歌单
    this.changePlaylist = () => {
      const plDetail = this.state.plDetail;
      const songs = Object.assign([], plDetail.tracks);
      songs.forEach(i => {
        i.source = `/playlist?id=${plDetail.id}`;
      });
      this.props.dispatch(changePlayList(songs));
      this.props.dispatch(ac(0, songs[0].id, true));
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    if (!id) {
      return false;
    }
    api.getPlayListDetail(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          plDetail: res.data.playlist,
        });
      }
    });
    api.getPlayListComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
    api.getPlayList({
      limit: 5,
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotList: res.data.playlists,
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
      plDetail: null,
      showMoreDesc: false,
      commentData: null,
      hotList: [],
    });
    api.getPlayListDetail(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          plDetail: res.data.playlist,
        });
      }
    });
    api.getPlayListComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
    api.getPlayList({
      limit: 5,
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotList: res.data.playlists,
        });
      }
    });
  }
  render() {
    const { plDetail, showMoreDesc, commentData, hotList } = this.state;
    let hotListEl = null;
    if (!plDetail) {
      return (
        <div className="g-bd4 clearfix">
          <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>;
        </div>
      );
    }
    if (!hotList.length) {
      hotListEl = null;
    } else {
      hotListEl = (
        <ul className="m-rctlist f-cb">
          {
            hotList.map((i, index) => (
              <li key={index}>
                <div className="cver u-cover u-cover-3">
                  <a href="">
                    <img src={i.coverImgUrl} alt="" />
                  </a>
                </div>
                <div className="info">
                  <p className="f-thide">
                    <Link to={`playlist?id=${i.id}`} className="sname f-fs1 s-fc0">{i.name}</Link>
                  </p>
                  <p>
                    <span className="by s-fc4">by</span>
                    <Link to={`/user/home?id=${i.creator.userId}`} className="nm nm f-thide s-fc3">{i.creator.nickname}</Link>
                    {i.creator.expertTags ? <sup className="u-icn u-icn-84" /> : null}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }

    return (
      <div className="g-bd4 clearfix">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="m-info clearfix">
                <div className="cover u-cover u-cover-dj">
                  <img alt="" src={plDetail.coverImgUrl} />
                  <span className="msk" />
                </div>
                <div className="cnt">
                  <div className="cntc">
                    <div className="hd clearfix">
                      <i className="f-fl u-icn u-icn-13" />
                      <div className="tit">
                        <h2 className="f-ff2 f-brk">{plDetail.name}</h2>
                      </div>
                    </div>
                    <div className="user clearfix">
                      <a className="face">
                        <img src={plDetail.creator.avatarUrl} alt="" />
                      </a>
                      <span className="name">
                        <a href="/user/home?id=59291942" className="s-fc7">{plDetail.creator.nickname}</a>
                      </span>
                      <sup className="u-icn u-icn-84 " />
                      <span className="time s-fc4">{dateFormat(plDetail.createTime, 'yyyy-MM-dd')}&nbsp;创建</span>
                    </div>
                    <div className="btns clearfix">
                      <a onClick={this.changePlaylist} href="javascript:;" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
                        <i>
                          <em className="ply" />播放
                        </i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-add" />
                      <a href="javascript:;" className="u-btni u-btni-fav ">
                        <i>({plDetail.subscribedCount})</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-share">
                        <i>({plDetail.shareCount})</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-dl ">
                        <i>下载</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-cmmt ">
                        <i>({plDetail.commentCount})</i>
                      </a>
                    </div>
                    <div className="tags clearfix">
                      <b>标签：</b>
                      {
                        plDetail.tags.map((tag, index) => (
                          <Link to={`/discover/playlist?cat=${tag}&order=hot`} key={index} className="u-tag">
                            <i>{tag}</i>
                          </Link>
                        ))
                      }
                    </div>
                    <p className="intr f-brk" style={{ display: showMoreDesc ? 'none' : 'block' }}>
                      <b>介绍：</b>
                      <span dangerouslySetInnerHTML={{ __html: (plDetail.description.substring(0, 98) + '...').replace(/\n/g, '<br />') }} />
                    </p>
                    <p className="intr f-brk" style={{ display: showMoreDesc ? 'block' : 'none' }}>
                      <b>介绍：</b>
                      <span dangerouslySetInnerHTML={{ __html: plDetail.description.replace(/\n/g, '<br />') }} />
                    </p>
                    <div className={plDetail.description.length <= 98 ? 'f-cb f-hide' : 'f-cb'}>
                      <a onClick={() => this.setState({ showMoreDesc: !showMoreDesc })} href="javascript:;" className="s-fc7 f-fr">
                        {showMoreDesc ? <span>收起 <i className="u-icn u-icn-70" /></span> : <span>展开 <i className="u-icn u-icn-69" /></span>}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="n-songtb">
                <div className="u-title u-title-1 f-cb">
                  <h3>
                    <span className="f-ff2">歌曲列表</span>
                  </h3>
                  <span className="sub s-fc3">
                    <span>{plDetail.tracks.length}</span>首歌
                  </span>
                  <div className="more s-fc3">
                    播放：<strong className="s-fc6">{plDetail.playCount}</strong>次
                  </div>
                  <div className="out out-list s-fc3">
                    <i className="u-icn u-icn-95 f-fl" />
                    <a href="javascript:;" className="des s-fc7">生成外链播放器</a>
                  </div>
                </div>
                <SongList {...this.props} tracks={plDetail.tracks} />
              </div>
              <Comments userInfo={this.props.userInfo} type={2} onChange={this.choosePage} id={plDetail.id} data={commentData} />
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            <div className="m-sidead f-hide" />
            <h3 className="u-hd3">
              <span className="f-fl">热门歌单</span>
            </h3>
            {hotListEl}
            <div className="m-multi">
              <h3 className="u-hd3">
                <span className="f-fl">网易云音乐多端下载</span>
              </h3>
              <ul className="bg">
                <li>
                  <a href="" className="ios" />
                </li>
                <li>
                  <a href="" className="pc" />
                </li>
                <li>
                  <a href="" className="aos" />
                </li>
              </ul>
              <p className="s-fc4">同步歌单，随时畅听320k好音乐</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayList.propTypes = {
  userInfo: PropTypes.object,
};

// 音乐列表
class SongList extends Component {
  // 播放音乐
  playSong = (index) => {
    const item = Object.assign({}, this.props.tracks[index]);
    const id = qs.parse(this.props.location.search).id;
    item.source = `/playlist?id=${id}`;
    if (item.st < 0) {
      message.error('需要付费，无法播放');
      return false;
    }
    this.props.dispatch(addPlayItem(item));
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
              <th className="w4">
                <div className="wp">专辑</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((track, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even' : null}>
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
                  <td>
                    <div className="text">
                      <a href={`/album?id=${track.al.id}`} title={track.al.name}>{track.al.name}</a>
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
  tracks: PropTypes.array,
  currMusic: PropTypes.object,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
    userInfo: state.userInfo,
  };
}

export default connect(select)(PlayList);
