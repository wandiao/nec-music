import React, { Component } from 'react';
import qs from 'query-string';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dateFormat } from '../../util/date';
import * as api from '../../api';
import { changePlayList, addPlayItem, asyncChangeCurrMusic as ac } from '../../store/actions';
import { download } from '../../util/query';

class Top50 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSongs: [],
      loading: false,
    };
    // 切换播放列表
    this.changePlaylist = () => {
      const id = qs.parse(this.props.location.search).id;
      const songs = Object.assign([], this.state.hotSongs);
      if (!songs.length) {
        return false;
      }
      songs.forEach(i => {
        i.source = `/artist?id=${id}`;
      });
      this.props.dispatch(changePlayList(songs));
      this.props.dispatch(ac(0, songs[0].id, true));
    };
  }
  componentDidMount() {
    const id = qs.parse(this.props.location.search).id;
    this.setState({
      loading: true,
    });
    api.getArtistSong(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotSongs: res.data.hotSongs,
          loading: false,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location === nextProps.location) {
      return false;
    }
    const id = qs.parse(nextProps.location.search).id;
    this.setState({
      hotSongs: [],
      loading: true,
    });
    api.getArtistSong(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          hotSongs: res.data.hotSongs,
          loading: false,
        });
      }
    });
  }
  render() {
    const { hotSongs, loading } = this.state;
    return (
      <div className="n-top50">
        <div className="m-info">
          <div className="btns f-cb">
            <a onClick={this.changePlaylist} href="javascript:;" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
              <i><em className="ply" />播放</i>
            </a>
            <a href="" className="u-btni u-btni-add" />
            <a href="" className="u-btni u-btni-fav">
              <i>收藏热门50</i>
            </a>
          </div>
        </div>
        {loading ? <div style={{ height: '200px' }} className="loading"><Spin tip="Loading..." /></div> : <SongList {...this.props} tracks={hotSongs} />}
      </div>
    );
  }
}

// 音乐列表
class SongList extends Component {
  // 播放音乐
 playSong = (index) => {
   const item = Object.assign({}, this.props.tracks[index]);
   const id = qs.parse(this.props.location.search).id;
   item.source = `/artist?id=${id}`;
   if (item.st < 0) {
     message.error('需要付费，无法播放');
     return false;
   }
   this.props.dispatch(addPlayItem(item));
 }
 render() {
   const { tracks, currMusic } = this.props;
   if (!tracks || !tracks.length) {
     return (<div className="n-nmusic">
       <h3 className="f-ff2"><i className="u-icn u-icn-21" />暂无歌曲</h3>
     </div>);
   }
   return (
     <div className="track-list">
       <table className="m-table m-table-1 m-table-4">
         <tbody>
           {
             tracks.map((track, index) => (
               <tr key={index}>
                 <td className="w1">
                   <div className="hd">
                     <span onClick={() => this.playSong(index)} className={currMusic.info && currMusic.info.id === track.id ? 'ply curr' : 'ply'} />
                     <span className="num">{index + 1}</span>
                   </div>
                 </td>
                 <td>
                   <div className="clearfix">
                     <div className="tt">
                       <div className="ttc">
                         <div className="txt">
                           <Link to={`/song?id=${track.id}`}>
                             <b title={track.name}>{track.name}</b>
                           </Link>
                           {track.alia.length ? <span title={track.alia.join('/')} className="s-fc8"> - ({track.alia.join('/')})</span> : null}
                           {track.mv ? <Link to={`/mv?id=${track.mv}`} className="mv">mv</Link> : null}
                         </div>
                       </div>
                     </div>
                   </div>
                 </td>
                 <td className="w2-1 s-fc3">
                   <span className="u-dur">{dateFormat(track.dt, 'mm:ss')}</span>
                   <div className="opt hshow">
                     <a href="javascript:;" className="u-icn u-icn-81 icn-add" />
                     <span className="icn icn-fav" />
                     <span className="icn icn-share" />
                     <span onClick={() => download(track.id)} className="icn icn-dl" />
                   </div>
                 </td>
                 <td className="w4">
                   <div className="text" title={track.ar.map(i => i.name).join('/')}>
                     {
                       track.ar.map((i) =>
                         (<span key={index}>
                           <Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index >= track.ar.length - 1 ? null : '/'}
                         </span>),
                       )
                     }

                   </div>
                 </td>
                 <td className="w5"><span className="hot u-hot"><i style={{ width: (92 * (track.pop / 100)) + '%' }}><i /></i></span></td>
               </tr>
             ))
           }
         </tbody>
       </table>
     </div>
   );
 }
}
SongList.propTypes = {
  tracks: PropTypes.array,
  currMusic: PropTypes.object,
};

function select(state) {
  return {
    playList: state.playList,
    currMusic: state.currMusic,
  };
}

export default connect(select)(Top50);