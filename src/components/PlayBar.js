import React, { Component} from 'react';

class PlayBar extends Component {
  render() {
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
              <a href="" className="b-play">播放/暂停</a>
              <a href="" className="b-next">下一首</a>
            </div>
            <div className="head">
              <img src="/static/media/default_album.jpg"/>
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
              <span className="add pr">
                <span className="tip" style={{display:'none'}}>已添加到播放列表</span>
                <a href="" className="icn icn-list s-fc3">0</a>
              </span>
              <div className="tip tip-1" style={{display: 'none'}}>随机</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PlayBar