import React, { Component } from 'react';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import { Spin, Pagination } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from '../api';
import { dateFormat } from '../util/date';
import { numberFormat } from '../util';
import { pos } from '../util/dom';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../store/actions';

class DjRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      djRadio: null,
      programs: [],
      order: 0,
      currPage: 1,
      total: 1,
      hotDjs: [],
    };
    this.choosePage = (page) => {
      const id = qs.parse(this.props.location.search).id;
      const order = qs.parse(this.props.location.search).order;
      const songtb = document.getElementById('songtb');
      const sp = pos(songtb);
      const query = qs.stringify({ id, order, page });
      this.props.history.push({
        path: '/djradio',
        search: query,
      });
      setTimeout(() => {
        window.scrollTo.apply(null, sp);
      }, 1);
    };
    // 播放全部
    this.changePlaylist = () => {
      const id = qs.parse(this.props.location.search).id;
      api.getDjPrograms(id, 0, 9999).then(res => {
        if (res.data.code === 200) {
          const programs = Object.assign([], res.data.programs);
          programs.forEach(i => {
            i.source = `/djradio?id=${id}`;
          });
          this.props.dispatch(changePlayList(programs));
          this.props.dispatch(ac(0, programs[0].mainTrackId, true));
        }
      });
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const id = query.id;
    const order = query.order || 0;
    const page = query.page || 1;
    if (!id) {
      return false;
    }
    this.setState({
      order,
      currPage: page,
    });
    let currDj = null;
    api.getDjDetail(id).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          djRadio: res.data.djRadio,
        });
        currDj = res.data.djRadio;
        return axios.all([api.getDjPrograms(id, page, 100, order), api.getHotDjByCat(res.data.djRadio.categoryId)]);
      }
    })
      .then(res => {
        // console.log(res)
        if (res[0].data.code === 200) {
          this.setState({
            programs: res[0].data.programs,
            total: res[0].data.count,
          });
        }
        if (res[1].data.code === 200) {
          this.setState({
            hotDjs: res[1].data.djRadios.filter(i => i.id !== currDj.id),
          });
        }
      });
  }
  componentWillReceiveProps(np) {
    if (this.props.location === np.location) {
      return false;
    }
    const query = qs.parse(np.location.search);
    const lastQuery = qs.parse(this.props.location.search);
    const id = query.id;
    const order = query.order || 0;
    const page = query.page || 1;
    if (!id) {
      return false;
    }
    if (query.id !== lastQuery.id) {
      this.setState({
        djRadio: null,
        hotDjs: [],
      });
    }
    this.setState({
      order,
      total: 1,
      currPage: page,
      programs: [],


    });
    let currDj = null;
    api.getDjDetail(id).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          djRadio: res.data.djRadio,
        });
        currDj = res.data.djRadio;
        return axios.all([api.getDjPrograms(id, page, 100, order), api.getHotDjByCat(res.data.djRadio.categoryId)]);
      }
    })
      .then(res => {
        // console.log(res)
        if (res[0].data.code === 200) {
          this.setState({
            programs: res[0].data.programs,
            total: res[0].data.count,
          });
        }
        if (res[1].data.code === 200) {
          this.setState({
            hotDjs: res[1].data.djRadios.filter(i => i.id !== currDj.id),
          });
        }
      });
  }
  render() {
    const { djRadio, programs, order, total, currPage, hotDjs } = this.state;
    if (!djRadio) {
      return (<div className="g-bd4 clearfix">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    let hotlist = null;
    if (!hotDjs.length) {
      hotlist = <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      hotlist = hotDjs.map((i, index) =>
        (<li key={index}>
          <div className="cver u-cover u-cover-3">
            <Link to={`/djradio?id=${i.id}`}>
              <img alt="" src={i.picUrl} />
            </Link>
          </div>
          <div className="info">
            <p className="f-thide">
              <Link className="sname f-fs1 s-fc0" to={`/djradio?id=${i.id}`} title={i.name}>{i.name}</Link>
            </p>
            <p>
              <span className="by s-fc4">by</span>
              <Link className="nm nm f-thide s-fc3" to={`/user/home?id=${i.userId}`} title={i.dj.nickname}>{i.dj.nickname}</Link>
              {
                i.dj.userType ? <sup className="icn u-icn2 u-icn2-music2 " /> : i.dj.authStatus ? <sup className="u-icn u-icn-1 " /> : null
              }
            </p>
          </div>
        </li>),
      );
    }
    return (
      <div className="g-bd4 f-cb">
        <div className="g-mn4">
          <div className="g-mn4c">
            <div className="g-wrap6">
              <div className="m-info f-cb">
                <div className="cover u-cover u-cover-dj">
                  <img alt="" src={djRadio.picUrl} />
                  <span className="msk" />
                </div>
                <div className="cnt">
                  <div className="cntc">
                    <div className="hd f-cb">
                      <i className="f-fl u-icn u-icn-93" />
                      <div className="tit">
                        <h2 className="f-ff2">{djRadio.name}</h2>
                      </div>
                    </div>
                    <div className="user f-cb">
                      <Link to={'/user/home?id={djRadio.dj.userId}'} className="face">
                        <img alt="" src={djRadio.dj.avatarUrl} />
                      </Link>
                      <span className="name">
                        <Link className="s-fc7" to={`/user/home?id=${djRadio.dj.userId}`} title={djRadio.dj.nickname}>{djRadio.dj.nickname}</Link>
                      </span>
                      {
                        djRadio.dj.userType ? <sup className="icn u-icn2 u-icn2-music2 " /> : djRadio.dj.authStatus ? <sup className="u-icn u-icn-1 " /> : null
                      }
                    </div>
                    <div className="btns f-cb">
                      <a href="javascript:;" className="u-btni u-btni-sub">
                        <i>订阅({numberFormat(djRadio.subCount)})</i>
                      </a>
                      <a onClick={this.changePlaylist} href="javascript:;" className="u-btni u-btni-playall">
                        <i>播放全部</i>
                      </a>
                      <a href="javascript:;" className="u-btni u-btni-share">
                        <i>分享({numberFormat(djRadio.shareCount)})</i>
                      </a>
                    </div>
                    <p className="intr f-brk">
                      <Link to={`/discover/djradio/category?id=${djRadio.categoryId}`} className="cat cat u-type u-type-red">{djRadio.category}</Link>
                      <span dangerouslySetInnerHTML={{ __html: djRadio.desc.replace(/\n/g, '<br />') }} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="n-songtb" id="songtb">
                <div className="u-title u-title-1 f-cb">
                  <h3 id="programlist"><span className="f-ff2">节目列表</span></h3>
                  <span className="sub s-fc4">共{djRadio.programCount}期</span>
                  <div className="u-sort f-fr f-cb">
                    <Link to={`/djradio?id=${djRadio.id}&order=0`} className={order === 0 ? 'desc sel' : 'desc'} title="降序" />
                    <Link to={`/djradio?id=${djRadio.id}&order=1`} className={order === 1 ? 'asc sel' : 'asc'} title="升序" />
                  </div>
                  <div className="out f-fr">
                    <i className="u-icn u-icn-95" />&nbsp;
                    <a className="s-fc7" href="javascript:;">生成外链播放器</a>
                  </div>
                </div>
                <ProgramList {...this.props} programs={programs} page={currPage} order={order} total={total} />
                <div className="u-page" style={{ display: total > 100 ? 'block' : 'none' }}>
                  <Pagination onChange={this.choosePage} pageSize={100} current={Number(currPage)} total={total} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="g-sd4">
          <div className="g-wrap7">
            <div className="m-sidead f-hide" />
            <h3 className="u-hd3">
              <span className="f-fl">你可能也喜欢</span>
            </h3>
            <ul className="m-rctlist f-cb">
              {hotlist}
            </ul>
            <div className="m-multi">
              <h3 className="u-hd3">
                <span className="f-fl">网易云音乐多端下载</span>
              </h3>
              <ul className="bg">
                <li>
                  <a href="" className="ios" />
                </li>
                <li>
                  <a href="" className="pc" />
                </li>
                <li>
                  <a href="" className="aos" />
                </li>
              </ul>
              <p className="s-fc4">同步歌单，随时畅听320k好音乐</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 节目列表
class ProgramList extends Component {
 playProgram = (index) => {
   const id = qs.parse(this.props.location.search).id;
   const item = Object.assign({}, this.props.programs[index]);
   item.source = `/djradio?id=${id}`;
   this.props.dispatch(addPlayItem(item));
 }
 render() {
   const { programs, order, page, total, currMusic } = this.props;
   if (!programs.length) {
     return <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
   }
   return (
     <div className="track-list">
       <table className="m-table m-table-program">
         <tbody>
           {
             programs.map((i, index) => (
               <tr key={index} className={index % 2 === 0 ? 'even' : null}>
                 <td className="col1">
                   <div className="hd">
                     <span onClick={() => this.playProgram(index)} className={currMusic.info && currMusic.info.mainTrackId === i.mainTrackId ? 'ply curr' : 'ply'} />
                     <span className="num">{order === 1 ? (((page - 1) * 100) + index + 1) : (total - ((page - 1) * 100) - index)}</span>
                   </div>
                 </td>
                 <td className="col2">
                   <div className="tt f-thide"><Link to={`/program?id=${i.id}`} title={i.name}>{i.name}</Link></div>
                   <div className="opt hshow">
                     <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                     <span className="icn icn-share" />
                     <span className="icn icn-dl" />
                   </div>
                 </td>
                 <td className="col3">
                   <span className="s-fc3">播放{numberFormat(i.listenerCount)}</span>
                 </td>
                 <td className="col4"><span className="s-fc3">赞{i.likedCount}</span></td>
                 <td className="col5"><span className="s-fc4">{dateFormat(i.createTime, 'yyyy-MM-dd')}</span></td>
                 <td className="f-pr">
                   <span className="s-fc4">{dateFormat(i.duration, 'mm:ss')}</span>
                 </td>
               </tr>
             ))
           }
         </tbody>
       </table>
     </div>
   );
 }
}
ProgramList.propTypes = {
  programs: PropTypes.array,
  order: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currMusic: PropTypes.object,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(DjRadio);