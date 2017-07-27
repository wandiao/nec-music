import React, { Component} from 'react';
import { connect } from 'react-redux';

class PlayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList:false
    }
    this.toggleList = () => {
      this.setState(ps => ({
        showList:!ps.showList
      }
      ))
    }
  }
  render() {
    const {playList,currMusic} = this.props
    return (
      <div className="g-btmbar">
        <div className="m-playbar m-playbar-lock">
          <div className="updn">
            <div className="left fl">
              <a href="" className="btn"></a>
            </div>
            <div className="right fl"></div>
          </div>
          <div className="bg"></div>
          <div className="hand" title="展开播放条"></div>
          <div className="wrapper">
            <div className="btns">
              <a href="" className="b-prev">上一首</a>
              <a href="javascript:;" className={currMusic.isPlay?'b-pause':'b-play'}>播放/暂停</a>
              <a href="" className="b-next">下一首</a>
            </div>
            <div className="head">
              <img src="/static/img/default_album.jpg"/>
              <a href="" className="mask"></a>
            </div>
            <div className="play">
              <div className="words"></div>
              <div className="m-pbar pr">
                <div className="barbg">
                  <div className="rdy" ></div>
                  <div className="cur">
                    <span className="btn f-tdn">
                      <i></i>
                    </span>
                  </div>
                </div>
                <div className="time">
                  <em>00:00</em> / 00:00
                </div>
              </div>
            </div>
            <div className="oper fl">
              <a href="" className="icn icn-add">收藏</a>
              <a href="" className="icn icn-share">分享</a>
            </div>
            <div className="ctrl fl pr">
              <div className="m-vol" style={{display:'none'}}>
                <div className="barbg"></div>
                <div className="vbg">
                  <div className="curr"></div>
                  <span className="btn"></span>
                </div>
              </div>
              <a href="" className="icn icn-vol"></a>
              <a href="" className="icn icn-loop"></a>
              <span className="add pr" onClick={this.toggleList}>
                <span className="tip" style={{display:'none'}}>已添加到播放列表</span>
                <a href="javascript:;" className="icn icn-list s-fc3">{playList.tracks.length}</a>
              </span>
              <div className="tip tip-1" style={{display: 'none'}}>随机</div>
            </div>
          </div>
          <ListTab {...this.props} show={this.state.showList} onClose={this.toggleList} />
        </div>
        <audio id="player" controls></audio>
      </div>
    );
  }
}
//播放列表面板
class ListTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {show,playList} = this.props
    let playListCon = null;
    if(!playList.tracks.length) {
      playListCon = <div className="nocnt">
                      <i className="ico ico-face"></i> 
                        你还没有添加任何歌曲<br/>去首页
                       <a href="/discover/" className="f-tdu">发现音乐</a>
                       ，或在
                       <a href="/my/" className="f-tdu">我的音乐</a>
                       收听自己收藏的歌单。
                    </div>
    }else{
      playListCon = <ul className="clearfix">
                    {
                      playList.tracks.map((item,index) =>(
                      <li key={item.id} className={index==0?'active':null}>
                        <div className="col col-1">
                          <div className="playicn"></div>
                        </div>
                        <div className="col col-2">{item.name}</div>
                        <div className="col col-3">
                          <div className="icns">
                            <i className="ico ico-del" title="删除">删除</i>
                            <i className="ico ico-dl" title="下载">下载</i>
                            <i className="ico ico-share" title="分享">分享</i>
                            <i className="ico ico-add" title="收藏">收藏</i>
                          </div>
                        </div>
                        <div className="col col-4">
                          <span title={item.ar.map(i => i.name).join('/')}>
                          {
                            item.ar.map((ari,index) =>(
                            <span key={index}>
                              <a className="" href={`/artist?id=${ari.id}`} >{ari.name}</a>
                              {index == item.ar.length-1?'':'/'}
                            </span>
                          ))
                            
                          }
                          </span>
                        </div>
                        <div className="col col-5">{item.dt}</div>
                        <div className="col col-6">
                          <a href={`/playlist?id=${playList.id}`} className="ico ico-src" title="来自歌单">来源</a>
                        </div>
                      </li>
                      ))
                    }
                  </ul>
    }
    return (
      <div className="list" style={{display:show?'block':'none'}}>
        <div className="listhd">
          <div className="listhdc">
            <h4>播放列表（{playList.tracks.length}）</h4>
            <a href="" className="addall">
              <span className="ico ico-add"></span> 收藏全部 
            </a>
            <span className="line"></span>
            <a href="" className="clear">
              <span className="ico ico-del"></span> 清除
            </a>
            <p className="lytit f-ff0 f-thide">Fashion Killa</p>
            <span onClick={this.props.onClose} className="close">关闭</span>
          </div>
        </div>
        <div className="listbd">
          <img className="imgbg j-flag" id="auto-id-OTw9gllkNDKbIisn" src="http://music.163.com/api/img/blur/65970697667341" style={{top: '-360px'}} />
          <div className="msk"></div>
          <div className="listbdc">
            {playListCon}
          </div>
          <div className="bline">
            <span className="scrol"  style={{height: '32.1905px', display: 'block', top: '0px'}}></span>
          </div>
          <div className="ask">
            <a className="ico ico-ask"></a>
          </div>
          <div className="upload">
            <a href="/lyric/up?id=110710">上传歌词</a>
            <a data-action="close" href="/lyric/report?id=110710">报错</a>
          </div>
          <div className="msk2"></div>
          <div className="listlyric">
          {Array(20).fill(1).map((i,index) => (
            <p key={index}>紫色夹杂 灰色衬衣</p>
          ))
           
          }
          </div>
          <div className="bline bline-1">
            <span className="scrol scrol-1 j-flag" style={{height: '59.3125px', display: 'block', top: '2px'}}></span>
          </div>
        </div>
      </div>
    )
  }
}
function select(state) {
  return {
    playList:state.playList,
    currMusic:state.currMusic
  }
}

export default connect(select)(PlayBar)