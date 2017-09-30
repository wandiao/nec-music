import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="g-ft">
        <div className="m-ft">
          <div className="clearfix f-cb">
            <div className="copy">
              <p>
                <a className="s-fc4">关于网易</a>
                <span className="line">|</span>
                <a className="s-fc4">客户服务</a>
                <span className="line">|</span>
                <a className="s-fc4">服务条款</a>
                <span className="line">|</span>
                <a className="s-fc4">网站导航</a>
                <span className="line">|</span>
                <a className="s-fc4">意见反馈</a>
              </p>
              <p className="s-fc3">
                <span className="sep">网易公司版权所有©1997-2017</span>
                  杭州乐读科技有限公司运营：
                <a href="javascript:;" className="s-fc3">浙网文[2015] 0415-135号</a>
              </p>
            </div>
            <ul className="enter fr">
              <li>
                <a href="" className="logo logo-musician tid">独立音乐人</a>
              </li>
              <li>
                <a href="" className="logo logo-topic tid">音乐专栏</a>
              </li>
              <li>
                <a href="" className="logo logo-media tid">自媒体</a>
              </li>
              <li>
                <a href="" className="logo logo-reward tid">赞赏</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer;