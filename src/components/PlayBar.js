import React, { Component} from 'react';
import { connect } from 'react-redux';
import {changeCurrMusic } from '../store/actions'
import {getMusicUrl,getLyric} from '../api'
import {formatSongTime,parseLrc} from '../util'
import {initScroll} from '../util/dom'
import { Slider } from 'antd';

//播放组件
class PlayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList:false,//是否展示播放列表
      currPlayTime:0,//当前播放时间
      timePro:0,//播放进度
      modes:[
        {
          type:'loop',
          icon:'icn-loop',
          label:'循环'
        },
        {
          type:'one',
          icon:'icn-one',
          label:'单曲'
        },
        {
          type:'shuffle',
          icon:'icn-shuffle',
          label:'随机'
        }
      ],
      currModeIndex:0,
      showTip:false,//展示tip,
      showVloumeTab:false,
      volume:50
    }
    //展示隐藏播放列表
    this.toggleList = () => {
      this.setState(ps => ({
        showList:!ps.showList
      }
      ))
    }
    //播放
    this.play = () => {
      if(!this.player) {
        return false;
      }
      if(this.player.readyState == 4 && !this.player.ended) {
        this.player.play();  
      }  
    }
    //暂停
    this.pause = () => {
      if(this.player) {
        this.player.pause()
      }
    }

    //选择歌曲
    this.chooseSong = (type) => {
      const {playList,currMusic,dispatch} = this.props
      let index = currMusic.index
      switch(type){
        case 'prev':
          if(index <= 0) {
            index = playList.tracks.length-1
          }else{
            index-=1
          }
          break;
        case 'next':
          if(index >= playList.tracks.length-1) {
            index = 0
          }else{
            index+=1
          }
          break;
        case 'random':
          index = Math.floor(Math.random()*playList.tracks.length)
          break;
        default:
          index = type;
      }
      const id = playList.tracks[index].id;
      getMusicUrl(id).then(res => {
        if(res.data.code == 200) {
          const url = res.data.data[0].url;
          dispatch(changeCurrMusic({
            index:index,
            info:playList.tracks[index],
            url:url,
            isPlay:currMusic.isPlay
          }))
          return getLyric(id)
        }
      }).then(res => {
        if(res.data.code == 200) {
          const lrc = res.data.lrc?parseLrc(res.data.lrc.lyric):[]
          dispatch(changeCurrMusic({
            lrc:lrc
          }))
        }
      })
    }
    //修改播放时间
    this.changePlayTime = (value) => {
      this.player.currentTime = this.player.duration*value/100;
    }
    //修改播放模式
    this.changeMode = (index) => {
      if(index > 2) {
        index = 0
      }
      this.setState({
        currModeIndex:index,
        showTip:true
      })
      setTimeout(() => {
        this.setState({
          showTip:false
        })
      },2000)
    }
    //显示隐藏声音面板
    this.toggleVolumeTab = () => {
      this.setState(ps => {
        return {
          showVloumeTab:!ps.showVloumeTab
        }
      })
    }
    //改变声音
    this.changeVolume = (value) => {
      this.player.volume = value/100
      this.setState({
        volume:value
      })
    }
  }
  componentDidMount() {
    this.player.oncanplay = () => {
      const {currMusic} = this.props
      if(currMusic.isPlay) {
        this.player.play()
      }
    }
    this.player.ontimeupdate = (e) => {
      this.setState({
        currPlayTime:e.target.currentTime,
        timePro:e.target.currentTime*100/e.target.duration
      })
    }
    this.player.onended = () => {
      if(this.state.currModeIndex === 0) {
        this.chooseSong('next')
      }else if(this.state.currModeIndex === 2){
        this.chooseSong('random')
      }else if(this.state.currModeIndex === 1) {
        this.player.load();
      }
    } 
  }
  render() {
    const {playList,currMusic,dispatch} = this.props
    const {currPlayTime,timePro,currModeIndex,modes,showVloumeTab} = this.state
    if(currMusic.isPlay) {
      this.play()
    }else{
      this.pause()
    }
    return (
      <div className="g-btmbar">
        <div className="m-playbar m-playbar-lock">
          <div className="updn">
            <div className="left fl">
              <a href="javascript:;" className="btn"></a>
            </div>
            <div className="right fl"></div>
          </div>
          <div className="bg"></div>
          <div className="hand" title="展开播放条"></div>
          <div className="wrapper">
            <div className="btns">
              <a onClick={e => this.chooseSong('prev')} href="javascript:;" className="b-prev">上一首</a>
              <a onClick={e => dispatch(changeCurrMusic({isPlay:!currMusic.isPlay}))} href="javascript:;" className={currMusic.isPlay?'b-pause':'b-play'}>播放/暂停</a>
              <a onClick={e => this.chooseSong('next')} href="javascript:;" className="b-next">下一首</a>
            </div>
            <div className="head">
              <img src="/static/img/default_album.jpg"/>
              <a href="javascript:;" className="mask"></a>
            </div>
            <div className="play">
              <div className="words">
                {
                currMusic.info?<div>
                            <a href="javascript:;" className="f-thide name fc1 f-fl">{currMusic.info.name}</a>
                            <span className="by f-thide f-fl">
                              <span title={currMusic.info.ar.map(i => i.name).join('/')}>
                                <a className="" href="/artist?id=5346">{currMusic.info.ar.map(i => i.name).join('/')}</a>
                              </span>
                            </span>
                            <a href="javascript:;" className="src"></a>
                          </div>:null
                
                }
              </div>
              <div className="m-pbar pr">
                
                <Slider tipFormatter={null} onChange={this.changePlayTime} value={timePro} defaultValue={0} />
                <div className="time">
                  <em>{formatSongTime(currPlayTime)}</em> / {currMusic.info?formatSongTime(currMusic.info.dt/1000):'00:00'}
                </div>
              </div>
            </div>
            <div className="oper fl">
              <a href="javascript:;" className="icn icn-add">收藏</a>
              <a href="javascript:;" className="icn icn-share">分享</a>
            </div>
            <div className="ctrl fl pr">
              <div className="m-vol" style={{display:showVloumeTab?'block':'none'}}>
                <div className="barbg"></div>
                <div className="vbg">
                  <Slider vertical onChange={this.changeVolume} value={this.state.volume} />
                </div>
              </div>
              <a onClick={this.toggleVolumeTab} href="javascript:;" className="icn icn-vol"></a>
              <a title={modes[currModeIndex].label} onClick={e => this.changeMode(currModeIndex+1)} href="javascript:;" className={`icn ${modes[currModeIndex].icon}`}></a>
              <span className="add pr" onClick={this.toggleList}>
                <span className="tip" style={{display:'none'}}>已添加到播放列表</span>
                <a href="javascript:;" className="icn icn-list s-fc3">{playList.tracks.length}</a>
              </span>
              <div className="tip tip-1" style={{display: this.state.showTip?'block':'none'}}>{modes[currModeIndex].label}</div>
            </div>
          </div>
          <ListTab onClick={this.chooseSong} {...this.props} currTime={currPlayTime} currIndex={currMusic.index} show={this.state.showList} onClose={this.toggleList} />
        </div>
        <audio ref={(audio) => { this.player = audio; }} src={currMusic.url} id="player"></audio>
      </div>
    );
  }
}
//播放列表面板
class ListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currWordIndex:0
    }
    this.changeSong = (e,index) => {
      if(/[^ia]/.test(e.target.tagName.toLowerCase())){
        this.props.onClick(index)
      }
    }
  }
  componentDidMount() {
    
  }
  componentWillReceiveProps(np) {
    const lrclist = np.currMusic.lrc
    lrclist.forEach((i,index) => {
      if(np.currTime > i[0]) {
        this.setState({
          currWordIndex:index
        })
      }
    })
  }
  componentDidUpdate(pp,ps) {
    if(pp.playList.tracks.length) {
      const drag = document.getElementById('songScroll')
      const out = document.getElementById('slistWrapper') 
      const con = document.getElementById('slist')
      const box = document.getElementById('sbox')
      initScroll(out,con,box,drag) 
    }
    if(pp.currMusic.lrc.length) {
      const drag = document.getElementById('lrcScroll')
      const out = document.getElementById('lrcWrapper') 
      const con = document.getElementById('lrcList')
      const box = document.getElementById('lbox')
      initScroll(out,con,box,drag)
      drag.style.top = ((ps.currWordIndex*32/con.clientHeight)*box.clientHeight) + 'px'

    }
  }
  render() {
    const {show,playList,currIndex,currMusic,currTime} = this.props
    const lrclist = currMusic.lrc
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
      playListCon = <ul className="clearfix pa" id="slist">
                    {
                      playList.tracks.map((item,index) =>(
                      <li onClick={e => this.changeSong(e,index)} key={item.id} className={index==currIndex?'active':null}>
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
                        <div className="col col-5">{formatSongTime(item.dt/1000)}</div>
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
            <a href="javascript:;" className="addall">
              <span className="ico ico-add"></span> 收藏全部 
            </a>
            <span className="line"></span>
            <a href="javascript:;" className="clear">
              <span className="ico ico-del"></span> 清除
            </a>
            <p className="lytit f-ff0 f-thide">{currMusic.info?currMusic.info.name:null}</p>
            <span onClick={this.props.onClose} className="close">关闭</span>
          </div>
        </div>
        <div className="listbd">
          <img className="imgbg j-flag" id="auto-id-OTw9gllkNDKbIisn" src="http://music.163.com/api/img/blur/65970697667341" style={{top: '-360px'}} />
          <div className="msk"></div>
          <div className="listbdc" id="slistWrapper">
            {playListCon}
          </div>
          <div className="bline" id="sbox">
            <span id="songScroll" className="scrol" ></span>
          </div>
          <div className="ask">
            <a className="ico ico-ask"></a>
          </div>
          <div className="upload">
            <a href="/lyric/up?id=110710">上传歌词</a>
            <a data-action="close" href="/lyric/report?id=110710">报错</a>
          </div>
          <div className="msk2"></div>
          <div className="listlyric" id="lrcWrapper">
            <ul id="lrcList" className="pa lrcs" style={{top:`${-(this.state.currWordIndex*32)+96}px`}}>
              {lrclist.map((lrc,index) => (
                <p key={index} className={this.state.currWordIndex == index?'curr':null}>{lrc[1]}</p>
              ))   
              }
            </ul>
          </div>
          <div className="bline bline-1" id="lbox">
            <span id="lrcScroll" className="scrol scrol-1"></span>
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