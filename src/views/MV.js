import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { Spin } from 'antd';

import * as api from '../api';
import { numberFormat } from '../util';
import config from '../config';

import Comments from '../components/Comments';
import DlTemp from '../components/DlTemp';

class MV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mv: null,
      simiMvs: [],
      commentData: null,
    };
    this.choosePage = (page, pageSize, pos) => {
      const id = qs.parse(this.props.location.search).id;
      api.getMVComment(id, page - 1).then(res => {
        if (res.data.code === 200) {
          window.scrollTo.apply(null, pos);
          this.setState({
            commentData: res.data,
          });
        }
      });
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    api.getMV(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          mv: res.data.data,
        });
      }
    });
    api.getSimiMV(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          simiMvs: res.data.mvs,
        });
      }
    });
    api.getMVComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
  }
  componentWillReceiveProps(np) {
    const id = qs.parse(np.location.search).id;
    this.setState({
      mv: null,
      simiMvs: [],
      commentData: null,
    });
    api.getMV(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          mv: res.data.data,
        });
      }
    });
    api.getSimiMV(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          simiMvs: res.data.mvs,
        });
      }
    });
    api.getMVComment(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          commentData: res.data,
        });
      }
    });
  }
  render() {
    const { mv, simiMvs, commentData } = this.state;
    if (!mv) {
      return (
        <div className="g-bd4 clearfix">
          <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
        </div>
      );
    }
    return (
      <div className="g-bd4 f-cb">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="n-mv">
                <div className="title f-cb">
                  <h2 className="f-ff2 f-thide" id="flag_title1">{mv.name}</h2>
                  <span className="name">
                    <Link to={`/artist?id=${mv.artistId}`} className="s-fc7" title={mv.artistName}>{mv.artistName}</Link>
                  </span>
                </div>
                <div className="mv">
                  <video controls src={mv ? `${config.reqUrl}mv/url?url=${mv.brs['720']}` : null} />
                </div>
                <div className="btns f-cb">
                  <a className="j-flag u-btni u-btni-fav" href="javascript:;"><i>收藏</i></a>
                  <a className="u-btni u-btni-share" href="javascript:;"><i>分享</i></a>
                </div>
              </div>
              <Comments onChange={this.choosePage} type="mv" id={mv.id} data={commentData} />
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            <div className="m-sidead f-hide" />
            <h3 className="u-hd3">
              <span className="f-fl">MV简介</span>
            </h3>
            <div className="m-mvintr">
              <p className="s-fc4">发布时间：{mv.publishTime}</p>
              <p className="s-fc4">播放次数：{numberFormat(mv.playCount)}次</p>
              <p className="intr">
                {mv.briefDesc}
                <br />
                {mv.desc}
              </p>
            </div>
            <h3 className="u-hd3">
              <span className="f-fl">相关MV</span>
            </h3>
            <ul className="n-mvlist f-cb">
              {
                simiMvs.length ? simiMvs.map((i, index) => (
                  <li key={index}>
                    <div className="mvpic u-cover u-cover-8">
                      <img alt="" src={`${i.cover}?param=80y60`} />
                      <Link to={`/mv?id=${i.id}`} className="msk" />
                      <Link to={`/mv?id=${i.id}`} className="icon-play f-alpha" />
                    </div>
                    <div className="cnt">
                      <p className="p1 f-thide" style={{ marginTop: '20px' }}><Link to={`/mv?id=${i.id}`}>{i.name}</Link></p>
                    </div>
                  </li>
                )) :
                <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>
              }
            </ul>
            <DlTemp />
          </div>
        </div>
      </div>
    );
  }
}

export default MV;