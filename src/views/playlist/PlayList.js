import React, { Component} from 'react';
import Comments from '../../components/Comments'

class PlayList extends Component {
  render() {
    return (
      <div className="g-bd4 clearfix">
      	<div className="g-mn4">
      		<div className="g-mn4c">
      			<div className="g-wrap6">
      				<div className="m-info clearfix">
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
      								<a href="" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
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
      				<SongTab />
      				<Comments />
      			</div>
      		</div>
      	</div>
      	<div className="g-sd4">
      		<div className="g-wrap7">
      			<div className="m-sidead f-hide"></div>
      			<h3 className="u-hd3">
      				<span className="f-fl">热门歌单</span>
      			</h3>
      			<ul className="m-rctlist f-cb">
	      			{
	      				Array(5).fill(1).map((i,index) =>
									<li key={index}>
		      					<div className="cver u-cover u-cover-3">
		      						<a href="">
		      							<img src="http://p1.music.126.net/c9uJ_08enpZHe6k4PN24kw==/19156791091005417.jpg?param=50y50" />
		      						</a>
		      					</div>
		      					<div className="info">
		      						<p className="f-thide">
		      							<a href="" className="sname f-fs1 s-fc0">假装去过大不列颠</a>
		      						</p>
		      						<p>
		      							<span className="by s-fc4">by</span>
		      							<a className="nm nm f-thide s-fc3">Desperado石竹</a>
		      						</p>
		      					</div>
		      				</li>
	      				)
	      			}	
      			</ul>
      			<div className="m-multi">
      				<h3 className="u-hd3">
								<span className="f-fl">网易云音乐多端下载</span>
							</h3>
							<ul className="bg">
								<li>
									<a href="" className="ios"></a>
								</li>
								<li>
									<a href="" className="pc"></a>
								</li>
								<li>
									<a href="" className="aos"></a>
								</li>
							</ul>
							<p className="s-fc4">同步歌单，随时畅听320k好音乐</p>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

//音乐列表
class SongTab extends Component {
	render() {
	return (
		<div className="n-songtb">
			<div className="u-title u-title-1 f-cb">
				<h3>
					<span className="f-ff2">歌曲列表</span>
				</h3>
				<span className="sub s-fc3">
					<span>38</span>首歌
				</span>
				<div className="more s-fc3">
					播放：<strong className="s-fc6">2363040</strong>次
				</div>
				<div className="out out-list s-fc3">
					<i className="u-icn u-icn-95 f-fl"></i>
					<a className="des s-fc7">生成外链播放器</a>
				</div>
			</div>
			<div className="track-list">
				<table className="m-table">
					<thead>
						<tr>
							<th className="first w1">
								<div className="wp"></div>
							</th>
							<th>
								<div className="wp">歌曲标题</div>
							</th>
							<th className="w2">
								<div className="wp">时长</div>
							</th>
							<th className="w3">
								<div className="wp">歌手</div>
							</th>
							<th className="w4">
								<div className="wp">专辑</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{
						Array(50).fill(1).map((i,index) => (
							<tr key={index} className={index%2 == 0?'even':null}>
								<td className="left">
									<div className="hd">
										<span className="ply"></span>
										<span className="num">{index+1}</span>
									</div>
								</td>
								<td>
									<div className="clearfix">
										<div className="tt">
											<div className="ttc">
												<div className="txt">
													<a href="/song?id=25642889">
														<b title="你和我">你和我</b>
													</a>
													<span title="电影《夏有乔木雅望天堂》推广曲" className="s-fc8"> - (电影《夏有乔木雅望天堂》推广曲)</span>
													<span className="mv">mv</span>
												</div>
											</div>
										</div>
									</div>
								</td>
								<td className="s-fc3">
									<span className="u-dur">04:38</span>
									<div className="opt hshow">
										<a href="" className="u-icn u-icn-81 icn-add"></a>
										<span className="icn icn-fav"></span>
										<span className="icn icn-share"></span>
										<span className="icn icn-dl"></span>
									</div>
								</td>
								<td>
									<div className="text" title="王力宏">
										<span title="王力宏">
											<a className="" href="/artist?id=5346">王力宏</a>
										</span>
									</div>
								</td>
								<td>
									<div className="text">
										<a href="/album?id=2263149" title="不可思议">不可思议</a>
									</div>
								</td>
							</tr>
						))
						}
					</tbody>
				</table>
			</div>
		</div>
		)
	}
}


export default PlayList