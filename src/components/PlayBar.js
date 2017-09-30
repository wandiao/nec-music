import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider, message } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { changeCurrMusic, changePlayList, asyncChangeCurrMusic as ac, clearCurrMusic, deletePlayItem } from '../store/actions';
import { formatSongTime } from '../util/date';
import { initScroll } from '../util/dom';
import { download } from '../util/query';
import config from '../config';

// 播放组件
class PlayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false, // 是否展示播放列表
      currPlayTime: 0, // 当前播放时间
      timePro: 0, // 播放进度
      modes: [
        {
          type: 'loop',
          icon: 'icn-loop',
          label: '循环',
        },
        {
          type: 'one',
          icon: 'icn-one',
          label: '单曲',
        },
        {
          type: 'shuffle',
          icon: 'icn-shuffle',
          label: '随机',
        },
      ],
      currModeIndex: 0,
      showTip: false, // 展示tip,
      showVloumeTab: false,
      volume: 50,
    };
    // 展示隐藏播放列表
    this.toggleList = () => {
      this.setState(ps => ({
        showList: !ps.showList,
      }
      ));
    };
    // 播放
    this.play = () => {
      if (!this.player) {
        return false;
      }
      if (this.props.currMusic.info && this.props.currMusic.info.st < 0) {
        message.error('需要付费，无法播放');
        this.player.pause();
        return false;
      }
      if (this.player.readyState === 4 && !this.player.ended) {
        this.player.play();
      }
    };
    // 暂停
    this.pause = () => {
      if (this.player) {
        this.player.pause();
      }
    };

    // 选择歌曲
    this.chooseSong = (type) => {
      const { playList, currMusic, dispatch } = this.props;
      let index = currMusic.index;
      let isPlay = currMusic.isPlay;
      switch (type) {
        case 'prev':
          if (index <= 0) {
            index = playList.length - 1;
          } else {
            index -= 1;
          }
          break;
        case 'next':
          if (index >= playList.length - 1) {
            index = 0;
          } else {
            index += 1;
          }
          break;
        case 'random':
          index = Math.floor(Math.random() * playList.length);
          break;
        default:
          index = type;
          isPlay = true;
      }
      if (playList[index].st < 0) {
        message.error('需要付费，无法播放');
        return false;
      }
      const id = playList[index].mainTrackId || playList[index].id;
      dispatch(ac(index, id, isPlay));
    };
    // 修改播放时间
    this.changePlayTime = (value) => {
      this.player.currentTime = (this.player.duration * value) / 100;
    };
    // 修改播放模式
    this.changeMode = (index) => {
      if (index > 2) {
        index = 0;
      }
      this.setState({
        currModeIndex: index,
        showTip: true,
      });
      setTimeout(() => {
        this.setState({
          showTip: false,
        });
      }, 2000);
    };
    // 显示隐藏声音面板
    this.toggleVolumeTab = () => {
      this.setState(ps => {
        return {
          showVloumeTab: !ps.showVloumeTab,
        };
      });
    };
    // 改变声音
    this.changeVolume = (value) => {
      this.player.volume = value / 100;
      this.setState({
        volume: value,
      });
    };
  }
  componentDidMount() {
    let playList;
    let currMusic;
    if (localStorage.playList) {
      playList = JSON.parse(localStorage.playList);
      this.props.dispatch(changePlayList(playList));
    }
    if (localStorage.currMusic) {
      currMusic = JSON.parse(localStorage.currMusic);
      if (currMusic.info) {
        const id = currMusic.info.mainTrackId || currMusic.info.id;
        this.props.dispatch(ac(currMusic.index, id, false));
      }
    }
    this.player.oncanplay = () => {
      currMusic = this.props.currMusic;
      if (currMusic.isPlay) {
        this.player.play();
      }
    };
    this.player.ontimeupdate = (e) => {
      this.setState({
        currPlayTime: e.target.currentTime,
        timePro: (e.target.currentTime * 100) / e.target.duration,
      });
    };
    this.player.onended = () => {
      if (this.state.currModeIndex === 0) {
        this.chooseSong('next');
      } else if (this.state.currModeIndex === 2) {
        this.chooseSong('random');
      } else if (this.state.currModeIndex === 1) {
        this.player.load();
      }
    };
  }
  componentWillReceiveProps(np) {
    if (np.location !== this.props.location) {
      this.setState({
        showList: false,
      });
    }
  }
  render() {
    const { playList, currMusic, dispatch } = this.props;

    let ar = [];
    let picUrl;
    if (currMusic.info) {
      if (currMusic.info.ar) {
        ar = currMusic.info.ar;
      }
      if (currMusic.info.artists) {
        ar = currMusic.info.artists;
      }
    }
    if (currMusic.info) {
      if (currMusic.info.coverUrl) {
        picUrl = currMusic.info.coverUrl;
      }
      if (currMusic.info.al) {
        picUrl = currMusic.info.al.picUrl;
      }
      if (currMusic.info.album) {
        picUrl = currMusic.info.album.picUrl;
      }
    }
    const { currPlayTime, timePro, currModeIndex, modes, showVloumeTab } = this.state;
    if (currMusic.isPlay) {
      this.play();
    } else {
      this.pause();
    }
    return (
      <div className="g-btmbar">
        <div className="m-playbar m-playbar-lock">
          <div className="updn">
            <div className="left fl">
              <a href="javascript:;" className="btn" />
            </div>
            <div className="right fl" />
          </div>
          <div className="bg" />
          <div className="hand" title="展开播放条" />
          <div className="wrapper">
            <div className="btns">
              <a onClick={() => this.chooseSong('prev')} href="javascript:;" className="b-prev">上一首</a>
              <a onClick={() => dispatch(changeCurrMusic({ isPlay: !currMusic.isPlay }))} href="javascript:;" className={currMusic.isPlay ? 'b-pause' : 'b-play'}>播放/暂停</a>
              <a onClick={() => this.chooseSong('next')} href="javascript:;" className="b-next">下一首</a>
            </div>
            <div className="head">
              <img alt="" src={picUrl || config.baseUrl + 'static/img/default_album.jpg'} />
              <a href="javascript:;" className="mask" />
            </div>
            <div className="play">
              <div className="words">
                {
                  currMusic.info ? <div>
                    <Link to={currMusic.info.source} className="f-thide name fc1 f-fl">{currMusic.info.name}</Link>
                    <span className="by f-thide f-fl">
                      <span title={ar.length ? ar.map(i => i.name).join('/') : currMusic.info.radio.name}>
                        {
                          ar.length ? ar.map((i, index) =>
                            (<span key={index}>
                              <Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>
                              {index >= ar.length - 1 ? null : '/'}
                            </span>),
                          ) :
                          currMusic.info.radio ? <Link className="" to={`/djradio?id=${currMusic.info.radio.id}`}>{currMusic.info.radio.name}</Link> : null
                        }

                      </span>
                    </span>
                    <Link to={currMusic.info.source ? currMusic.info.source : 'javascript:;'} className="src" />
                  </div> : null

                }
              </div>
              <div className="m-pbar pr">

                <Slider tipFormatter={null} onChange={this.changePlayTime} value={timePro ? Number(timePro) : 0} defaultValue={0} />
                <div className="time">
                  <em>{formatSongTime(currPlayTime)}</em> / {currMusic.info ? formatSongTime((currMusic.info.dt || currMusic.info.duration) / 1000) : '00:00'}
                </div>
              </div>
            </div>
            <div className="oper fl">
              <a href="javascript:;" className="icn icn-add">收藏</a>
              <a href="javascript:;" className="icn icn-share">分享</a>
            </div>
            <div className="ctrl fl pr">
              <div className="m-vol" style={{ display: showVloumeTab ? 'block' : 'none' }}>
                <div className="barbg" />
                <div className="vbg">
                  <Slider vertical onChange={this.changeVolume} value={this.state.volume} />
                </div>
              </div>
              <a onClick={this.toggleVolumeTab} href="javascript:;" className="icn icn-vol" />
              <a title={modes[currModeIndex].label} onClick={() => this.changeMode(currModeIndex + 1)} href="javascript:;" className={`icn ${modes[currModeIndex].icon}`} />
              <span className="add pr" onClick={this.toggleList}>
                <span className="tip" style={{ display: 'none' }}>已添加到播放列表</span>
                <a href="javascript:;" className="icn icn-list s-fc3">{playList.length}</a>
              </span>
              <div className="tip tip-1" style={{ display: this.state.showTip ? 'block' : 'none' }}>{modes[currModeIndex].label}</div>
            </div>
          </div>
          <ListTab onClick={this.chooseSong} {...this.props} currTime={currPlayTime} currIndex={currMusic.index} show={this.state.showList} onClose={this.toggleList} />
        </div>
        <audio ref={(audio) => { this.player = audio; }} src={currMusic.url} id="player" />
      </div>
    );
  }
}
PlayBar.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  currMusic: PropTypes.object,
  playList: PropTypes.array,
};

