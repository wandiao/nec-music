import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin, message } from 'antd';
import qs from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dateFormat } from '../util/date';
import * as api from '../api';
import { addPlayItem } from '../store/actions';
import { download } from '../util/query';

import Comments from '../components/Comments';

function formatSongTime(time) {
  const minute = Math.floor(time / 60);
  const second = Math.floor(time - (minute * 60));
  time = minute + '分' + second + '秒';
  return time;
}
class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      showList: true,
      commentData: null,
      showMoreDesc: false,
      otherPrograms: [],
    };
    this.toggleShowList = () => {
      this.setState(ps => {
        return {
          showList: !ps.showList,
        };
      });
    };
    this.choosePage = (page, pageSize, pos) => {
      const id = qs.parse(this.props.location.search).id;
      api.getDjComment(id, page - 1).then(res => {
        if (res.data.code === 200) {
          window.scrollTo.apply(null, pos);
          this.setState({
            commentData: res.data,
          });
        }
      });
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    api.getDjProgramDetail(id).then(res => {
      if (res.data.code === 200) {
        res.data.program.source = `/program?id=${id}`;
        res.data.program.songs.forEach(i => {
          i.source = `/program?id=${id}`;
        });
        this.setState({
          program: res.data.program,
        });
        const rid = res.data.program.radio.id;
        return api.getDjPrograms(rid, 0, 6);
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          otherPrograms: res.data.programs.slice(1),
        });
      }
    });
    api.getDjComment(id).then(res => {
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
    const id = qs.parse(np.location.search).id;
    this.setState({
      program: null,
      showList: true,
      commentData: null,
      otherPrograms: [],
    });
    api.getDjProgramDetail(id).then(res => {
      if (res.data.code === 200) {
        res.data.program.source = `/program?id=${id}`;
        res.data.program.songs.forEach(i => {
          i.source = `/program?id=${id}`;
        });
        this.setState({
          program: res.data.program,
        });
        const rid = res.data.program.radio.id;
        return api.getDjPrograms(rid, 0, 6);
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          otherPrograms: res.data.programs.slice(1),
        });
      }
    });
    api.getDjComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
  }
  render() {
    const { program, showList, commentData, otherPrograms, showMoreDesc } = this.state;
    const { dispatch } = this.props;
    let otherList = null;
    if (!program) {
      return (
        <div className="g-bd4 clearfix">
          <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>;
        </div>
      );
    }
    if (!otherPrograms.length) {
      otherList = <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      otherList = otherPrograms.map((i, index) => (
        <li key={index}>
          <div className="cver u-cover u-cover-3">
            <Link to={`/program?id=${i.id}`}>
              <img alt="" src={i.coverUrl} />
            </Link>
          </div>
          <div className="info">
            <p className="f-thide"><Link className="sname f-fs1 s-fc0" to={`/program?id=${i.id}`} title={i.name}>{i.name}</Link></p>
            <p><span className="by s-fc4">Vol.{i.serialNum}</span></p>
          </div>
        </li>
      ));
    }
    return (
      <div className="g-bd4 f-cb">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="m-info m-info-program f-cb">
                <div className="cover u-cover u-cover-program">
                  <img alt="" src={program.coverUrl} />
                </div>
                <div className="cnt">
                  <div className="cntc">
                    <div className="topblk2">
                      <div className="hd f-cb">
                        <i className="f-fl u-icn2 u-icn2-7" />
                        <div className="tit tit3">
                          <h2 className="f-ff2">{program.name}</h2>
                        </div>
                      </div>
                      <div className="rdiname">
                        <i className="icon u-icn2 u-icn2-8 f-fl" />
                        <Link title={program.radio.name} to={`/djradio?id=${program.radio.id}`} className="f-fl f-fs2 f-ff2 s-fc3">{program.radio.name}</Link>
                        <span>
                          <a href="javascript:;" className="u-btni u-btni-dy">
                            <i><em className="u-icn2 u-icn2-dy" />订阅({program.radio.subCount})</i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-prointr">
                <div className="btns f-cb">
                  <a onClick={() => dispatch(addPlayItem(program))} href="javascript:;" className="u-btni u-btni-play">
                    <i>播放 {formatSongTime(program.duration / 1000)}</i>
                  </a>
                  <a href="javascript:;" className="u-btn2 u-btn2-1 u-btn2-icn">
                    <i><em className="icn icn-praise" /><span className="f-fl">({program.likedCount})</span></i>
                  </a>
                  <a href="javascript:;" className="u-btni u-btni-cmmt">
                    <i>({program.commentCount})</i>
                  </a>
                  <a href="javascript:;" className="u-btni u-btni-share">
                    <i>({program.shareCount})</i>
                  </a>
                  <a href="javascript:;" className="u-btni u-btni-dl">
                    <i>下载</i>
                  </a>
                  <span className="u-outlink">
                    <i className="u-icn u-icn-95" />
                    <a className="s-fc7" href="/outchain/3/908509494/">生成外链播放器</a>
                  </span>
                </div>
                <div className="sub">
                  <Link to={`/discover/djradio/category?id=${program.radio.categoryId}`} className="cat u-type u-type-red">{program.radio.category}</Link>
                  <strong className="f-fs1">
                    <span className="f-thide f-ib f-vam" title={program.radio.name}>{program.radio.name}</span> 第{program.serialNum}期
                  </strong>
                  <span className="s-fc4 sep">{dateFormat(program.createTime, 'yyyy-MM-dd')} 创建</span>
                  <span className="sep s-fc4">播放：<em id="play-count" className="f-fw1 s-fc6">{program.listenerCount}</em>次</span>
                </div>
                <p
                  className="s-fc3"
                  style={{ display: showMoreDesc ? 'none' : 'block' }}
                  dangerouslySetInnerHTML={{ __html: ('介绍：' + program.description.substring(0, 98) + '...').replace(/\n/g, '<br />') }}
                />
                <p
                  className="s-fc3"
                  style={{ display: showMoreDesc ? 'block' : 'none' }}
                  dangerouslySetInnerHTML={{ __html: ('介绍：' + program.description).replace(/\n/g, '<br />') }}
                />
                <div className={program.description.length <= 98 ? 'f-cb f-hide' : 'f-cb'}>
                  <a onClick={() => this.setState({ showMoreDesc: !showMoreDesc })} href="javascript:;" className="s-fc7 f-fr">
                    {showMoreDesc ? <span>收起 <i className="u-icn u-icn-70" /></span> : <span>展开 <i className="u-icn u-icn-69" /></span>}
                  </a>
                </div>
              </div>
              <div className="n-songtb">
                <div className="prohead" style={{ display: program.songs.length ? 'block' : 'none' }}>
                  <a onClick={this.toggleShowList} href="javascript:;" className={showList ? 'open s-fc3' : 'open-close open sfc3'}>
                    {showList ? '收起' : '展开'}<i className="icn u-icn2 u-icn2-9" />
                  </a>
                  <div className="total">
                    <strong className="f-fw1">节目包含歌曲列表</strong>
                    <span className="s-fc3">（{program.songs.length}首歌）</span>
                  </div>
                </div>
                <SongList {...this.props} show={showList} tracks={program.songs} />
              </div>
              <Comments onChange={this.choosePage} data={commentData} />
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            <div className="m-sidead f-hide" />
            <h3 className="u-hd3">
              <span className="f-fl"><Link to={`/djradio?id=${program.radio.id}`}>更多节目</Link></span>
              <Link to={`/djradio?id=${program.radio.id}`} className="more f-ff1 s-fc3">全部&gt;</Link>
            </h3>
            <ul className="m-rctlist f-cb">
              {otherList}
            </ul>
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

// 音乐列表
class SongList extends Component {
  constructor(props) {
    super(props);
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
    const { tracks, show, currMusic } = this.props;
    if (!tracks.length) {
      return null;
    }
    return (
      <div className="track-list" style={{ display: show ? 'block' : 'none' }}>
        <table className="m-table">
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
                            {track.alias.length ? <span title={track.alias.join('/')} className="s-fc8"> - ({track.alias.join('/')})</span> : null}
                            {track.mv ? <Link to={`/mv?id=${track.mv}`} className="mv">mv</Link> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="s-fc3">
                    <span className="u-dur">{dateFormat(track.duration, 'mm:ss')}</span>
                    <div className="opt hshow">
                      <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                      <span className="icn icn-fav" />
                      <span className="icn icn-share" />
                      <span onClick={() => download(track.id)} className="icn icn-dl" />
                    </div>
                  </td>
                  <td>
                    <div className="text" title={track.artists.map(i => i.name).join('/')}>
                      {
                        track.artists.map((i, index1) => (
                          <span key={index1}>
                            <Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index1 >= track.artists.length - 1 ? null : '/'}
                          </span>
                        ))
                      }
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <a href={`/album?id=${track.album.id}`} title={track.album.name}>{track.album.name}</a>
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
  show: PropTypes.bool.isRequired,
  currMusic: PropTypes.object,
};


function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Program);