import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, message } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from '../../api';
import { numberFormat } from '../../util';
import InfoComp from './InfoComp';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../../store/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      djRadios: [],
      records: [],
      recordType: 0,
      loadingRecord: false,
      pl: [],
      spl: [],
    };
    // 播放歌单
    this.changePlaylist = (id) => {
      const userId = qs.parse(this.props.location.search).id;
      let playList = null;
      api.getPlayListDetail(id).then(res => {
        if (res.data.code === 200) {
          playList = res.data.playlist;
          if (!playList.tracks.length) {
            return false;
          }
          const tracks = playList.tracks.map(i => {
            i.source = `/user/home?id=${userId}`;
            return i;
          });
          // console.log(playList)
          this.props.dispatch(changePlayList(tracks));
          this.props.dispatch(ac(0, playList.tracks[0].id, true));
        }
      });
    };
    // 播放歌曲
    this.playSong = (index) => {
      const item = Object.assign({}, this.state.records[index].song);
      const userId = qs.parse(this.props.location.search).id;
      item.source = `/user/home?id=${userId}`;
      if (item.st < 0) {
        message.error('需要付费，无法播放');
        return false;
      }
      this.props.dispatch(addPlayItem(item));
    };
    this.changeRecord = (type) => {
      const query = qs.parse(this.props.location.search);
      const id = query.id;
      if (type === this.state.recordType) {
        return false;
      }
      this.setState({
        loadingRecord: true,
        recordType: type,
      });
      api.getUserRecord(id, type).then(res => {
        if (res.data.code === 200) {
          if (res.data.allData) {
            this.setState({
              records: res.data.allData.slice(0, 10) || [],
              loadingRecord: false,
            });
          } else {
            this.setState({
              records: res.data.weekData.slice(0, 10) || [],
              loadingRecord: false,
            });
          }
        }
      });
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    this.setState({
      loadingRecord: true,
    });
    api.getUserInfo(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          userInfo: res.data,
        });
      }
    });
    api.getUserDj(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          djRadios: res.data.djRadios,
        });
      }
    });
    api.getUserRecord(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          records: res.data.allData.slice(0, 10) || [],
          loadingRecord: false,
        });
      }
    });
    api.getUserPlaylist(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          pl: res.data.playlist.filter(i => i.userId === id),
          spl: res.data.playlist.filter(i => i.userId !== id),
        });
      }
    });
  }
  render() {
    const { userInfo, djRadios, records, pl, spl, loadingRecord, recordType } = this.state;
    if (!userInfo) {
      return (
        <div className="g-bd">
          <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
        </div>
      );
    }
    const profile = userInfo.profile;
    let recordList;
    if (loadingRecord) {
      recordList = <div style={{ height: '70px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!records.length) {
        recordList = (
          <div className="n-nmusic">
            <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂无听歌记录</h3>
          </div>
        );
      } else {
        recordList = records.map((i, index) => (
          <li key={index} className={index % 2 === 0 ? 'even' : null}>
            <div className="hd ">
              <span onClick={() => this.playSong(index)} className="ply ">&nbsp;</span><span className="num">{index + 1}.</span>
            </div>
            <div className="song">
              <div className="tt">
                <div className="ttc">
                  <span className="txt">
                    <Link to={`/song?id=${i.song.id}`}><b title="Booty Call">{i.song.name}</b></Link>
                    <span className="ar s-fc8"> <em>-</em>
                      <span title={i.song.ar.map(j => j.name).join('/')}>
                        {
                          i.song.ar.map((ai, index1) => (
                            <span key={index1}>
                              <Link className="s-fc8" to={`/artist?id=${ai.id}`}>{ai.name}</Link>
                              {index1 >= i.song.ar.length - 1 ? null : '/'}
                            </span>
                          ))
                        }
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="opt">
                <a className="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" />
                <span className="icn icn-fav" title="收藏" />
                <span className="icn icn-share" title="分享">分享</span>
                <span className="icn icn-dl" title="下载">下载</span>
              </div>
            </div>
            <div className="tops"><span className="bg" style={{ width: `${i.score}%` }} /></div>
          </li>
        ));
      }
    }
    return (
      <div className="g-bd">
        <div className="g-wrap p-prf">
          <InfoComp userInfo={userInfo} profile={profile} />
          <div className="u-title u-title-1 f-cb" style={{ display: djRadios.length ? 'block' : 'none' }}>
            <h3><span className="f-ff2 s-fc3">{profile.nickname}创建的电台</span></h3>
          </div>
          <ul className="m-plylist m-create f-cb">
            {
              djRadios.length ? djRadios.map((i, index) => (
                <li className="itm" key={index}>
                  <Link to={`/djradio?id=${i.id}`} className="col cvr u-cover-3">
                    <img src={i.picUrl} alt="" />
                  </Link>
                  <div className="col cnt f-pr f-thide">
                    <Link to={`/djradio?id=${i.id}`} className="s-fc1">{i.name}</Link>
                    <div className="opt hshow">
                      <span data-res-action="share" className="icn u-icn2 u-icn2-share">分享</span>
                    </div>
                  </div>
                  <div className="col col-3 s-fc3">订阅{i.subCount}次</div>
                  <div className="col col-4 s-fc4">{i.programCount}期</div>
                </li>
              )) : null
            }
          </ul>
          <div className="u-title u-title-1 f-cb m-record-title">
            <h3><span className="f-ff2 s-fc3">听歌排行</span></h3>
            <h4>累积听歌{userInfo.listenSongs}首</h4>
            <span className="n-iconpoint">
              <a href="javascript:void(0)" className="icon u-icn2 u-icn2-5 j-flag" />
              <div className="tip">
                <p>实际播放时间过短的歌曲将不纳入计算。</p>
                <i className="t" /><i className="b" />
              </div>
            </span>
            <div className="nav f-cb">
              <span onClick={() => this.changeRecord(0)} className={recordType === 0 ? 'sel' : null}>所有时间</span>
              <i />
              <span onClick={() => this.changeRecord(1)} className={recordType === 1 ? 'sel' : null}>最近一周</span>
            </div>
          </div>
          <div className="m-record">
            <ul>{recordList}</ul>
            <div className="more" style={{ display: userInfo.listenSongs > 10 ? 'block' : 'none' }}><Link to={`/user/songs/rank?id=${profile.userId}`}>查看更多&gt;</Link></div>
          </div>
          <div className="u-title u-title-1 f-cb" style={{ display: pl.length ? 'block' : 'none' }}>
            <h3><span className="f-ff2">{profile.nickname}创建的歌单（{pl.length}）</span></h3>
          </div>
          <ul className="m-cvrlst f-cb">
            {
              pl.length ? pl.map((i, index) => (
                <li key={index}>
                  <div className="u-cover u-cover-1">
                    <img src={i.coverImgUrl} alt="" />
                    <Link to={`/playlist?id=${i.id}`} className="msk" title={i.name} />
                    <div className="bottom">
                      <a onClick={() => this.changePlaylist(i.id)} className="icon-play f-fr" href="javascript:;" title="播放" />
                      <span className="icon-headset" />
                      <span className="nb">{numberFormat(i.playCount)}</span>
                    </div>
                  </div>
                  <p className="dec">
                    <Link className="tit f-thide s-fc0" to={`/playlist?id=${i.id}`} title={i.name}>{i.name}</Link>
                  </p>
                </li>
              )) : null
            }
          </ul>
          <div id="collectlsit" style={{ display: spl.length ? 'block' : 'none' }}>
            <div className="u-title u-title-1 f-cb" >
              <h3><span className="f-ff2">{profile.nickname}收藏的歌单（{spl.length}）</span></h3>
            </div>
            <ul className="m-cvrlst f-cb">
              {
                spl.length ? spl.map((i, index) => (
                  <li key={index}>
                    <div className="u-cover u-cover-1">
                      <img src={i.coverImgUrl} alt="" />
                      <Link to={`/playlist?id=${i.id}`} className="msk" title={i.name} />
                      <div className="bottom">
                        <a className="icon-play f-fr" href="javascript:;" title="播放" />
                        <span className="icon-headset" />
                        <span className="nb">{numberFormat(i.playCount)}</span>
                      </div>
                    </div>
                    <p className="dec">
                      <Link className="tit f-thide s-fc0" to={`/playlist?id=${i.id}`} title={i.name}>{i.name}</Link>
                    </p>
                  </li>
                )) : null
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  location: PropTypes.Object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Home);