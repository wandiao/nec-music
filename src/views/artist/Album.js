import React, { Component } from 'react';
import { Pagination, message, Spin } from 'antd';
import { connect } from 'react-redux';
import qs from 'query-string';
import { Link } from 'react-router-dom';

import * as api from '../../api';
import { dateFormat } from '../../util/date';
import { changePlayList, asyncChangeCurrMusic as ac } from '../../store/actions';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      currPage: 1,
      total: 0,
      loading: false,
    };
    this.choosePage = (page) => {
      const id = qs.parse(this.props.location.search).id;
      this.setState({
        currPage: page,
        loading: true,
      });
      api.getArtistAlbum(id, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            albums: res.data.hotAlbums,
            loading: false,
          });
          window.scrollTo(0, 0);
        }
      });
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
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    this.setState({
      loading: true,
    });
    api.getArtistAlbum(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          albums: res.data.hotAlbums,
          total: res.data.artist.albumSize,
          loading: false,
        });
      }
    });
  }
  render() {
    const { albums, total, currPage, loading } = this.state;
    if (loading) {
      return <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>;
    }
    if (!albums || !albums.length) {
      return (
        <div className="n-nmusic">
          <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂无专辑</h3>
        </div>
      );
    }
    return (
      <div>
        <ul className="m-cvrlst m-cvrlst-alb4 f-cb">
          {
            albums.map((i, index) => (
              <li key={index}>
                <div className="u-cover u-cover-alb3" title={i.name}>
                  <img src={i.picUrl} alt="" />
                  <Link to={`/album?id=${i.id}`} className="msk" />
                  <a onClick={() => this.changePlaylist(i.id)} className="icon-play f-alpha" href="javascript:;" title="播放" />
                </div>
                <p className="dec dec-1 f-thide2 f-pre" title={i.name}>
                  <Link to={`/album?id=${i.id}`} className="tit s-fc0">{i.name}</Link>
                </p>
                <p><span className="s-fc3">{dateFormat(i.publishTime, 'yyyy.M.d')}</span></p>
              </li>
            ))
          }
        </ul>
        <div className="u-page" style={{ display: total <= 12 ? 'none' : 'block' }}>
          <Pagination
            onChange={this.choosePage}
            current={currPage}
            pageSize={12}
            total={total}
          />
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Album);