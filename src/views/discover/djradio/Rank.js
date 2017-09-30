import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as api from '../../../api';
import { dateFormat } from '../../../util/date';
import { addPlayItem } from '../../../store/actions';

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPrograms: [],
      updateTime: null,
    };
    // 播放节目
    this.playProgram = (index) => {
      const item = Object.assign({}, this.state.topPrograms[index].program);
      item.source = '/discover/djradio/rank';
      this.props.dispatch(addPlayItem(item));
    };
  }
  componentDidMount() {
    api.getTopProgram(0, 100).then(res => {
      if (res.data.code === 200) {
        this.setState({
          topPrograms: res.data.toplist,
          updateTime: res.data.updateTime,
        });
      }
    });
  }
  render() {
    const { topPrograms, updateTime } = this.state;
    if (!topPrograms.length) {
      return (<div className="g-bd">
        <div style={{ height: (document.body.clientHeight - 105) + 'px' }} className="loading"><Spin tip="Loading..." /></div>
      </div>);
    }
    return (
      <div className="g-bd">
        <div className="g-wrap m-radio">
          <div className="u-title f-pr f-cb">
            <h3><span className="f-ff2">节目排行榜</span></h3>
            <span className="sub s-fc4">最近更新：{dateFormat(updateTime, 'MM月dd日')}</span>
            <div className="info f-pa">
              <a href="javascript:void(0)" className="icon u-icn2 u-icn2-5 j-flag" />
              <div className="tip s-fc3 f-brk f-pa j-flag">
                选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算。
              </div>
            </div>
          </div>
          <ul className="m-plylist toplist toplist-rank f-cb">
            {topPrograms.map((i, index) =>
              (<li key={index} className="itm">
                <div className="col rank s-fc4">
                  <em className={index < 3 ? 'red f-fs1' : 'f-fs1'}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</em>
                  {
                    i.lastRank <= 0 ? <i className="u-icn u-icn-75" />
                    : i.rank - i.lastRank === 0 ? <span className="u-rnk f-ff0"><i className="u-icn u-icn-72" />0</span>
                    : i.rank - i.lastRank < 0 ? <span className="u-rnk u-rnk-up f-ff0"><i className="u-icn u-icn-73" />{Math.abs(i.rank - i.lastRank)}</span>
                    : <span className="u-rnk u-rnk-dn f-ff0"><i className="u-icn u-icn-74" />{Math.abs(i.rank - i.lastRank)}</span>
                  }
                </div>
                <a href="javascript:;" onClick={() => this.playProgram(index)} className="col cvr u-cover u-cover-tiny" title="播放">
                  <img src={i.program.coverUrl} alt="" />
                  <i className="ply f-pa f-dn f-alpha" />
                </a>
                <div className="col cnt f-thide">
                  <Link to={`/program?id=${i.program.id}`} className="s-fc1" title={i.program.name}>{i.program.name}</Link>
                </div>
                <div className="col artist f-thide">
                  <Link to={`/djradio?id=${i.program.radio.id}`} className="s-fc3" title={i.program.radio.name}>{i.program.radio.name}</Link>
                </div>
                <div className="col tag">
                  <Link to={`/discover/djradio/category?id=${i.program.radio.categoryId}`} className="u-type">{i.program.radio.category}</Link>
                </div>
                <span className="col hot u-hot f-fl">
                  <i style={{ width: ((92 * i.score) / (topPrograms[0].score)) + '%' }}><i /></i>
                </span>
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

export default connect(select)(Rank);