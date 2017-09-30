import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import * as api from '../../../api';
import { chunk } from '../../../util/array';
import { addPlayItem } from '../../../store/actions';

import RdiType from './RdiTypeComp';


class DjRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cates: [],
      recPrograms: [],
      topPrograms: [],
      cateRecommends: [
        {
          cateId: 2,
          name: '音乐故事',
          data: [],
        },
        {
          cateId: 6,
          name: '美文读物',
          data: [],
        },
        {
          cateId: 5,
          name: '脱口秀',
          data: [],
        },
        {
          cateId: 3,
          name: '情感调频',
          data: [],
        },
        {
          cateId: 2001,
          name: '创作|翻唱',
          data: [],
        },
        {
          cateId: 11,
          name: '人文历史',
          data: [],
        },
      ],
    };
    // 播放节目
    this.playProgram = (index, type) => {
      let item = null;
      if (type === 'rec') {
        item = Object.assign({}, this.state.recPrograms[index]);
        item.source = '/discover/djradio/recommend';
      } else {
        item = Object.assign({}, this.state.topPrograms[index].program);
        item.source = '/discover/djradio/rank';
      }
      this.props.dispatch(addPlayItem(item));
    };
  }
  componentDidMount() {
    api.getDjCate().then(res => {
      if (res.data.code === 200) {
        this.setState({
          cates: chunk(res.data.categories, 18),
        });
      }
    });
    axios.all([api.getRecProgram(), api.getTopProgram()])
      .then(res => {
        if (res[0].data.code === 200) {
          this.setState({
            recPrograms: res[0].data.programs,
          });
        }
        if (res[1].data.code === 200) {
          this.setState({
            topPrograms: res[1].data.toplist,
          });
        }
      });
    const cateRecommends = [...this.state.cateRecommends];
    axios.all(cateRecommends.map(i => api.getDjRecommendByCate(i.cateId)))
      .then(res => {
        res.forEach((i, index) => {
          if (i.data.code === 200) {
            cateRecommends[index].data = i.data.djRadios;
          }
        });
        this.setState({
          cateRecommends,
        });
      });
  }
  render() {
    const { cates, recPrograms, topPrograms, cateRecommends } = this.state;
    let recList;
    let topList;
    if (!recPrograms.length) {
      recList = <div className="loading"><Spin tip="Loading..." /></div>;
    } else {
      recList = recPrograms.map((i, index) => (
        <li key={index} className={index % 2 === 0 ? 'itm' : 'itm bg'}>
          <a onClick={() => this.playProgram(index, 'rec')} href="javascript:;" className="cvr u-cover u-cover-tiny f-fl" title="播放">
            <img src={i.coverUrl} alt="" />
            <i className="ply f-pa f-dn" />
          </a>
          <div href="" className="cnt f-fl">
            <h3 className="f-thide">
              <Link to={`/program?id=${i.id}`} className="s-fc1 f-fw0" title={i.name}>{i.name}</Link>
            </h3>
            <p className="f-thide">
              <Link to={`/djradio?id=${i.radio.id}`} className="s-fc4" title={i.radio.name}>{i.radio.name}</Link>
            </p>
          </div>
          <Link to={`/discover/djradio/category?id=${i.radio.categoryId}`} className="tag u-type">{i.radio.category}</Link>
        </li>
      ));
    }
    if (!topPrograms.length) {
      topList = <div className="loading"><Spin tip="Loading..." /></div>;
    } else {
      topList = topPrograms.map((i, index) => (
        <li key={index} className={index % 2 === 0 ? 'itm' : 'itm bg'}>
          <div className="rank s-fc4 f-fl">
            <em className={index < 3 ? 'red f-fs1' : 'f-fs1'}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</em>
            {
              i.lastRank <= 0 ? <i className="u-icn u-icn-75" />
              : i.rank - i.lastRank === 0 ? <span className="u-rnk f-ff0"><i className="u-icn u-icn-72" />0</span>
              : i.rank - i.lastRank < 0 ? <span className="u-rnk u-rnk-up f-ff0"><i className="u-icn u-icn-73" />{Math.abs(i.rank - i.lastRank)}</span>
              : <span className="u-rnk u-rnk-dn f-ff0"><i className="u-icn u-icn-74" />{Math.abs(i.rank - i.lastRank)}</span>
            }
          </div>
          <a onClick={() => this.playProgram(index, 'hot')} href="javascript:;" className="cvr u-cover u-cover-tiny f-fl" title="播放">
            <img src={i.program.coverUrl} alt="" />
            <i className="ply f-pa f-dn" />
          </a>
          <div href="" className="cnt f-fl">
            <h3 className="f-thide">
              <Link to={`/program?id=${i.program.id}`} className="s-fc1 f-fw0" title={i.program.name}>{i.program.name}</Link>
            </h3>
            <p className="f-thide">
              <Link to={`/djradio?id=${i.program.radio.id}`} className="s-fc4" title={i.program.radio.name}>{i.program.radio.name}</Link>
            </p>
          </div>
          <span className="hot u-hot f-fl">
            <i style={{ width: ((92 * i.score) / (topPrograms[0].score)) + '%' }}>
              <i />
            </i>
          </span>
        </li>),
      );
    }
    return (
      <div className="g-bd">
        <div className="g-wrap m-radio">
          <RdiType cates={cates} />
          <div className="rditop f-cb">
            <div className="blk f-fl">
              <div className="u-title f-cb">
                <h3><Link to="/discover/djradio/recommend" className="f-ff2">推荐节目</Link></h3>
                <Link to="/discover/djradio/recommend" className="more s-fc3">更多 &gt;</Link>
              </div>
              <ul className="m-plylist toplist">
                {recList}
              </ul>
            </div>
            <div className="blk f-fr">
              <div className="u-title f-cb">
                <h3><Link to="/discover/djradio/rank" className="f-ff2">节目排行榜</Link></h3>
                <Link to="/discover/djradio/rank" className="more s-fc3">更多 &gt;</Link>
              </div>
              <ul className="m-plylist toplist toplist-r">
                {topList}
              </ul>
            </div>
          </div>
          {
            cateRecommends.map((i, index) =>
              (<div className="rdimore" key={index} style={{ display: i.data.length ? 'block' : 'none' }}>
                <div className="u-title f-cb">
                  <h3>
                    <span className="f-ff2">
                      <Link to={`/discover/djradio/category?id=${i.cateId}`}>{i.name}</Link>
                      <span className="f-ff1">·</span>电台
                    </span>
                  </h3>
                  <Link to={`/discover/djradio/category?id=${i.cateId}`} className="more s-fc3">更多 &gt;</Link>
                </div>
                <ul className="rdilist f-cb">
                  {
                    i.data.map((radio, index1) =>
                      (<li key={index1} className={(index1 === 2 || index1 === 3) ? 'bb0' : null}>
                        <Link to={`/djradio?id=${radio.id}`} className="cvr u-cover u-cover-rdi f-fl">
                          <img src={radio.picUrl} alt="" />
                        </Link>
                        <div className="cnt">
                          <h3 className="f-fs3">
                            <Link to={`/djradio?id=${radio.id}`} className="s-fc1" title={radio.name}>{radio.name}</Link>
                          </h3>
                          <p className="note s-fc4">{radio.rcmdtext}</p>
                        </div>
                      </li>),
                    )
                  }
                </ul>
              </div>),
            )
          }
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

export default connect(select)(DjRadio);