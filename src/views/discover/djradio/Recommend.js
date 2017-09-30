import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as api from '../../../api';
import { addPlayItem } from '../../../store/actions';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recPrograms: [],
    };
    // 播放节目
    this.playProgram = (index) => {
      const item = Object.assign({}, this.state.recPrograms[index]);
      item.source = '/discover/djradio/recommend';
      this.props.dispatch(addPlayItem(item));
    };
  }
  componentDidMount() {
    api.getRecProgram(0, 50).then(res => {
      if (res.data.code === 200) {
        this.setState({
          recPrograms: res.data.programs,
        });
      }
    });
  }
  render() {
    const { recPrograms } = this.state;
    if (!recPrograms.length) {
      return (<div className="g-bd">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    return (
      <div className="g-bd">
        <div className="g-wrap m-radio">
          <div className="u-title f-pr f-cb">
            <h3><span className="f-ff2">推荐节目</span></h3>
            <span className="sub s-fc4">（每日更新）</span>
          </div>
          <ul className="m-plylist toplist toplist-recmd f-cb">
            {recPrograms.map((i, index) =>
              (<li key={index} className="itm">
                <a href="javascript:;" onClick={() => this.playProgram(index)} className="col cvr u-cover u-cover-tiny" title="播放">
                  <img src={i.coverUrl} alt="" />
                  <i className="ply f-pa f-dn f-alpha" />
                </a>
                <div className="col cnt f-thide">
                  <Link to={`/program?id=${i.id}`} className="s-fc1" title={i.name}>{i.name}</Link>
                </div>
                <div className="col artist f-thide">
                  <Link to={`/djradio?id=${i.radio.id}`} className="s-fc3" title={i.radio.name}>{i.radio.name}</Link>
                </div>
                <div className="col col-4 s-fc4">播放{i.listenerCount}</div>
                <div className="col col-5 s-fc4">赞{i.likedCount} </div>
                <Link to={`/discover/djradio/category?id=${i.radio.categoryId}`} className="tag u-type">{i.radio.category}</Link>
              </li>),
            )}
          </ul>
        </div>
      </div>
    );
  }
}


function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Recommend);