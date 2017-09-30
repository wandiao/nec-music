import React, { Component } from 'react';
import qs from 'query-string';
import { Spin } from 'antd';

import * as api from '../../api';

class Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arInfo: null,
      arName: null,
      loading: false,
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    this.setState({
      loading: true,
    });
    api.getArtistDesc(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          arInfo: res.data,
          loading: false,
        });
      }
    });
    const arName = document.getElementById('artist_name').innerHTML;
    this.setState({
      arName,
    });
  }
  render() {
    const { arInfo, arName, loading } = this.state;
    if (loading) {
      return <div style={{ height: '400px' }} className="loading"><Spin tip="Loading..." /></div>;
    }
    if (!arInfo) {
      return (<div className="n-nmusic">
        <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂无介绍</h3>
      </div>);
    }
    return (
      <div className="n-artdesc">
        <h2><i>&nbsp;</i>{arName}简介</h2>
        <p>{arInfo.briefDesc}</p>
        {arInfo.introduction.map((i, index) =>
          (<div key={index}>
            <h2>{i.ti}</h2>
            <p
              className="z-indent"
              dangerouslySetInnerHTML={{ __html: i.txt.replace(/\n/g, '<br />') }}
            />
          </div>),
        )}
      </div>
    );
  }
}

export default Desc;