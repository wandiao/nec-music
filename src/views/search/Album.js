import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import { Spin, Pagination, message } from 'antd';
import { Link } from 'react-router-dom';

import * as api from '../../api';
import { pos } from '../../util/dom';
import { changePlayList, asyncChangeCurrMusic as ac } from '../../store/actions';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      total: 0,
      loading: false,
      keywords: '',
      currPage: 1,
      queryCorrected: null,
    };
    this.choosePage = (page) => {
      this.setState({
        currPage: page,
        loading: true,
      });
      const query = qs.parse(this.props.location.search);
      const keywords = query.keywords;
      api.search(keywords, 10, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            albums: res.data.result.albums,
            loading: false,
          });
          const sp = pos(document.getElementById('search_result'));
          window.scrollTo.apply(null, sp);
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
    const keywords = qs.parse(this.props.location.search).keywords;
    if (keywords === undefined) {
      return false;
    }
    this.setState({
      keywords,
      loading: true,
    });
    api.search(keywords, 10).then(res => {
      if (res.data.code === 200) {
        this.setState({
          albums: res.data.result.albums,
          total: res.data.result.albumCount,
          queryCorrected: res.data.result.queryCorrected,
          loading: false,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    const keywords = qs.parse(nextProps.location.search).keywords;
    if (keywords === undefined || keywords === this.state.keywords) {
      return false;
    }
    this.setState({
      keywords,
      albums: [],
      loading: true,
      total: 0,
      currPage: 1,
      queryCorrected: null,
    });
    api.search(keywords, 10).then(res => {
      if (res.data.code === 200) {
        this.setState({
          albums: res.data.result.albums,
          total: res.data.result.albumCount,
          queryCorrected: res.data.result.queryCorrected,
          loading: false,
        });
      }
    });
  }
  render() {
    const { albums, total, keywords, currPage, queryCorrected, loading } = this.state;
    let main = null;
    if (loading) {
      main = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!albums || !albums.length) {
        main = (
          <div className="n-nmusic">
            <h3 className="f-ff2"><i className="u-icn u-icn-21" />很抱歉，未能找到相关搜索结果！</h3>
          </div>
        );
      } else {
        main = (
          <div>
            <ul className="m-cvrlst m-cvrlst-alb3 f-cb">
              {
                albums.map((i, index) => (
                  <li key={index}>
                    <div className="u-cover u-cover-alb2">
                      <Link to={`/album?id=${i.id}`}>
                        <img alt="" src={i.picUrl} />
                        <span title={i.name} className="msk" />
                      </Link>
                      <a onClick={() => this.changePlaylist(i.id)} title="播放"className="icon-play f-alpha f-fr" href="javascript:void(0)" />
                    </div>
                    <p className="dec">
                      <Link
                        to={`/album?id=${i.id}`}
                        className="tit f-thide s-fc0"
                        title={i.name}
                        dangerouslySetInnerHTML={{ __html: i.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                      />
                    </p>
                    <p>
                      <span className="nm f-thide" title={i.artist.name}>
                        <Link
                          to={`/artist?id=${i.artist.id}`}
                          className="s-fc3"
                          dangerouslySetInnerHTML={{ __html: i.artist.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                        />
                      </span>
                    </p>
                  </li>
                ))
              }
            </ul>
            <div className="u-page" style={{ display: total <= 30 ? 'none' : 'block' }}>
              <Pagination
                onChange={this.choosePage}
                current={currPage}
                pageSize={30}
                total={total}
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div className="n-srchrst ztag f-pr" id="search_result">
        <div className="snote s-fc4 ztag">
          搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 张专辑
          {queryCorrected ? <span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span> : null}
        </div>
        {main}
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