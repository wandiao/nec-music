import React, { Component } from 'react';
import qs from 'query-string';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../../../api';
import { singerTypes } from '../../../config/pageConfig';

let typeList = [];
singerTypes.forEach(i => {
  typeList = [...typeList, ...i.types];
});

const letters = [];
for (let i = 65; i < 91; i++) {
  letters.push(String.fromCharCode(i));
}

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      currType: typeList[0],
      currInitial: -1,
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    let initial = query.initial;
    if (initial === undefined) {
      initial = -1;
    }
    const currType = typeList.filter(i => i.id === id)[0];
    this.setState({
      currType,
      currInitial: initial,
    });
    api.getArtistsList(id, initial, 0, 100).then(res => {
      if (res.data.code === 200) {
        this.setState(() => {
          return {
            artists: res.data.artists,
          };
        });
      }
    });
  }
  componentWillReceiveProps(np) {
    const query = qs.parse(np.location.search);
    const id = query.id;
    let initial = query.initial;
    if (initial === undefined) {
      initial = -1;
    }
    const currType = typeList.filter(i => i.id === id)[0];
    this.setState({
      currType,
      currInitial: initial,
      artists: [],
    });
    api.getArtistsList(id, initial, 0, 100).then(res => {
      if (res.data.code === 200) {
        this.setState({
          artists: res.data.artists,
        });
      }
    });
  }
  render() {
    const { currType, currInitial, artists } = this.state;
    let list = null;
    if (!artists.length) {
      list = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      list = artists.map((i, index) => (
        <SingerItem singer={i} key={index} index={index} />
      ));
    }
    return (
      <div className="g-wrap">
        <div className="u-title f-cb">
          <h3><span className="f-ff2 d-flag">{currType.name}</span></h3>
        </div>
        <ul className="n-ltlst f-cb">
          <li>
            <Link to={`/discover/artist/cat?id=${currType.id}&;initial=-1`} className={currInitial === -1 ? 'ch f-fs0 active' : 'ch f-fs0'}>热门</Link>
          </li>
          {
            letters.map((i, index) => (
              <li key={index}>
                <Link to={`/discover/artist/cat?id=${currType.id}&initial=${i.charCodeAt()}`} className={currInitial === i.charCodeAt() ? 'active' : null}>{i}</Link>
              </li>
            ))
          }
          <li>
            <Link to={`/discover/artist/cat?id=${currType.id}&initial=0`} className={currInitial === 0 ? 'ch f-fs0 active' : 'ch f-fs0'}>其他</Link>
          </li>
        </ul>
        <div className="m-sgerlist">
          <div className="m-cvrlst m-cvrlst-5 f-cb">{list}</div>
        </div>
      </div>
    );
  }
}

Cat.propTypes = {
  location: PropTypes.object.isRequired,
};

class SingerItem extends Component {
  render() {
    const { singer, index } = this.props;
    if (index < 10) {
      return (
        <li className={index < 5 ? null : 'line'}>
          <div className="u-cover u-cover-5">
            <img src={singer.img1v1Url} alt="" />
            <Link to={`/artist?id=${singer.id}`} className="msk" title={`${singer.name}的音乐`} />
          </div>
          <p>
            <Link to={`/artist?id=${singer.id}`} className="nm nm-icn f-thide s-fc0" title={`${singer.name}的音乐`}>{singer.name}</Link>
            {
              singer.accountId ? (
                <Link className="f-tdn" to={`/user/home?id=${singer.accountId}`} title={`${singer.name}的个人主页`}>
                  <i className="u-icn u-icn-5" />
                </Link>
              ) : null
            }
          </p>
        </li>
      );
    }
    return (
      <li classNaame="sml">
        <Link to={`/artist?id=${singer.id}`} className="nm nm-icn f-thide s-fc0" title={`${singer.name}的音乐`}>{singer.name}</Link>&nbsp;
        {
          singer.accountId ? (
            <Link className="icn u-icn u-icn-5" to={`/user/home?id=${singer.accountId}`} title={`${singer.name}的个人主页`} />
          ) : null
        }
      </li>
    );
  }
}

SingerItem.propTypes = {
  singer: PropTypes.object,
  index: PropTypes.number.isRequired,
};

export default Cat;