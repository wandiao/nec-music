import React, { Component } from 'react';
import { Pagination, Spin } from 'antd';
import { Link } from 'react-router-dom';
import qs from 'query-string';

import * as api from '../../api';

class MV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mvs: [],
      loading: false,
      currPage: 1,
      total: 0,
    };
    this.choosePage = (page) => {
      const id = qs.parse(this.props.location.search).id;
      this.setState({
        currPage: page,
        loading: true,
      });
      api.getArtistMV(id, page - 1).then(res => {
        if (res.data.code === 200) {
          this.setState({
            mvs: res.data.mvs,
            loading: false,
          });
          window.scrollTo(0, 0);
        }
      });
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    this.setState({
      loading: true,
    });
    api.getArtistMV(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          mvs: res.data.mvs,
          total: res.data.size,
          loading: false,
        });
      }
    });
  }
  render() {
    const { mvs, total, currPage, loading } = this.state;
    let main = null;
    if (loading) {
      main = <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      if (!mvs || !mvs.length) {
        main = (
          <div className="n-nmusic">
            <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂无MV</h3>
          </div>
        );
      } else {
        main = (
          <div>
            <ul className="m-cvrlst m-cvrlst-7 f-cb">
              {
                mvs.map((i, index) => (
                  <li key={index}>
                    <div className="u-cover u-cover-7">
                      <img src={`${i.imgurl}?param=137y103`} alt="" />
                      <Link to={`/mv?id=${i.id}`} className="msk" />
                      <Link to={`/mv?id=${i.id}`} className="icon-play f-alpha" />
                    </div>
                    <p className="dec"><Link to={`/mv?id=${i.id}`} className="tit f-thide s-fc0">{i.name}</Link></p>
                  </li>
                ))
              }
            </ul>
            <div className="u-page" style={{ display: total <= 12 ? 'none' : 'block' }}>
              <Pagination
                onChange={this.choosePage}
                current={currPage}
                pageSize={12}
                total={total}
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div>
        {main}
      </div>
    );
  }
}


export default MV;