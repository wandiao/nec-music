import React, { Component} from 'react';

class Recommend extends Component {
  render() {
    return (
      <div className="recommend-page">
      	<Banner />
      	<div className="g-bd1">
      		<div className="g-mn1">
      			<div className="g-mn1c">
      				<div className="g-wrap3">
      					<div className="n-rcmd">
      						<div className="v-hd2">
      							<a href="" className="tit f-ff2 f-tdn"></a>
      							<div className="tab">
      								<a href="s-fc3">华语</a>
      								<span className="line">|</span>
      								<a href="s-fc3">流行</a>
      								<span className="line">|</span>
      								<a href="s-fc3">摇滚</a>
      								<span className="line">|</span>
      								<a href="s-fc3">民谣</a>
      								<span className="line">|</span>
      								<a href="s-fc3">电子</a>
      								<span className="line">|</span>
      							</div>
      							<span className="more">
      								<a href="" className="s-fc3">更多</a>
      								<i className="cor s-bg s-bg-6">&nbsp;</i>
      							</span>
      						</div>
      						<ul className="m-cvrlst">
      							{Array(8).fill(1).map((i,index) => 
											<li key={index}>
	      								<div className="u-cover u-cover-1">
	      									<img src="http://p1.music.126.net/VH2QGwjOTg2z_dNhHGq7TQ==/109951162978363658.jpg?param=140y140" />
	      									<a href="" className="msk"></a>
	      									<div className="bottom">
	      										<a href="" className="icon-play fr"></a>
	      										<span className="icon-headset"></span>
	      										<span className="nb">169万</span>
	      									</div>
	      								</div>
	      								<p className="dec">
	      									<a href="" className="tit s-fc0">【华语】网剧大盘点，你最喜欢哪一部？</a>
	      								</p>
	      							</li>
										)}	
      						</ul>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
 class Banner extends Component {
 	render() {
 		return (
			<div className="n-ban">
				<div className="wrap">
					<div className="ban pr">
						<a href="" className="active">
							<img src="/static/media/banner-ex.jpg" />
						</a>
						<a href="" className="btnl">&gt;</a>
						<a href="" className="btnr">&lt;</a>
						<div className="dots">
							{Array(8).fill(1).map((i,index) => 
								<a className="pg" key={index}></a>
							)}
						</div>
					</div>
					<div className="download pr">
						<a href="" className="btn">下载客户端</a>
						<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
						<span className="shadow"></span>
						<span className="shadowr"></span>
					</div>
				</div>
			</div>
 		)
 	}
 }

export default Recommend