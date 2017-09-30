import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import qs from 'query-string';
import { Spin } from 'antd';
import PropTypes from 'prop-types';


import ExtendRoute from '../../components/ExtendRoute';
import * as api from '../../api';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      hotArs: [],
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    api.getArtistSong(id).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          artist: res.data.artist,
        });
      }
    });
    api.getTopArtists(0, 6).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotArs: res.data.artists,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    const id = qs.parse(nextProps.location.search).id;
    api.getArtistSong(id).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          artist: res.data.artist,
        });
      }
    });
    api.getTopArtists(0, 6).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotArs: res.data.artists,
        });
      }
    });
  }
  render() {
    const { artist, hotArs } = this.state;
    if (!artist) {
      return (<div className="g-bd">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    return (
      <div className="g-bd4 f-cb">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="n-artist f-cb">
                <div className="btm">
                  <h2 id="artist_name" className="sname f-thide sname-max" title={`${artist.name} - ${artist.alias.join(';')}`}>{artist.name}</h2>
                  <h3 className="salias f-thide" title={`${artist.name} - ${artist.alias.join(';')}`}>{artist.alias.join(';')}</h3>
                </div>
                <img alt="" src={`${artist.picUrl}?param=640y300`} />
                <div className="mask f-alpha" />
                {artist.accountId ? <Link to={`/user/home?id=${artist.accountId}`} className="btn-rz f-tid">Ta的个人主页</Link> : null}
                <a id="artist-sub" href="javascript:void(0)" className="btnfav f-tid">收藏</a>
              </div>
              <ul className="m-tabs f-cb">
                <li className="fst">
                  <NavLink to={`/artist?id=${artist.id}`} isActive={() => this.props.location.pathname === '/artist'} activeClassName="sel"><em>热门50单曲</em></NavLink>
                </li>
                <li><NavLink to={`/artist/album?id=${artist.id}`} isActive={() => this.props.location.pathname === '/artist/album'} activeClassName="sel"><em>所有专辑</em></NavLink></li>
                <li><NavLink to={`/artist/mv?id=${artist.id}`} isActive={() => this.props.location.pathname === '/artist/mv'} activeClassName="sel"><em>相关MV</em></NavLink></li>
                <li><NavLink to={`/artist/desc?id=${artist.id}`} isActive={() => this.props.location.pathname === '/artist/desc'} activeClassName="sel"><em>歌手介绍</em></NavLink></li>
              </ul>
              {this.props.routes.map((route, i) =>
                <ExtendRoute key={i} {...route} />,
              )}
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            <div className="m-sidead f-hide" />
            <h3 className="u-hd3">
              <span className="f-fl">热门歌手</span>
            </h3>
            <ul className="m-hdlist f-cb">
              {hotArs.length ? hotArs.map((i, index) =>
                (<li key={index}>
                  <div className="hd">
                    <Link to={`/artist?id=${i.id}`} title={i.name}>
                      <img alt="" src={`${i.picUrl}?param=50y50`} />
                    </Link>
                  </div>
                  <p>
                    <Link to={`/artist?id=${i.id}`} title={i.name} className="nm nm-icn f-ib f-thide">{i.name}</Link>
                  </p>
                </li>),
              ) : <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>}
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
Artist.propTypes = {
  routes: PropTypes.array.isRequired,
};


export default Artist;
