import React, { Component } from 'react';
import { Pagination, Spin, message } from 'antd';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from '../../api';
import { changePlayList, asyncChangeCurrMusic as ac } from '../../store/actions';

// 新碟上架
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotAlbumList: [],
      albumList: [],
      total: 0,
      page: 1,
      area: 'ALL',

    };
    this.choosePage = (page) => {
      const area = qs.parse(this.props.location.search).area;
      const query = qs.stringify({ area, page });
      this.props.history.push({
        path: '/discover/playlist',
        search: `?${query}`,
      });
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    let area = query.area;
    let page = query.page;
    if (!area) {
      area = 'ALL';
    }
    if (!page) {
      page = 1;
    }
    this.setState({
      page,
      area,
      albumList: [],
    });
    api.getHotAlbum().then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotAlbumList: res.data.albums.slice(0, 10),
        });
      }
    });
    api.getTopAlbum(area, page - 1).then(res => {
      if (res.data.code === 200) {
        this.setState({
          albumList: res.data.albums,
          total: res.data.total,
        });
      }
    });
  }
  componentWillReceiveProps(np) {
    if (this.props.location === np.location) {
      return false;
    }
    const query = qs.parse(np.location.search);
    let area = query.area;
    let page = query.page;
    if (!area) {
      area = 'ALL';
    }
    if (!page) {
      page = 1;
    }
    this.setState({
      page,
      area,
      albumList: [],
    });
    api.getTopAlbum(area, page - 1).then(res => {
      if (res.data.code === 200) {
        this.setState({
          albumList: res.data.albums,
          total: res.data.total,
        });
      }
    });
  }
  render() {
    const { hotAlbumList, albumList, total, page } = this.state;
    let hotAlbums;
    let albums;
    if (!hotAlbumList.length) {
      hotAlbums = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      hotAlbums = (<ul className="m-cvrlst m-cvrlst-alb2 f-cb">
        {
          hotAlbumList.map((i, index) =>
            <AlbumItem {...this.props} key={index} album={i} />,
          )
        }
      </ul>);
    }
    if (!albumList.length) {
      albums = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      albums = (<ul className="m-cvrlst m-cvrlst-alb2 f-cb">
        {
          albumList.map((i, index) =>
            <AlbumItem {...this.props} key={index} album={i} />,
          )
        }
      </ul>);
    }
    return (
      <div className="g-bd">
        <div className="g-wrap n-alblist f-pr">
          <div className="u-title f-cb">
            <h3>
              <span className="f-ff2">热门新碟</span>
            </h3>
          </div>
          {hotAlbums}
          <div className="u-title f-cb" id="allAlbum">
            <h3><span className="f-ff2">全部新碟</span></h3>
            <div className="tab">
              <Link to="/discover/album?area=ALL" className="s-fc6">全部</Link>
              <span className="line">|</span>
              <Link to="/discover/album?area=ZH" className="s-fc6">华语</Link>
              <span className="line">|</span>
              <Link to="/discover/album?area=EA" className="s-fc6">欧美</Link>
              <span className="line">|</span>
              <Link to="/discover/album?area=KR" className="s-fc6">韩国</Link>
              <span className="line">|</span>
              <Link to="/discover/album?area=JP" className="s-fc6">日本</Link>
            </div>
          </div>
          {albums}
          <div className="u-page">
            <Pagination onChange={this.choosePage} current={Number(page)} pageSize={35} total={total} />
          </div>
        </div>
      </div>
    );
  }
}
Album.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

class AlbumItem extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const { album } = this.props;
    return (
      <li>
        <div className="u-cover u-cover-alb2">
          <img alt="" src={album.picUrl} />
          <Link to={`/album?id=${album.id}`} className="msk" />
          <a onClick={() => this.changePlaylist(album.id)} href="javascript:;" className="icon-play f-fr" />
        </div>
        <p className="dec">
          <Link className="tit f-thide s-fc0" to={`/album?id=${album.id}`} title={album.name}>{album.name}</Link>
        </p>
        <p className="f-thide">
          {album.artists.map((i, index) =>
            (<span key={index} className="nm f-thide" title={i.name}>
              <Link className="s-fc3" to={`/artist?id=${i.id}`}>{i.name}</Link>
              {index < album.artists.length - 1 ? '/' : null}
            </span>),
          )}

        </p>
      </li>
    );
  }
}
AlbumItem.propTypes = {
  album: PropTypes.object,
};


function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Album);