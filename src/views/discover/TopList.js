import React, { Component} from 'react';
import Comments from '../../components/Comments'

class TopList extends Component {
  render() {
    return (
      <div id="toplist" className="g-bd3 g-bd3-1 f-cb">
      	<div className="g-sd3 g-sd3-1">
      		<div className="n-minelst n-minelst-2">
      			<h2 className="f-ff1">云音乐特色榜</h2>
      			<ul className="clearfix">
      				{
								Array(4).fill(4).map((i,index) => 
									<li key={index} className={index==0?'mine selected':'mine'}>
										<div className="item clearfix">
											<div className="left">
												<a className="avatar" href="/discover/toplist?id=19723756">
													<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜" />
													<span className="msk"></span>
												</a>
											</div>
											<p className="name">
												<a href="/discover/toplist?id=19723756" className="s-fc0">云音乐飙升榜</a>
											</p>
											<p className="s-fc4">每天更新</p>
										</div>
									</li>
								)
      				}
      			</ul>
      			<h2 className="scd f-ff1">全球媒体榜</h2>
      			<ul className="clearfix">
      				{
								Array(10).fill(4).map((i,index) => 
									<li key={index} className="mine">
										<div className="item clearfix">
											<div className="left">
												<a className="avatar" href="/discover/toplist?id=19723756">
													<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜" />
													<span className="msk"></span>
												</a>
											</div>
											<p className="name">
												<a href="/discover/toplist?id=19723756" className="s-fc0">云音乐飙升榜</a>
											</p>
											<p className="s-fc4">每天更新</p>
										</div>
									</li>
								)
      				}
      			</ul>
      		</div>
      	</div>
      	<div className="g-mn3">
      		<div className="g-mn3c">
      			<div className="g-wrap">
      				<div className="m-info m-info-rank f-cb">
      					<div className="cover u-cover u-cover-rank">
      						<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" />
      						<span className="msk"></span>
      					</div>
      					<div className="cnt">
      						<div className="cntc m-info">
      							<div className="hd clearfix">
      								<h2 className="f-ff2">云音乐飙升榜</h2>
      							</div>
      							<div className="user clearfix">
      								<i className="u-icn u-icn-57"></i>
      								<span className="sep s-fc3">最近更新：07月28日</span>
      								<span className="s-fc4">（每天更新）</span>
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
      						</div>
      					</div>
      				</div>
      			</div>
      			<SongList />
      		</div>
      	</div>
      </div>
    )
  }
}
class SongList extends Component {
	render() {
		return (
			<div className="g-wrap12">
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
				</div>
				<table className="m-table m-table-rank">
					<thead>
						<tr>
							<th className="first w1"></th>
							<th><div className="wp">标题</div></th>
							<th className="w2-1"><div className="wp">时长</div></th>
							<th className="w3"><div className="wp">歌手</div></th>
						</tr>
					</thead>
					<tbody>
						{
						Array(50).fill(1).map((i,index) => (
							<tr key={index} className={index%2 == 0?'even':null}>
								<td>
									<div className="hd">
										<span className="num">{index+1}</span>
										<div className="rk">
											<span className="u-icn u-icn-75"></span>
										</div>
									</div>
								</td>
								<td className={index<=2?'rank':null}>
									<div className="clearfix">
										<div className="tt">
										 {
										 		index<=2?<a href="">
												<img className="rpic" src="http://p1.music.126.net/1gKLkZnqyCAzRUU5StQu4g==/19086422346823345.jpg?param=50y50&amp;quality=100" />
											</a>:null
										 }
											<div className="ply"></div>
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
							</tr>
						))
						}
					</tbody>
				</table>
				<Comments />
			</div>
		)
	}
}

export default TopList