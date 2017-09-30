import React, { Component } from 'react';
import { Pagination, Spin } from 'antd';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { connect } from 'react-redux';

import * as api from '../../api';
import { numberFormat } from '../../util';
import { changePlayList, asyncChangeCurrMusic as ac } from '../../store/actions';

const cats = [
  {
    name: '语种',
    icon: 'u-icn-71',
    cats: ['华语', '欧美', '日语', '韩语', '粤语', '小语种'],
  },
  {
    name: '风格',
    icon: 'u-icn-6',
    cats: ['流行', '摇滚', '民谣', '电子', '舞曲', '说唱', '轻音乐', '爵士', '乡村', 'R&B/Soul', '古典', '民族', ' 英伦', '金属', '朋克', '蓝调', '雷鬼', '世界音乐', '拉丁', '另类/独立', 'New Age', '古风', '后摇', 'Bossa Nova'],
  },
  {
    name: '场景',
    icon: 'u-icn-7',
    cats: ['清晨', '夜晚', '学习', '工作', '午休', '下午茶', '地铁', '驾车', '运动', '旅行', '散步', '酒吧'],
  },
  {
    name: '情感',
    icon: 'u-icn-8',
    cats: ['怀旧', '清新', '浪漫', '性感', '伤感', '治愈', '放松', '孤独', '感动', '兴奋', '快乐', '安静', '思念'],
  },
  {
    name: '主题',
    icon: 'u-icn-9',
    cats: ['影视原声', 'ACG', '校园', '游戏', '70后', '80后', '90后', '网络歌曲', 'KTV', '经典', '翻唱', '吉他', '钢琴', '器乐', '儿童', '榜单', '00后'],
  },
];

// 歌单页面
class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showType: false,
      order: 'hot',
      cat: '全部',
      playList: [],
      total: 0,
      offset: 1,
    };
    this.toggleShow = () => {
      this.setState(ps => {
        return {
          showType: !ps.showType,
        };
      });
    };
    this.choosePage = (page) => {
      let cat = this.state.cat;
      const order = this.state.order;
      const offset = page - 1;
      if (cat === '全部') {
        cat = undefined;
      }
      const query = qs.stringify({ cat, order, offset });
      this.props.history.push({
        path: '/discover/playlist',
        search: `?${query}`,
      });
    };
    this.changePlayList = id => {
      api.getPlayListDetail(id).then(res => {
        if (res.data.code === 200) {
          const playlist = res.data.playlist;
          if (!playlist.tracks.length) {
            return false;
          }
          const tracks = playlist.tracks.map(i => {
            i.source = `/playlist?id=${playlist.id}`;
            return i;
          });
          this.props.dispatch(changePlayList(tracks));
          this.props.dispatch(ac(0, tracks[0].id, true));
        }
      });
    };
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    let cat = query.cat;
    let order = query.order;
    const offset = query.offset || 0;
    if (!cat) {
      cat = '全部';
    }
    if (!order) {
      order = 'hot';
    }
    this.setState({
      showType: false,
      order,
      cat,
      offset,
    });
    api.getPlayList({ cat, order, offset }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          playList: res.data.playlists,
          total: res.data.total,
        });
      }
    });
  }
  componentWillReceiveProps(np) {
    if (this.props.location === np.location) {
      return false;
    }
    const query = qs.parse(np.location.search);
    let cat = query.cat;
    let order = query.order;
    const offset = query.offset || 0;
    if (!cat) {
      cat = '全部';
    }
    if (!order) {
      order = 'hot';
    }
    this.setState({
      showType: false,
      order,
      cat,
      offset,
      playList: [],
    });
    api.getPlayList({ cat, order, offset }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          playList: res.data.playlists,
          total: res.data.total,
        });
      }
    });
  }
  render() {
    const { order, cat, playList, total, offset } = this.state;
    let main = null;
    if (!playList.length) {
      main = <div style={{ height: (document.body.clientHeight - 197) + 'px' }} className="loading"><Spin tip="Loading..." /></div>;
    } else {
      main = (
        <div id="mainWrapper">
          <ul className="m-cvrlst f-cb">
            {
              playList.map((i, index) => (
                <li key={index}>
                  <div className="u-cover u-cover-1">
                    <img alt="" src={i.coverImgUrl} />
                    <Link title={i.name} to={`/playlist?id=${i.id}`} className="msk" />
                    <div className="bottom">
                      <a onClick={() => this.changePlayList(i.id)} href="javascript:;" className="icon-play f-fr" />
                      <span className="icon-headset" />
                      <span className="nb">{numberFormat(i.playCount)}</span>
                    </div>
                  </div>
                  <p className="dec">
                    <Link to={`/playlist?id=${i.id}`} className="tit f-thide s-fc0">{i.name}</Link>
                  </p>
                  <p>
                    <span className="s-fc4">by </span>
                    <Link title={i.creator.nickname} to={`/user/home?id=${i.creator.userId}`} className="nm nm-icn f-thide s-fc3">{i.creator.nickname}</Link>
                    {i.creator.authStatus ? <sup className="u-icn u-icn-1 " /> : i.creator.expertTags ? <sup className="u-icn u-icn-84 " /> : null}
                  </p>
                </li>
              ))
            }
          </ul>
          <div className="u-page" style={{ display: total > 35 ? 'block' : 'none' }}>
            <Pagination
              onChange={this.choosePage}
              pageSize={35}
              defaultCurrent={Number(offset) + 1}
              total={total}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="g-bd">
        <div className="g-wrap p-pl f-pr">
          <div className="u-title clearfix">
            <h3>
              <span className="f-ff2">{cat}</span>
              <a href="javascript:;" className="u-btn2 u-btn2-1 menu d-flag" onClick={() => this.toggleShow()}>
                <i>选择分类<em className="u-icn u-icn-38" /></i>
              </a>
            </h3>
            <div className={`u-btn f-fr u-btn-${order}`}>
              <Link to={cat === '全部' ? '/discover/playlist?order=hot' : `/discover/playlist?cat=${cat}&order=hot`} className="a1">热门</Link>
              <Link to={cat === '全部' ? '/discover/playlist?order=new' : `/discover/playlist?cat=${cat}&order=new`} className="a2">最新</Link>
            </div>
          </div>
          <div className="n-sltlyr" style={{ display: this.state.showType ? 'block' : 'none' }}>
            <div className="hd">
              <i className="icn" />
            </div>
            <div className="bd">
              <h3>
                <Link to="/discover/playlist" className="u-btn u-btn-g s-fc1"><em>全部风格</em></Link>
              </h3>
              {
                cats.map((i, index) => (
                  <dl className="clearfix" key={index}>
                    <dt>
                      <i className={`u-icn ${i.icon}`} />{i.name}
                    </dt>
                    <dd className={index === 4 ? 'last' : null}>
                      {
                        i.cats.map((subCat, subIndex) => (
                          <span key={subIndex}>
                            <Link to={`/discover/playlist?cat=${subCat}&order=${order}`} className="s-fc1">{subCat}</Link>
                            <span className="line"> | </span>
                          </span>
                        ))
                      }
                    </dd>
                  </dl>
                ))
              }
            </div>
            <div className="ft" />
          </div>
          {main}
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

export default connect(select)(PlayList);