import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import * as api from '../../api';
import { pos } from '../../util/dom';
import { numberFormat } from '../../util';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      djRadios: [],
      djprograms: [],
      total: 0,
      loading: false,
      ptotal: 0,
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
      api.search(keywords, 1009, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            djprograms: res.data.result.djprograms,
            loading: false,
          });
          const sp = pos(document.getElementById('search_result'));
          window.scrollTo.apply(null, sp);
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
    api.search(keywords, 1009).then(res => {
      if (res.data.code === 200) {
        this.setState({
          djRadios: res.data.result.djRadios,
          djprograms: res.data.result.djprograms,
          total: res.data.result.djRadiosCount,
          ptotal: res.data.result.djprogramCount,
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
      djRadios: [],
      djprograms: [],
      total: 0,
      loading: true,
      currPage: 1,
      queryCorrected: null,
    });
    api.search(keywords, 1009).then(res => {
      if (res.data.code === 200) {
        this.setState({
          djRadios: res.data.result.djRadios,
          djprograms: res.data.result.djprograms,
          total: res.data.result.djRadiosCount,
          ptotal: res.data.result.djprogramCount,
          queryCorrected: res.data.result.queryCorrected,
          loading: false,
        });
      }
    });
  }
  render() {
    const { djRadios, djprograms, ptotal, keywords, currPage, queryCorrected, loading } = this.state;
    let main = null;
    if (loading) {
      main = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!djprograms || !djprograms.length) {
        main = (<div className="n-nmusic">
          <h3 className="f-ff2"><i className="u-icn u-icn-21" />很抱歉，未能找到相关搜索结果！</h3>
        </div>);
      } else {
        main = (<div>
          <div style={{ display: currPage > 1 ? 'none' : 'block' }}>
            <h2 className="head2">主播电台</h2>
            <ul className="m-rdilist f-cb">
              {djRadios.length ? djRadios.map((i, index) =>
                (<li key={index}>
                  <Link to={`/djradio?id=${i.id}`} className="u-cover u-cover-rdi2">
                    <img src={i.picUrl} alt="" />
                  </Link>
                  <h3 className="f-fs2 f-thide">
                    <Link
                      to={`/djradio?id=${i.id}`}
                      className="s-fc1"
                      dangerouslySetInnerHTML={{ __html: i.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                    />
                  </h3>
                  <p className="f-thide s-fc4">
                    by <Link
                      to={`/user/home?id=${i.dj.userId}`}
                      dangerouslySetInnerHTML={{ __html: i.dj.nickname.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                    />&nbsp;
                    {
                      i.dj.userType ? <sup className="u-icn2 u-icn2-music2" />
                      : i.dj.authStatus ? <sup className="u-icn u-icn-1" />
                      : null
                    }
                    &nbsp;
                    {
                      i.dj.gender === 1 ? <i className="icnfix u-icn u-icn-s-01 f-sep" />
                      : i.dj.gender === 2 ? <i className="icnfix u-icn u-icn-s-02 f-sep" />
                      : null
                    }
                  </p>
                </li>),
              ) : null}
            </ul>
          </div>
          <div>
            <h2 className="head2 h-tag">单期节目</h2>
            <ul className="m-plylist m-plylist-rdi m-plylist-rdisrch f-cb">
              {djprograms.map((i, index) =>
                (<li key={index} className="itm">
                  <a href="javascript:;" className="col icon u-icn3 u-icn3-1 ply" />
                  <a href="javascript:;" className="cvr u-cover u-cover-tiny f-fl">
                    <img src={i.coverUrl} alt="" />
                    <i className="ply f-pa f-dn f-alpha" />
                  </a>
                  <div className="col col-3 f-thide">
                    <div className="tt">
                      <Link
                        to={`/program?id=${i.id}`}
                        className="s-fc1"
                        dangerouslySetInnerHTML={{ __html: i.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                      />
                    </div>
                    <div className="opt">
                      <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                      <span className="icn icn-share" />
                    </div>
                  </div>
                  <div className="col col-4 s-fc3">
                    <Link
                      to={`/djradio?id=${i.radio.id}`}
                      dangerouslySetInnerHTML={{ __html: i.radio.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                    />
                    <span className="sep s-fc4">VOL.{i.serialNum}</span>
                  </div>
                  <div className="col col-5 s-fc4">播放{numberFormat(i.listenerCount)}</div>
                  <div className="col col-6 s-fc4">赞{i.likedCount}</div>
                </li>),
              )}
            </ul>
          </div>
          <div className="u-page" style={{ display: ptotal <= 30 ? 'none' : 'block' }}>
            <Pagination onChange={this.choosePage} current={currPage} pageSize={30} total={ptotal} />
          </div>
        </div>);
      }
    }
    return (
      <div className="ztag n-srchrst f-pr" id="search_result">
        <div className="snote s-fc4 ztag">
          搜索“{keywords}”，找到 <em className="s-fc6">{ptotal}</em> 个节目
          {queryCorrected ? <span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span> : null}
        </div>
        {main}
      </div>

    );
  }
}


export default Radio;