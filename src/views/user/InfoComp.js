import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { areaParse } from '../../util';

class InfoComp extends Component {
  render() {
    const { userInfo, profile } = this.props;
    return (
      <dl className="m-proifo f-cb">
        <dt className="f-pr">
          <img alt="" src={profile.avatarUrl} />
        </dt>
        <dd>
          <div className="name f-cb">
            <div className="f-cb">
              <div className="edit">
                {profile.artistId ? <Link to={`/artist?id=${profile.artistId}`} className="u-btn2 u-btn2-1"><i>查看歌手页</i></Link> : null}
              </div>
              <h2 className="wrap f-fl f-cb wrap-3">
                <span className="tit f-ff2 s-fc0 f-thide">{profile.nickname}</span>
                <span className="lev u-lev u-icn2 u-icn2-lev">{userInfo.level}<i className="right u-icn2 u-icn2-levr" /></span>
                {profile.gender === 2 ? <i className="icn u-icn u-icn-02" /> : <i className="icn u-icn u-icn-01" />}
              </h2>
              <div>
                <a href="javascript:;" className="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
                <a href="javascript:;" className="btn u-btn u-btn-6 f-tdn" style={{ display: 'none' }}><i>已关注</i></a>
                <a href="javascript:;" className="btn u-btn u-btn-5 f-tdn" style={{ display: 'none' }}><i>相互关注</i></a>
                <a href="javascript:;" className="btn u-btn u-btn-8 f-tdn" data-action="follow">关 注</a>
              </div>
            </div>
            <p className="djp f-fs1 s-fc3">{profile.userType ? <i className="u-icn u-icn-14" /> : null} {profile.description}</p>
          </div>
          <ul className="data s-fc3 f-cb">
            <li className="fst">
              <Link to={`/user/event?id=${profile.userId}`}>
                <strong id="event_count">{profile.eventCount}</strong><span>动态</span>
              </Link>
            </li>
            <li>
              <Link to={`/user/follows?id=${profile.userId}`}>
                <strong id="follow_count">{profile.follows}</strong><span>关注</span>
              </Link>
            </li>
            <li>
              <Link to={`/user/fans?id=${profile.userId}`}>
                <strong id="fan_count">{profile.followeds}</strong>
                <span>粉丝</span>
                <i className="u-icn u-icn-68 f-alpha" id="newCount" style={{ display: 'none' }} />
              </Link>
            </li>
          </ul>
          <div className="inf s-fc3 f-brk">个人介绍：{profile.signature}</div>
          <div className="inf s-fc3">
            <span>所在地区：{areaParse(profile.province, 1)} - {areaParse(profile.city, 2)}</span>
          </div>
        </dd>
      </dl>
    );
  }
}
InfoComp.propTypes = {
  userInfo: PropTypes.object,
  profile: PropTypes.object,
};

export default InfoComp;