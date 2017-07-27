import React, { Component} from 'react';

class PlayList extends Component {
  render() {
    return (
      <div className="g-bd4 clearfix">
      	<div className="g-mb4">
      		<div className="g-mn4c">
      			<div className="g-wrap6">
      				<div className="m-info">
      					<div className="cover u-cover u-cover-dj">
      						<img src="http://p3.music.126.net/r4Pz0IGT7TiSv_rITBm6dg==/109951162985249088.jpg?param=200y200" />
      						<span className="msk"></span>
      					</div>
      					<div className="cnt">
      						<div className="cntc">
      							<div className="hd clearfix">
      								<i className="f-fl u-icn u-icn-13"></i>
      								<div className="tit">
      									<h2 className="f-ff2 f-brk">华语R&amp;B · 30°C的夏天需要点节奏</h2>
      								</div>
      							</div>
      							<div className="user clearfix">
      								<a className="face">
      									<img src="http://p1.music.126.net/Rjpe1fUw8cJsW-NSGKpF6w==/109951162864851765.jpg?param=40y40" />
      								</a>
      								<span className="name">
      									<a href="/user/home?id=59291942" className="s-fc7">-武姜儿-</a>
      								</span>
      								<sup className="u-icn u-icn-84 "></sup>
      								<span className="time s-fc4">2017-07-21&nbsp;创建</span>
      							</div>
      							<div className="btns clearfix">
      								<a href="">
      									<i>
      										<em className="ply"></em>播放
      									</i>
      								</a>
      								<a href="" className="u-btni u-btni-add"></a>
      								<a href="" className="u-btni u-btni-fav ">
      									<i>(2034)</i>
      								</a>
      								<a href="" className="u-btni u-btni-share">
      									<i>(14)</i>
      								</a>
      								<a href="" className="u-btni u-btni-dl ">
      									<i>下载</i>
      								</a>
      								<a href="" className="u-btni u-btni-cmmt ">
      									<i>(84)</i>
      								</a>
      							</div>
      							<div className="tags clearfix">
      								<b>标签：</b>
      								{
      									Array(3).fill(1).map((i,index) => 
													<a key={index} className="u-tag">
		      									<i>华语</i>
		      								</a>
      									)
      								}
      							</div>
      							<p id="album-desc-more" className="intr f-brk">
      								<b>介绍：</b>
											在馥郁的季节 <br/>
											因花落 因寂寞 因你的回眸 <br/>
											而使我含泪唱出的 <br/>
											不过是 一首无调的歌 <br/>
											却在突然之间 <br/>
											因幕起 因灯亮 因众人的鼓掌 <br/>
											才发现 我的歌 <br/>
											竟然 是这一剧中的辉煌<br/>
											</p>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}


export default PlayList