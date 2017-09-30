import React, { Component } from 'react';

// 多端下载模版
class DlTemp extends Component {
  render() {
    return (
      <div className="m-multi">
        <h3 className="u-hd3">
          <span className="f-fl">网易云音乐多端下载</span>
        </h3>
        <ul className="bg">
          <li>
            <a href="" className="ios" />
          </li>
          <li>
            <a href="" className="pc" />
          </li>
          <li>
            <a href="" className="aos" />
          </li>
        </ul>
        <p className="s-fc4">同步歌单，随时畅听320k好音乐</p>
      </div>
    );
  }
}

export default DlTemp;