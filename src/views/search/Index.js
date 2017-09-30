import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';
import PropTypes from 'prop-types';

import * as api from '../../api';

import ExtendRoute from '../../components/ExtendRoute';

const nav = [
  { id: 1, path: 'song', name: '单曲' },
  { id: 100, path: 'artist', name: '歌手' },
  { id: 10, path: 'album', name: '专辑' },
  { id: 1004, path: 'mv', name: 'MV' },
  { id: 1006, path: 'lrc', name: '歌词' },
  { id: 1000, path: 'playlist', name: '歌单' },
  { id: 1009, path: 'radio', name: '主播电台' },
  { id: 1002, path: 'user', name: '用户' },
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: '',
      currType: 'song',
      showSrchSuggest: false,
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
    this.search = (e) => {
      const keywords = this.searchInput.value;
      const type = this.state.currType;
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
        if (keywords === undefined || keywords === this.state.keywords) {
          return false;
        }
        this.props.history.push(`/search/${type}?keywords=${keywords}`);
        this.setState({
          showSrchSuggest: false,
        });
      }
    };
    this.toResultPage = () => {
      const keywords = this.searchInput.value;
      const type = this.state.currType;
      if (keywords === undefined || keywords === this.state.keywords) {
        return false;
      }
      this.props.history.push(`/search/${type}?keywords=${keywords}`);
    };
  }
  componentDidMount() {
    const keywords = qs.parse(this.props.location.search).keywords;
    const type = this.props.location.pathname.slice(8);
    this.searchInput.value = keywords || '';
    this.setState({
      keywords: keywords || '',
      currType: type,
    });
  }
  componentWillReceiveProps(nextProps) {
    const keywords = qs.parse(nextProps.location.search).keywords;
    const type = nextProps.location.pathname.slice(8);
    this.searchInput.value = keywords || '';
    this.setState({
      keywords: keywords || '',
      currType: type,
    });
  }
  render() {
    const { keywords, searchSuggests } = this.state;
    return (
      <div className="g-bd">
        <div className="g-wrap n-srch">
          <div className="pgsrch f-pr j-suggest">
            <input
              id="m-search-input"
              type="text"
              className="srch j-flag"
              ref={(input) => { this.searchInput = input; }}
              onBlur={() => setTimeout(() => this.setState({ showSrchSuggest: false }), 50)}
              onKeyUp={this.search}
            />
            <a onClick={() => this.toResultPage()} className="btn j-flag">搜索</a>
            <div className="u-lstlay" style={{ display: this.state.showSrchSuggest ? 'block' : 'none' }}>
              <div className="m-schlist">
                <p className="note s-fc3">
                  <Link to={this.searchInput ? `/search/song?keywords=${this.searchInput.value}` : ''} className="s-fc3 xtag">搜“{this.searchInput ? this.searchInput.value : null}” 相关用户</Link>
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
                                  <a href={`${i.href}?id=${item.id}`} className="s-fc0 f-thide xtag">{index === 0 ? `${item.name}-${item.artists.map(a => a.name).join('/')}` : item.name}</a>
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
          <div className="m-search">
            <div className="space" />
            <ul className="m-tabs m-tabs-srch f-cb ztag">
              {
                nav.map((i, index) =>
                  (<li key={index}>
                    <Link to={`/search/${i.path}?keywords=${keywords}`} isActive={(m, l) => l.pathname.indexOf(i.path) !== -1} activeClassName="sel"><em>{i.name}</em></Link>
                  </li>),
                )
              }
            </ul>
            {
              this.props.routes.map((route, i) =>
                <ExtendRoute key={i} {...route} />,
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default Search;