// 播放列表面板
class ListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currWordIndex: 0,
    };
    this.changeSong = (e, index) => {
      if (/[^ia]/.test(e.target.tagName.toLowerCase())) {
        this.props.onClick(index);
      }
    };
    this.clearList = () => {
      this.props.dispatch(changePlayList([]));
      this.props.dispatch(clearCurrMusic());
    };
  }
  componentDidMount() {

  }
  componentWillReceiveProps(np) {
    const lrclist = np.currMusic.lrc;
    lrclist.forEach((i, index) => {
      if (np.currTime > i[0]) {
        this.setState({
          currWordIndex: index,
        });
      }
    });
  }
  componentDidUpdate(pp) {
    if (pp.playList.length) {
      const drag = document.getElementById('songScroll');
      const out = document.getElementById('slistWrapper');
      const con = document.getElementById('slist');
      const box = document.getElementById('sbox');
      initScroll(out, con, box, drag);
    }
    if (pp.currMusic.lrc.length) {
      const drag = document.getElementById('lrcScroll');
      const out = document.getElementById('lrcWrapper');
      const con = document.getElementById('lrcList');
      const box = document.getElementById('lbox');
      initScroll(out, con, box, drag);
    }
  }
  render() {
    const { show, playList, currIndex, currMusic, dispatch } = this.props;
    const lrclist = currMusic.lrc;
    let playListCon = null;
    let blurPicUrl = null;
    if (currMusic.info) {
      if (currMusic.info.blurCoverUrl) {
        blurPicUrl = currMusic.info.blurCoverUrl;
      }
      if (currMusic.info.al) {
        blurPicUrl = currMusic.info.al.blurPicUrl;
      }
      if (currMusic.info.album) {
        blurPicUrl = currMusic.info.album.blurPicUrl;
      }
    }
    if (!playList.length) {
      playListCon = (<div className="nocnt">
        <i className="ico ico-face" />
                        你还没有添加任何歌曲<br />去首页
        <a href="/discover/" className="f-tdu">发现音乐</a>
                       ，或在
        <a href="/my/" className="f-tdu">我的音乐</a>
                       收听自己收藏的歌单。
      </div>);
    } else {
      playListCon = (<ul className="clearfix pa" id="slist">
        {
          playList.map((item, index) => (
            <li onClick={e => this.changeSong(e, index)} key={item.id} className={index === currIndex ? 'active' : null}>
              <div className="col col-1">
                <div className="playicn" />
              </div>
              <div className="col col-2">{item.name}</div>
              <div className="col col-3">
                <div className="icns">
                  <i onClick={() => dispatch(deletePlayItem(index))} className="ico ico-del" title="删除">删除</i>
                  <i onClick={() => download((item.mainTrackId || item.id))} className="ico ico-dl" title="下载">下载</i>
                  <i className="ico ico-share" title="分享">分享</i>
                  <i className="ico ico-add" title="收藏">收藏</i>
                </div>
              </div>
              <div className="col col-4">
                <span title={item.ar ? item.ar.map(i => i.name).join('/') : item.artists ? item.artists.map(i => i.name).join('/') : item.radio ? item.radio.name : null}>
                  {
                    item.ar ? item.ar.map((ari, index1) =>
                      (<span key={index1}>
                        <Link className="" to={`/artist?id=${ari.id}`} >{ari.name}</Link>
                        {index1 === item.ar.length - 1 ? '' : '/'}
                      </span>),
                    )
                    : item.artists ? item.artists.map((ari, index1) =>
                      (<span key={index1}>
                        <Link className="" to={`/artist?id=${ari.id}`} >{ari.name}</Link>
                        {index1 === item.artists.length - 1 ? '' : '/'}
                      </span>)) : item.radio ? <Link className="" to={`/djradio?id=${item.radio.id}`} >{item.radio.name}</Link> : null

                  }
                </span>
              </div>
              <div className="col col-5">{formatSongTime((item.dt || item.duration) / 1000)}</div>
              <div className="col col-6">
                <Link to={item.source ? item.source : 'javascript:;'} className="ico ico-src">来源</Link>
              </div>
            </li>
          ))
        }
      </ul>);
    }
    return (
      <div className="list" style={{ display: show ? 'block' : 'none' }}>
        <div className="listhd">
          <div className="listhdc">
            <h4>播放列表（{playList.length}）</h4>
            <a href="javascript:;" className="addall">
              <span className="ico ico-add" /> 收藏全部
            </a>
            <span className="line" />
            <a onClick={this.clearList} href="javascript:;" className="clear">
              <span className="ico ico-del" /> 清除
            </a>
            <p className="lytit f-ff0 f-thide">{currMusic.info ? currMusic.info.name : null}</p>
            <span onClick={this.props.onClose} className="close">关闭</span>
          </div>
        </div>
        <div className="listbd">
          <img alt="" className="imgbg j-flag" src={blurPicUrl} style={{ top: '-360px' }} />
          <div className="msk" />
          <div className="listbdc" id="slistWrapper">
            {playListCon}
          </div>
          <div className="bline" id="sbox">
            <span id="songScroll" className="scrol" />
          </div>
          <div className="ask">
            <a className="ico ico-ask" />
          </div>
          <div className="upload">
            <a href="/lyric/up?id=110710">上传歌词</a>
            <a data-action="close" href="/lyric/report?id=110710">报错</a>
          </div>
          <div className="msk2" />
          <div className="listlyric" id="lrcWrapper">
            <ul id="lrcList" className="pa lrcs" style={{ top: `${-(this.state.currWordIndex * 32) + 96}px` }}>
              {lrclist.length ? lrclist.map((lrc, index) =>
                <p key={index} className={this.state.currWordIndex === index ? 'curr' : null}>{lrc[1]}</p>,
              ) : <li className="s-fc4 f-tc">暂无歌词</li>
              }
            </ul>
          </div>
          <div className="bline bline-1" id="lbox">
            <span id="lrcScroll" className="scrol scrol-1" />
          </div>
        </div>
      </div>
    );
  }
}
ListTab.propTypes = {
  show: PropTypes.bool.isRequired,
  currIndex: PropTypes.number.isRequired,
  currMusic: PropTypes.object,
  playList: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default withRouter(connect(select)(PlayBar));