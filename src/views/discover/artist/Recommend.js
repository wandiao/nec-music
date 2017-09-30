import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../../../api';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedsingers: [],
      singers: [],

    };
  }
  componentDidMount() {
    api.getArtistsList(5001, undefined, 0, 10).then(res => {
      if (res.data.code === 200) {
        this.setState({
          signedsingers: res.data.artists,
        });
      }
    });
    api.getTopArtists(0, 100).then(res => {
      if (res.data.code === 200) {
        this.setState({
          singers: res.data.artists,
        });
      }
    });
  }
  render() {
    const { signedsingers, singers } = this.state;
    let signedList;
    let list;
    if (!signedsingers.length) {
      signedList = <div style={{ height: '184px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      signedList = signedsingers.map((i, index) =>
        <SingerItem singer={i} key={index} index={index} />,
      );
    }
    if (!singers.length) {
      list = <div style={{ height: '184px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      list = singers.map((i, index) =>
        <SingerItem singer={i} key={index} index={index} />,
      );
    }
    return (
      <div className="g-wrap">
        <div className="u-title f-cb">
          <h3><span className="f-ff2">入驻歌手</span></h3>
          <a href="/discover/artist/signed/" className="more s-fc3">更多 &gt;</a>
        </div>
        <div className="m-sgerlist">
          <div className="m-cvrlst m-cvrlst-5 f-cb">
            {signedList}
          </div>
        </div>
        <div className="u-title f-cb">
          <h3><span className="f-ff2">热门歌手</span></h3>
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
    const { singer, index } = this.props;
    if (index < 10) {
      return (
        <li className={index < 5 ? null : 'line'}>
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
    return (
      <li className="sml">
        <Link to={`/artist?id=${singer.id}`} className="nm nm-icn f-thide s-fc0" title={`${singer.name}的音乐`}>{singer.name}</Link>&nbsp;
        {singer.accountId ? <Link className="icn u-icn u-icn-5" to={`/user/home?id=${singer.accountId}`} title={`${singer.name}的个人主页`} /> : null}
      </li>
    );
  }
}

SingerItem.propTypes = {
  singer: PropTypes.object,
  index: PropTypes.number,
};

export default Recommend;