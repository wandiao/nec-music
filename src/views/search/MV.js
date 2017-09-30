import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import * as api from '../../api';
import { pos } from '../../util/dom';
import { formatSongTime } from '../../util/date';

class MV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mvs: [],
      total: 0,
      keywords: '',
      loading: false,
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
      api.search(keywords, 1004, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            mvs: res.data.result.mvs,
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
    api.search(keywords, 1004).then(res => {
      if (res.data.code === 200) {
        this.setState({
          mvs: res.data.result.mvs,
          total: res.data.result.mvCount,
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
      mvs: [],
      total: 0,
      loading: true,
      currPage: 1,
      queryCorrected: null,
    });
    api.search(keywords, 1004).then(res => {
      if (res.data.code === 200) {
        this.setState({
          mvs: res.data.result.mvs,
          total: res.data.result.mvCount,
          queryCorrected: res.data.result.queryCorrected,
          loading: false,
        });
      }
    });
  }
  render() {
    const { mvs, total, keywords, currPage, queryCorrected, loading } = this.state;
    let main = null;
    if (loading) {
      main = <div style={{ height: '300px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!mvs || !mvs.length) {
        main = (
          <div className="n-nmusic">
            <h3 className="f-ff2"><i className="u-icn u-icn-21" />很抱歉，未能找到相关搜索结果！</h3>
          </div>
        );
      } else {
        main = (
          <div>
            <ul className="m-mvlist f-cb">
              {
                mvs.map((i, index) => (
                  <li key={index}>
                    <div className="cover f-pr">
                      <img src={i.cover} alt="" />
                      <span title={i.name} className="msk" />
                      <p className="tr u-msk u-msk-1">
                        <span className="u-icn2 u-icn2-mv" />{i.playCount}
                      </p>
                      <p className="bl u-msk u-msk-2">{formatSongTime(i.duration / 1000)}</p>
                      <Link className="link" to={`/mv?id=${i.id}`} />
                    </div>
                    <h4 className="title f-thide">
                      <Link
                        to={`/mv?id=${i.id}`}
                        className="s-fc0"
                        title={i.name}
                        dangerouslySetInnerHTML={{ __html: i.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                      />
                    </h4>
                    <h5 className="name f-thide">
                      <span className="f-thide" title={i.artists.map(j => j.name).join('/')}>
                        {
                          i.artists.map((ar, index1) => (
                            <span key={index1}>
                              <Link
                                to={`/artist?id=${ar.id}`}
                                dangerouslySetInnerHTML={{ __html: ar.name.replace(new RegExp(keywords, 'gi'), rs => `<span class="s-fc7">${rs}</span>`) }}
                              />
                              {index >= i.artists.length - 1 ? null : '/'}
                            </span>
                          ))
                        }
                      </span>
                    </h5>
                  </li>
                ))
              }
            </ul>
            <div className="u-page" style={{ display: total <= 30 ? 'none' : 'block' }}>
              <Pagination
                onChange={this.choosePage}
                current={currPage}
                pageSize={30}
                total={total}
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div className="ztag n-srchrst f-pr" id="search_result">
        <div className="snote s-fc4 ztag">
          搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 首MV
          {queryCorrected ? <span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span> : null}
        </div>
        {main}
      </div>
    );
  }
}


export default MV;