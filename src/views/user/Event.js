import React, { Component } from 'react';
import qs from 'query-string';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../../api';
import { numberFormat, debounce } from '../../util';
import { dateFormat, formatSongTime } from '../../util/date';

import InfoComp from './InfoComp';

const shareType = {
  17: '分享节目',
  18: '分享单曲',
  21: '分享MV',
  24: '分享专栏文章',
  39: '发布短视频',
};
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      events: [],
      eventSize: 0,
      loading: false,
      canLoad: true,
      page: 0,
      follows: [],
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    this.setState({
      loading: true,
    });
    api.getUserInfo(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          userInfo: res.data,
        });
      }
    });
    api.getUserEvent(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          events: res.data.events,
          eventSize: res.data.size,
          loading: false,
        });
      }
    });
    api.getUserFollows(id, 0, 6).then(res => {
      if (res.data.code === 200) {
        this.setState({
          follows: res.data.follow,
        });
      }
    });
    const fn = () => {
      if (!this.state.canLoad) {
        return false;
      }
      if (this.state.page >= 4) {
        return false;
      }
      const seeHeight = document.body.clientHeight;
      const scrollTop = document.body.scrollTop;
      const totalHeight = document.body.scrollHeight;
      if (seeHeight + scrollTop + 100 >= totalHeight) {
        this.setState({
          canLoad: false,

        });
        api.getUserEvent(id, this.state.page + 1, 20).then(res => {
          if (res.data.code === 200) {
            this.setState(ps => {
              return {
                events: [...ps.events, ...res.data.events],
                page: ps.page + 1,
                canLoad: true,
              };
            });
          }
        });
      }
    };
    window.addEventListener('scroll', debounce(fn, 100));
  }
  render() {
    const { userInfo, events, eventSize, follows, loading } = this.state;

    if (!userInfo) {
      return (<div className="g-bd">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    const profile = userInfo.profile;
    let eventlist;
    let eventbody;
    if (loading) {
      eventlist = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!events.length) {
        eventlist = (<div className="n-nmusic">
          <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂时还没有动态</h3>
        </div>);
      } else {
        eventlist = events.map((i, index) => {
          const ed = JSON.parse(i.json);
          switch (i.type) {
            case 17:
              eventbody = (<div className="src f-cb">
                <div className="cover cover-ply">
                  <span className="lnk">
                    <img alt="" src={ed.program.coverUrl} />
                  </span>
                  <a href="javascript:;" className="ply u-dicn u-dicn-8 f-alpha" />
                </div>
                <div className="scnt">
                  <h3 className="tit f-thide s-fc1 f-fs1">
                    <Link to={`/program?id=${ed.program.id}`} className="s-fc1">{ed.program.name}</Link>
                  </h3>
                  <h4 className="from f-thide s-fc3">
                    <Link className="tag u-dtag" to={`/discover/djradio/category?id=${ed.program.radio.categoryId}`}>{ed.program.radio.category}<i className="rt" /></Link>
                    <Link to={`/djradio?id=${ed.program.radio.id}`} className="s-fc3">{ed.program.radio.name}</Link>
                  </h4>
                </div>
              </div>);
              break;
            case 39:
              eventbody = (<div className="src src-mv src-video f-cb">
                <div className="video f-pr j-flag">
                  <div className="info u-dicn u-dicn-17 f-pa">
                    <span className="f-fl"><i className="icn u-dicn u-dicn-43" />{numberFormat(ed.video.playTime)}</span>
                    <span className="f-fr f-ff1"><i className="icn u-dicn u-dicn-44" />{formatSongTime(ed.video.duration)}</span>
                  </div>
                  <div className="f-pa f-img bg" style={{ backgroundImage: `url('${ed.video.coverUrl}?imageView&thumbnail=338y189&blur=35x15')` }} />
                  <div className="f-pa f-img bg" style={{ backgroundImage: `url('${ed.video.coverUrl}?imageView&thumbnail=338x189')` }} />
                  <a href="javascript:" className="ply">
                    <i className="icn u-dicn u-dicn-42 f-alpha" />
                  </a>
                </div>
              </div>);
              break;
            case 18:
              eventbody = (<div className="src f-cb">
                <div className="cover cover-ply">
                  <span className="lnk">
                    <img alt="" src={ed.song.album.picUrl} />
                  </span>
                  <a href="javascript:;" className="ply u-dicn u-dicn-8 f-alpha" />
                </div>
                <div className="scnt">
                  <h3 className="tit f-thide f-fs1">
                    <Link to={`/song?id=${ed.song.id}`} className="s-fc1">{ed.song.name}</Link>
                  </h3>
                  <h4 className="from f-thide s-fc3">
                    {
                      ed.song.artists.map((ar, index1) =>
                        (<span key={index1}>
                          <Link to={`/artist?id=${ar.id}`} title={ar.name} className="s-fc3">{ar.name}</Link>
                          {index1 >= ed.song.artists.length - 1 ? null : '/'}
                        </span>),
                      )
                    }
                  </h4>
                </div>
              </div>);
              break;
            case 21:
              eventbody = (<div className="src src-mv f-cb">
                <div className="mv f-pr">
                  <div className="info u-dicn u-dicn-17 f-pa">
                    <a href="/mv?id=5415028" className="h3 f-fs1 s-fc12 f-thide">{ed.mv.name}</a>
                    <span className="h4 f-thide s-fc12">
                      {
                        ed.mv.artists.map((ar, index1) =>
                          (<span className="" title="冯提莫" key={index1}>
                            <Link to={`/artist?id=${ar.id}`} className="s-fc12">{ar.name}</Link>
                          </span>),
                        )
                      }

                    </span>
                  </div>
                  <i className="rtag u-dicn u-dicn-41 f-pa" />
                  <img alt="" className="f-img" src={ed.mv.imgurl16v9} />
                  <a href="javascript:" className="ply" data-action="playmv"><i className="icn u-dicn u-dicn-9 f-alpha" /></a>
                </div>
              </div>);
              break;
            case 24:
              eventbody = (<div className="src src-topic f-cb">
                <div className="cover">
                  <Link to={`/topic?id=${ed.topic.id}`} className="lnk">
                    <img alt="" src={ed.topic.rectanglePicUrl} />
                  </Link>
                </div>
                <div className="scnt">
                  <div className="inner">
                    <h3 className="tit f-thide2 f-fs1">
                      <span className="tag u-dtag">专栏<i className="rt" /></span>
                      <Link to={`/topic?id=${ed.topic.id}`} className="s-fc1">{ed.topic.mainTitle}</Link>
                    </h3>
                    <h4 className="from f-thide s-fc3">
                      by <Link to={`/user/home?id=${ed.topic.creator.userId}`} className="s-fc3">{ed.topic.creator.nickname}</Link>
                    </h4>
                  </div>
                </div>
              </div>);
              break;
            default:
              eventbody = null;
          }
          return (<li key={index} className="itm">
            <div className="gface">
              <Link to={`/user/home?id=${i.user.userId}`} className="ficon">
                <img alt="" className="j-flag" src={i.user.avatarUrl} />
              </Link>
            </div>
            <div className="gcnt">
              <div className="dcntc">
                <div className="type f-pr f-fs1">
                  <Link to={`/user/home?id=${i.user.userId}`} className="s-fc7">{i.user.nickname}</Link>
                  <sup className="u-icn u-icn-1" />
                  <span className="sep s-fc3">{shareType[i.type]}</span>
                </div>
                <div className="time">
                  <Link className="s-fc4" to={`/event?id=${i.id}&uid={i.user.userId}`}>{dateFormat(i.eventTime, 'yyyy年M月d日 hh:mm')}</Link>
                </div>
                <div className="text f-fs1  f-brk">
                  {ed.msg}
                </div>
                {eventbody}
                {i.pics.length ?
                  <ul className="pics f-cb j-flag">
                    {i.pics.map((pic, index1) =>
                      (<li key={index1} className={pic.width > pic.height ? 'pic pic-wide clear' : 'pic pic-high clear'}>
                        <img alt="" src={pic.width > pic.height ? `${pic.originUrl}?param=338x0&quality=100` : `${pic.originUrl}?param=0x338&quality=100`} />
                      </li>),
                    )}
                  </ul> : null}
                <div className="doper">
                  <a href="javascript:;" className="s-fc7"><i className="icn u-dicn u-dicn-3" /><span className={i.info.likedCount ? null : 'f-hide'}>({i.info.likedCount})</span></a>
                  <span className="line">|</span>
                  <a href="javascript:;" className="s-fc7">转发 <span className={i.forwardCount ? null : 'f-hide'}>({i.forwardCount})</span></a>
                  <span className="line">|</span>
                  <a href="javascript:" className="s-fc7">评论 <span className={i.info.commentCount ? null : 'f-hide'}>({i.info.commentCount})</span></a>
                </div>
                <div className="arrow u-dicn u-dicn-2" />
              </div>
            </div>
          </li>);
        });
      }
    }

    return (
      <div className="g-bd">
        <div className="g-wrap p-prf">
          <InfoComp userInfo={userInfo} profile={profile} />
          <div className="u-title u-title-1 f-cb">
            <h3><span className="f-ff2 s-fc3">TA的动态（<span id="event_count2">{eventSize}</span>）</span></h3>
          </div>
          <div className="g-bd1 g-bd1-1 f-cb">
            <div className="g-mn1">
              <div className="g-mn1c">
                <div className="g-wrap10">
                  <div className="m-timeline">
                    <ul className="m-dlist">
                      {eventlist}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="g-sd1">
              <div className="g-wrap11">
                <h4 style={{ display: follows.length ? 'block' : 'none' }} className="v-hd4">TA的关注</h4>
                <ul className="m-gz f-cb">
                  {follows.length ? follows.map((i, index) =>
                    (<li key={index}>
                      <Link to={`/user/home?id=${i.userId}`} title={i.nickname}>
                        <img alt="" src={i.avatarUrl} />
                      </Link>
                      <p>
                        <Link to={`/user/home?id=${i.userId}`} className="nm nm-icn f-thide s-fc1" title={i.nickname}>{i.nickname}</Link>
                        {
                          i.userType ? <sup className="icn u-icn2 u-icn2-music2" /> :
                          i.authStatus ? <sup className="u-icn u-icn-1 " /> :
                          null
                        }
                      </p>
                    </li>),
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Event.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Event;