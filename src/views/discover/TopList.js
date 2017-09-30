import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Comments from '../../components/Comments';
import * as api from '../../api';
import { dateFormat } from '../../util/date';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../../store/actions';

// 排行榜
class TopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureList: [],
      globalList: [],
      currId: 19723756,
      listDetail: null,
      commentData: null,
    };
    // 评论分页
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
    // 播放排放榜
    this.changePlaylist = () => {
      const id = qs.parse(this.props.location.search).id;
      const tracks = this.state.listDetail.tracks.map((i) => {
        if (id) {
          i.source = `/discover/toplist?id=${id}`;
        } else {
          i.source = '/discover/toplist';
        }
        return i;
      });
      this.props.dispatch(changePlayList(tracks));
      this.props.dispatch(ac(0, tracks[0].id, true));
    };
  }
  componentDidMount() {
    let id = qs.parse(this.props.location.search).id;
    if (id === undefined) {
      id = 19723756;
    }
    this.setState({
      currId: id,
    });
    api.getTops().then(res => {
      if (res.data.code === 200) {
        const featureList = res.data.list.filter(i => i.ToplistType);
        const globalList = res.data.list.filter(i => !i.ToplistType);
        this.setState({
          featureList,
          globalList,
        });
        return api.getTopList(id);
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          listDetail: res.data.result,
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
  }
  componentWillReceiveProps(np) {
    if (this.props.location === np.location) {
      return false;
    }
    let id = qs.parse(np.location.search).id;
    if (id === undefined) {
      id = 19723756;
    }
    this.setState({
      currId: id,
      listDetail: null,
    });
    api.getTopList(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          listDetail: res.data.result,
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
  }
  render() {
    const { listDetail, commentData, featureList, globalList, currId } = this.state;
    let main;
    let topList;
    if (!featureList.length || !globalList.length) {
      topList = null;
    } else {
      topList = (
        <div className="n-minelst n-minelst-2">
          <h2 className="f-ff1">云音乐特色榜</h2>
          <ul className="clearfix">
            {
              featureList.map((i) => (
                <li onClick={() => this.props.history.push(`/discover/toplist?id=${i.id}`)} key={i.id} className={i.id === currId ? 'mine selected' : 'mine'}>
                  <div className="item clearfix">
                    <div className="left">
                      <Link className="avatar" to={`/discover/toplist?id=${i.id}`}>
                        <img src={i.coverImgUrl} alt={i.name} />
                        <span className="msk" />
                      </Link>
                    </div>
                    <p className="name">
                      <Link to={`/discover/toplist?id=${i.id}`} className="s-fc0">{i.name}</Link>
                    </p>
                    <p className="s-fc4">{i.updateFrequency}</p>
                  </div>
                </li>
              ))
            }
          </ul>
          <h2 className="scd f-ff1">全球媒体榜</h2>
          <ul className="clearfix">
            {
              globalList.map((i) => (
                <li onClick={() => this.props.history.push(`/discover/toplist?id=${i.id}`)} key={i.id} className={i.id === currId ? 'mine selected' : 'mine'}>
                  <div className="item clearfix">
                    <div className="left">
                      <Link className="avatar" to={`/discover/toplist?id=${i.id}`}>
                        <img src={i.coverImgUrl} alt={i.name} />
                        <span className="msk" />
                      </Link>
                    </div>
                    <p className="name">
                      <Link to={`/discover/toplist?id=${i.id}`} className="s-fc0">{i.name}</Link>
                    </p>
                    <p className="s-fc4">{i.updateFrequency}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
    if (!listDetail) {
      main = <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>;
      if (!featureList.length) {
        main = null;
      }
    } else {
      main = (
        <div className="g-mn3c">
          <div className="g-wrap">
            <div className="m-info m-info-rank f-cb">
              <div className="cover u-cover u-cover-rank">
                <img alt="" src={listDetail.coverImgUrl} />
                <span className="msk" />
              </div>
              <div className="cnt">
                <div className="cntc m-info">
                  <div className="hd clearfix">
                    <h2 className="f-ff2">{listDetail.name}</h2>
                  </div>
                  <div className="user clearfix">
                    <i className="u-icn u-icn-57" />
                    <span className="sep s-fc3">最近更新：{dateFormat(listDetail.updateTime, 'MM月dd日')}</span>
                    <span className="s-fc4">（每天更新）</span>
                  </div>
                  <div className="btns clearfix">
                    <a onClick={() => this.changePlaylist()} href="javascript:;" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
                      <i>
                        <em className="ply" />播放
                      </i>
                    </a>
                    <a href="javascript:;" className="u-btni u-btni-add" />
                    <a href="javascript:;" className="u-btni u-btni-fav ">
                      <i>({listDetail.subscribedCount})</i>
                    </a>
                    <a href="javascript:;" className="u-btni u-btni-share">
                      <i>({listDetail.shareCount})</i>
                    </a>
                    <a href="javascript:;" className="u-btni u-btni-dl ">
                      <i>下载</i>
                    </a>
                    <a href="javascript:;" className="u-btni u-btni-cmmt ">
                      <i>({listDetail.commentCount})</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="g-wrap12">
            <div className="u-title u-title-1 f-cb">
              <h3>
                <span className="f-ff2">歌曲列表</span>
              </h3>
              <span className="sub s-fc3">
                <span>{listDetail.tracks.length}</span>首歌
              </span>
              <div className="more s-fc3">
                播放：<strong className="s-fc6">{listDetail.playCount}</strong>次
              </div>
            </div>
            <SongList {...this.props} tracks={listDetail.tracks} />
            <Comments onChange={this.choosePage} data={commentData} />
          </div>
        </div>
      );
    }
    return (
      <div id="toplist" className="g-bd3 g-bd3-1 f-cb">
        <div className="g-sd3 g-sd3-1">
          {topList}
        </div>
        <div className="g-mn3">
          {main}
        </div>
      </div>
    );
  }
}

class SongList extends Component {
  constructor(props) {
    super(props);
    // 播放歌曲
    this.playSong = (index) => {
      const id = qs.parse(this.props.location.search).id;
      const item = Object.assign({}, this.props.tracks[index]);
      if (id) {
        item.source = `/discover/toplist?id=${id}`;
      } else {
        item.source = '/discover/toplist';
      }
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
      <table className="m-table m-table-rank">
        <thead>
          <tr>
            <th className="first w1" />
            <th><div className="wp">标题</div></th>
            <th className="w2-1"><div className="wp">时长</div></th>
            <th className="w3"><div className="wp">歌手</div></th>
          </tr>
        </thead>
        <tbody>
          {
            tracks.map((i, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even' : null}>
                <td>
                  <div className="hd">
                    <span className="num">{index + 1}</span>
                    <div className="rk">
                      {
                        i.lastRank ?
                          <span className={index < i.lastRank ? 'ico u-icn u-icn-73 s-fc9' : 'ico u-icn u-icn-74 s-fc10'}>{Math.abs(i.lastRank - index)}</span> :
                          <span className="u-icn u-icn-75" />
                      }
                    </div>
                  </div>
                </td>
                <td className={index <= 2 ? 'rank' : null}>
                  <div className="clearfix">
                    <div className="tt">
                      {
                        index <= 2 ?
                          <a href="javascript:;">
                            <img alt="" className="rpic" src={i.album.picUrl} />
                          </a> : null
                      }
                      <div onClick={() => this.playSong(index)} className={currMusic.info && currMusic.info.id === i.id ? 'ply curr' : 'ply'} />
                      <div className="ttc">
                        <div className="txt">
                          <Link to={`/song?id=${i.id}`}>
                            <b title={i.name}>{i.name}</b>
                          </Link>
                          {i.alias.length ? <span title={i.alias.join('/')} className="s-fc8"> - ({i.alias.join('/')})</span> : null}

                          {i.mvid ? <Link to={`/mv?id=${i.mvid}`} className="mv">mv</Link> : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="s-fc3">
                  <span className="u-dur">{dateFormat(i.duration, 'mm:ss')}</span>
                  <div className="opt hshow">
                    <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                    <span className="icn icn-fav" />
                    <span className="icn icn-share" />
                    <span className="icn icn-dl" />
                  </div>
                </td>
                <td>
                  <div className="text" title={i.artists.map(ar => ar.name).join('/')}>
                    {
                      i.artists.map((ar, index1) =>
                        (<span key={index1}>
                          <Link className="" to={`/artist?id=${ar.id}`}>{ar.name}</Link>
                          {index1 >= i.artists.length - 1 ? null : '/'}
                        </span>),
                      )
                    }

                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
SongList.propTypes = {
  tracks: PropTypes.array,
  currMusic: PropTypes.object.isRequired,
};


function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(TopList);
