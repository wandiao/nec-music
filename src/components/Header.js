import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import * as api from '../api';
import { chooseBox, changeUserInfo } from '../store/actions';

const navConfig = [
  { path: '/', name: '推荐', exact: true },
  { path: '/discover/toplist', name: '排行榜' },
  { path: '/discover/playlist', name: '歌单' },
  { path: '/discover/djradio', name: '主播电台' },
  { path: '/discover/artist', name: '歌手' },
  { path: '/discover/album', name: '新碟上架' },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlaceholder: true,
      showSrchSuggest: false,
      keywords: '',
      searchSuggests: [
        {
          name: '单曲',
          icon: 'u-icn-26',
          href: '/song',
          list: [],
        },
        {
          name: '歌手',
          icon: 'u-icn-27',
          href: '/artist',
          list: [],
        },
        {
          name: '专辑',
          icon: 'u-icn-28',
          href: '/album',
          list: [],
        },
        {
          name: 'MV',
          icon: 'u-icn-96',
          href: '/mv',
          list: [],
        },
        {
          name: '歌单',
          icon: 'u-icn-29',
          href: '/playlist',
          list: [],
        },
      ],
    };
    this.toggleShowPlace = (bool) => {
      if (bool) {
        setTimeout(() => {
          this.setState({
            showSrchSuggest: false,
          });
        }, 500);
      }
      if (!bool) {
        this.searchInput.focus();
      }
      if (this.searchInput.value) {
        bool = false;
      }
      this.setState({
        showPlaceholder: bool,
      });
    };
    this.search = (e) => {
      const keywords = this.searchInput.value;
      if (!keywords) {
        this.setState({
          showSrchSuggest: false,
        });
        return false;
      }
      if (e.keyCode !== 13) {
        this.setState({
          showSrchSuggest: true,
        });
        axios.all([
          api.searchSuggest(keywords, 1, 0, 4),
          api.searchSuggest(keywords, 100, 0, 3),
          api.searchSuggest(keywords, 10, 0, 2),
          api.searchSuggest(keywords, 1004, 0, 2),
          api.searchSuggest(keywords, 1000, 0, 3)])
          .then(res => {
            const ss = Object.assign([], this.state.searchSuggests);
            ss[0].list = res[0].data.result.songs || [];
            ss[1].list = res[1].data.result.artists || [];
            ss[2].list = res[2].data.result.albums || [];
            ss[3].list = res[3].data.result.mvs || [];
            ss[4].list = res[4].data.result.playlists || [];
            this.setState({
              searchSuggest: ss,
            });
          });
      } else {
        this.props.history.push({
          pathname: '/search/song',
          search: `?keywords=${keywords}`,
        });
        this.setState({
          showSrchSuggest: false,
        });
      }
    };
  }
  componentDidMount() {
    let userInfo;
    if (localStorage.expireTime) {
      const now = new Date().getTime();
      if (now - Number(localStorage.expireTime) >= 0) {
        localStorage.userInfo = '';
        localStorage.tokenString = '';
      }
    }
    if (localStorage.userInfo) {
      userInfo = JSON.parse(localStorage.userInfo);
      this.props.dispatch(changeUserInfo(userInfo));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location === nextProps.location) {
      return false;
    }
    if (localStorage.expireTime) {
      const now = new Date().getTime();
      if (now - Number(localStorage.expireTime) >= 0) {
        localStorage.userInfo = '';
        localStorage.tokenString = '';
        this.props.dispatch(changeUserInfo(null));
      }
    }
    if (localStorage.tokenString) {
      const tokenObj = JSON.parse(localStorage.tokenString);
      const refresh_token = tokenObj.refresh_token;
      api.refresh(refresh_token).then(res => {
        if (res.data.code === 200) {
          const expireTime = new Date().getTime() + Number(tokenObj.expires_in);
          localStorage.expireTime = expireTime;
        }
      });
    }
  }
  render() {
    const { searchSuggests, keywords } = this.state;
    const { dispatch, userInfo } = this.props;
    const pathname = this.props.location.pathname;
    let userBox = null;
    if (!userInfo) {
      userBox = (<div className="m-dt pr">
        <a onClick={() => dispatch(chooseBox('登录'))} href="javascipt:;" className="link">登录</a>
        <div className="dropdown-layer">
          <div className="inner">
            <ul className="dl-list clearfix">
              <li>
                <a onClick={() => dispatch(chooseBox('手机号登录'))} className="item-1" href="javascipt:;">
                  <i className="icn icn-mb" />
                  <em>手机号登录</em>
                </a>
              </li>
              <li>
                <a className="item-2" href="">
                  <i className="icn icn-wx" />
                  <em>微信登录</em>
                </a>
              </li>
              <li>
                <a className="item-2" href="">
                  <i className="icn icn-qq" />
                  <em>QQ登录</em>
                </a>
              </li>
              <li>
                <a className="item-2" href="">
                  <i className="icn icn-sn" />
                  <em>新浪微博登录</em>
                </a>
              </li>
              <li>
                <a onClick={() => dispatch(chooseBox('邮箱登录'))} className="item-2" href="javascipt:;">
                  <i className="icn icn-wy" />
                  <em>网易邮箱帐号登录</em>
                </a>
              </li>
            </ul>
          </div>
          <i className="arr" />
        </div>
      </div>);
    } else {
      userBox = (<div className="m-tophead f-pr">
        <div className="head f-fl f-pr">
          <img alt="" src={userInfo.avatarUrl} />
          <Link to={`/user/home?id=${userInfo.userId}`} className="mask" />
          <i className="icn u-icn u-icn-68 f-alpha" style={{ display: 'none' }} />
        </div>
        <Link to={`/user/home?id=${userInfo.userId}`} className="name f-thide f-fl f-tdn f-hide">{userInfo.nickname}</Link>
        <div className="m-tlist m-tlist-lged">
          <div className="inner">
            <ul className="f-cb lb mg">
              <li>
                <a className="itm-1" to={`/user/home?id=${userInfo.userId}`}>
                  <i className="icn icn-hm" />
                  <em>我的主页</em>
                  <i className="icon u-icn u-icn-68 f-alpha j-uflag" style={{ display: 'none' }} />
                </a>
              </li>
              <li>
                <Link to="/user/level" className="itm-2">
                  <i className="icn icn-lv" />
                  <em>我的等级</em>
                  <i className="new u-icn u-icn-78 j-uflag" />
                </Link>
              </li>
              <li>
                <Link to="/member" className="itm-2">
                  <i className="icn icn-mbr" />
                  <em>会员中心</em></Link>
              </li>
            </ul>
            <ul className="f-cb ltb mg">
              <li>
                <Link className="itm-2" to="/user/update">
                  <i className="icn icn-st" /><em>个人设置</em>
                </Link>
              </li>
              <li>
                <a className="itm-2" to="/import/kugou">
                  <i className="icn icn-imt" /><em>导入歌单</em>
                </a>
              </li>
            </ul>
            <ul className="f-cb lt">
              <li>
                <a href="javascipt:;" onClick={() => dispatch(changeUserInfo(null))} className="itm-3">
                  <i className="icn icn-ex" /><em>退出</em>
                </a>
              </li>
            </ul>
          </div>
          <i className="arr" />
        </div>
      </div>);
    }
    return (
      <div className="g-topbar">
        <div className="m-top">
          <div className="wrapper">
            <h1 className="logo"><a href="/">网易云音乐</a></h1>
            <Nav />

            {userBox}
            <a href="" className="m-msg pr" style={{ display: 'none' }} />
            <div className="m-srch pr">
              <div className="s-bg" onClick={() => this.toggleShowPlace(false)}>
                <span className="parent">
                  <input
                    onKeyUp={this.search}
                    onChange={e => this.setState({ keywords: e.target.value })}
                    ref={(input) => { this.searchInput = input; }}
                    onBlur={() => this.toggleShowPlace(true)}
                    type="text"
                    className="txt"
                    name=""
                  />
                  <label style={{ display: this.state.showPlaceholder ? 'block' : 'none' }} className="ph">单曲/歌手/专辑/歌单/MV/用户</label>
                </span>
              </div>
              <div className="u-lstlay" style={{ display: this.state.showSrchSuggest ? 'block' : 'none' }}>
                <div className="m-schlist">
                  <p className="note s-fc3">
                    <Link to={`/search/user?keywords=${keywords}`} className="s-fc3 xtag">搜“{keywords}” 相关用户</Link>
                  </p>
                  <div className="rap">
                    {
                      searchSuggests.map((i, index) =>
                        (<div className="itm clearfix" key={index} style={{ display: i.list.length ? 'block' : 'none' }}>
                          <h3 className="hd">
                            <i className={`icn u-icn ${i.icon}`} />
                            <em className="f-fl">{i.name}</em>
                          </h3>
                          <ul className={index % 2 === 0 ? 'clearfix' : 'odd clearfix'}>
                            {
                              i.list.length ?
                                i.list.map((item, index1) => (
                                  <li key={index1}>
                                    <Link to={`${i.href}?id=${item.id}`} className="s-fc0 f-thide xtag">{index === 0 ? `${item.name}-${item.artists.map(a => a.name).join('/')}` : item.name}</Link>
                                  </li>
                                )) : null
                            }
                          </ul>
                        </div>),
                      )
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={(pathname.indexOf('/discover') !== -1 || pathname === '/') ? 'm-subnav' : 'm-subnav m-subnav-up'}>
          <div className="wrapper pr">
            <ul className="nav">
              {
                navConfig.map((i, index) =>
                  (<li key={index}>
                    <Link to={i.path} exact={i.exact} activeClassName="active">
                      <em>{i.name}</em>
                    </Link>
                  </li>),
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <ul className="m-nav">
        <li className="active">
          <span>
            <Link to="/" exact activeClassName="active">
              <em>发现音乐</em>
              <sub className="cor" />
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/my" activeClassName="active">
              <em>我的音乐</em>
              <sub className="cor" />
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/friend" activeClassName="active">
              <em>朋友</em>
              <sub className="cor" />
            </Link>
          </span>
        </li>
        <li>
          <span>
            <a rel="noopener noreferrer" href="http://music.163.com/store/product" target="_blank">
              <em>商城</em>
              <sub className="cor" />
            </a>
          </span>
        </li>
        <li>
          <span>
            <a rel="noopener noreferrer" href="http://music.163.com/nmusician/web/recruit" target="_blank">
              <em>音乐人</em>
              <sub className="cor" />
            </a>
          </span>
        </li>
        <li>
          <span>
            <a href="javascipt:;">
              <em>下载客户端</em>
              <sub className="cor" />
            </a>
          </span>
          <sup className="hot">&nbsp;</sup>
        </li>
      </ul>
    );
  }
}
Header.propTypes = {
  userInfo: PropTypes.object,
};

function select(state) {
  return {
    logBox: state.logBox,
    userInfo: state.userInfo,
  };
}

export default withRouter(connect(select)(Header));