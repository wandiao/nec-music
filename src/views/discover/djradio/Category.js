import React, { Component } from 'react';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import { Pagination, Spin } from 'antd';
import PropTypes from 'prop-types';

import * as api from '../../../api';
import { chunk } from '../../../util/array';
import { pos } from '../../../util/dom';
import RdiType from './RdiTypeComp';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cates: [],
      newRadios: [],
      order: 0,
      currCateId: 0,
      radios: [],
      radioTotal: 0,
      offset: 0,
    };
    this.choosePage = (page) => {
      const id = qs.parse(this.props.location.search).id;
      const order = qs.parse(this.props.location.search).order;
      const rlist = document.getElementById('rlist');
      const rp = pos(rlist);
      const query = qs.stringify({ id, order, offset: page - 1 });
      this.props.history.push({
        path: '/discover/djradio/category',
        search: query,
      });
      setTimeout(() => {
        window.scrollTo.apply(null, rp);
      }, 10);
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    const order = query.order || 0;
    const offset = query.offset || 0;

    this.setState({
      currCateId: id,
      order,
      offset,
    });
    api.getDjCate().then(res => {
      if (res.data.code === 200) {
        this.setState({
          cates: chunk(res.data.categories, 18),
        });
      }
    });
    api.getDjRecommendByCate(id, 0, 5).then(res => {
      if (res.data.code === 200) {
        this.setState({
          newRadios: res.data.djRadios,
        });
      }
    });
    api.getHotDjByCat(id, offset, 30, order).then(res => {
      if (res.data.code === 200) {
        this.setState({
          radios: res.data.djRadios,
          radioTotal: res.data.count,
        });
      }
    });
  }
  componentWillReceiveProps(np) {
    const query = qs.parse(np.location.search);
    const id = query.id;
    const order = query.order || 0;
    const offset = query.offset || 0;

    this.setState({
      currCateId: id,
      order,
      offset,
      radios: [],
    });

    if (id !== this.state.currCateId) {
      this.setState({
        newRadios: [],
        radioTotal: 0,
      });
    }
    api.getDjCate().then(res => {
      if (res.data.code === 200) {
        this.setState({
          cates: chunk(res.data.categories, 18),
        });
      }
    });
    api.getDjRecommendByCate(id, 0, 5).then(res => {
      if (res.data.code === 200) {
        this.setState({
          newRadios: res.data.djRadios,
        });
      }
    });
    api.getHotDjByCat(id, offset, 30, order).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          radios: res.data.djRadios,
          radioTotal: res.data.count,
        });
      }
    });
  }
  render() {
    const { cates, newRadios, radios, radioTotal, offset, currCateId, order } = this.state;
    let nrlist;
    let trlsit;
    if (!newRadios.length) {
      nrlist = <div style={{ height: '237px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      nrlist = newRadios.map((radio, index) =>
        (<li key={index}>
          <Link to={`/djradio?id=${radio.id}`} className="u-cover u-cover-rdi2">
            <img src={radio.picUrl} alt="" />
          </Link>
          <h3 className="f-fs2">
            <Link to={`/djradio?id=${radio.id}`} className="s-fc1" title={radio.name}>{radio.name}</Link>
          </h3>
          <p className="f-thide2 s-fc4">{radio.rcmdtext}</p>
        </li>),
      );
    }
    if (!radios.length) {
      trlsit = <div style={{ height: '237px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      trlsit = radios.map((radio, index) =>
        (<li key={index}>
          <Link to={`/djradio?id=${radio.id}`} className="cvr u-cover u-cover-rdi f-fl">
            <img src={radio.picUrl} alt="" />
          </Link>
          <div className="cnt">
            <h3 className="f-fs3"><Link to={`/djradio?id=${radio.id}`} title={radio.name}>{radio.name}</Link></h3>
            <p className="note">
              <i className="u-icn u-icn-27" />
              <Link to={`/user/home?id=${radio.dj.userId}`} className="sep f-brk" title={radio.dj.nickname}>{radio.dj.nickname}</Link>
              {radio.dj.authStatus ? <sup className="u-icn u-icn-1 " /> : null}
            </p>
            <p className="s-fc4">共{radio.programCount}期&nbsp;&nbsp;&nbsp;&nbsp;订阅{radio.subCount}次</p>
          </div>
        </li>),
      );
    }
    return (
      <div className="g-bd">
        <div className="g-wrap m-radio">
          <RdiType cates={cates} currId={currCateId} />
          <div className="new">
            <div className="u-title f-cb">
              <h3><span className="f-ff2">优秀新电台</span></h3>
            </div>
            <ul className="m-rdilist f-cb">
              {nrlist}
            </ul>
          </div>
          <div className="rdimore">
            <div className="u-title f-cb" >
              <h3><span className="f-ff2">电台排行榜</span></h3>
              <div className="tab tab-r">
                <Link to={`/discover/djradio/category?id=${currCateId}&order=1`} className={order === 1 ? 'z-sel' : null}>上升最快</Link>
                <span className="line">|</span>
                <Link to={`/discover/djradio/category?id=${currCateId}&order=0`} className={order === 0 ? 'z-sel' : null}>最热电台</Link>
              </div>
            </div>
            <ul className="rdilist rdilist-2 f-cb" id="rlist">
              {trlsit}
            </ul>
            <div className="u-page">
              <Pagination onChange={this.choosePage} current={Number(offset) + 1} pageSize={30} total={radioTotal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Category.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Category;