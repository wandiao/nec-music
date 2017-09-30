import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../../api';
import { pos } from '../../util/dom';

import InfoComp from './InfoComp';

class Follows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      follows: [],
      followsSize: 0,
      loading: false,
      currPage: 1,
    };
    this.choosePage = (page) => {
      this.setState({
        currPage: page,
        loading: true,
      });
      const query = qs.parse(this.props.location.search);
      const id = query.id;
      const fp = pos(document.getElementById('followstitle'));
      api.getUserFollows(id, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            follows: res.data.follow,
            loading: false,
          });
          window.scrollTo.apply(null, fp);
        }
      });
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    api.getUserInfo(id).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          userInfo: res.data,
        });
      }
    });
    api.getUserFollows(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          follows: res.data.follow,
          followsSize: res.data.size,
          loading: false,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location === nextProps.location) {
      return false;
    }
    this.setState({
      loading: true,
    });
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    api.getUserInfo(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          userInfo: res.data,
        });
      }
    });
    api.getUserFollows(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          follows: res.data.follow,
          followsSize: res.data.size,
          loading: false,
        });
      }
    });
  }
  render() {
    const { userInfo, follows, followsSize, loading } = this.state;
    if (!userInfo) {
      return (<div className="g-bd">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    let main = null;
    if (loading) {
      main = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!follows.length) {
        main = (<div className="n-nmusic">
          <h3 className="f-ff2"><i className="u-icn u-icn-21" />还没有关注人</h3>
        </div>);
      } else {
        main = (<div>
          <ul className="m-fans f-cb">
            {follows.length ? follows.map((i, index) =>
              (<li key={index}>
                <Link to={`/user/home?id=${i.userId}`} className="ava f-pr" title={i.nickname}>
                  <img alt="" src={i.avatarUrl} />
                </Link>
                <div className="info">
                  <p>
                    <Link to={`/user/home?id=${i.userId}`} className="s-fc7 f-fs1 nm f-thide" title={i.nickname}>{i.nickname}</Link>
                      &nbsp;
                    {i.userType ? <sup className="icn u-icn2 u-icn2-music2" />
                      : i.authStatus ? <sup className="u-icn u-icn-1" /> : null}
                      &nbsp;
                    {i.gender === 1 ? <i className="icn u-icn u-icn-s-01" /> : <i className="icn u-icn u-icn-s-02" />}

                  </p>
                  <p>
                    <Link to={`/user/event?id=${i.userId}`}>动态<em className="s-fc7">{i.eventCount}</em></Link>
                    <span className="line">|</span>
                    <Link to={`/user/follows?id=${i.userId}`}>关注<em className="s-fc7">{i.follows}</em></Link>
                    <span className="line">|</span>
                    <Link to={`/user/fans?id=${i.userId}`}>粉丝<em className="s-fc7">{i.followeds}</em></Link>
                  </p>
                  <p className="s-fc3 f-thide">{i.signature}</p>
                </div>
                <div className="oper">
                  <a className="u-btn u-btn-7 f-tdn" href="javascript:;" style={{ display: 'none' }}><i>发私信</i></a>
                  <p className="s-fc4" style={{ display: 'none' }}><i className="u-icn u-icn-67" /> 已关注</p>
                  <p className="s-fc4" style={{ display: 'none' }}><i className="u-icn u-icn-66" /> 相互关注</p>
                  <a className="u-btn u-btn-8 f-tdn" href="javascript:;" data-action="follow" data-userid="95313677">关 注</a>
                </div>
              </li>),
            ) : <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>}
          </ul>
          <div className="u-page" style={{ display: followsSize <= 20 ? 'none' : 'block' }}>
            <Pagination onChange={this.choosePage} defaultCurrent={1} pageSize={20} total={followsSize} />
          </div>
        </div>);
      }
    }
    const profile = userInfo.profile;
    return (
      <div className="g-bd">
        <div className="g-wrap p-prf">
          <InfoComp userInfo={userInfo} profile={profile} />
          <div className="u-title u-title-1 f-cb" id="followstitle">
            <h3><span className="f-ff2 s-fc3">关注（<span id="follow_count_down">{followsSize}</span>）</span></h3>
          </div>
          {main}
        </div>
      </div>
    );
  }
}

Follows.propTypes = {
  location: PropTypes.object.isRequired,
};


export default Follows;