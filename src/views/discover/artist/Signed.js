import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../../../api';
import { debounce } from '../../../util';

class Signed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      page: 0,
      canLoad: true,
    };
  }
  componentDidMount() {
    api.getArtistsList(5001, undefined, this.state.page, 60).then(res => {
      if (res.data.code === 200) {
        this.setState(ps => {
          return {
            artists: [...ps.artists, ...res.data.artists],
            page: ps.page + 1,
          };
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
        api.getArtistsList(5001, undefined, this.state.page, 60).then(res => {
          if (res.data.code === 200) {
            this.setState(ps => {
              return {
                artists: [...ps.artists, ...res.data.artists],
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
    const { artists } = this.state;
    let list = null;
    if (!artists.length) {
      list = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      list = artists.map((i, index) =>
        <SingerItem singer={i} key={index} index={index} />,
      );
    }
    return (
      <div className="g-wrap">
        <div className="u-title f-cb">
          <h3><span className="f-ff2">入驻歌手</span></h3>
        </div>
        <div className="m-sgerlist">
          <div className="m-cvrlst m-cvrlst-5 f-cb">
            {list}
          </div>
        </div>

      </div>
    );
  }
}

class SingerItem extends Component {
  render() {
    const { singer } = this.props;
    return (
      <li>
        <div className="u-cover u-cover-5">
          <img alt="" src={singer.img1v1Url} />
          <Link to={`/artist?id=${singer.id}`} className="msk" title={`${singer.name}的音乐`} />
        </div>
        <p>
          <Link to={`/artist?id=${singer.id}`} className="nm nm-icn f-thide s-fc0" title={`${singer.name}的音乐`}>{singer.name}</Link>
          {singer.accountId ? <Link className="f-tdn" to={`/user/home?id=${singer.accountId}`} title={`${singer.name}的个人主页`}>
            <i className="u-icn u-icn-5" />
          </Link> : null}
        </p>
      </li>
    );
  }
}
SingerItem.propTypes = {
  singer: PropTypes.object,
};

export default Signed;