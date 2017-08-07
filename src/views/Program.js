import React, { Component} from 'react';
import Comments from '../components/Comments'
import {Link} from 'react-router-dom'
import {Spin} from 'antd'
import {dateFormat} from '../util/date'
import {formatSongTime} from '../util'

class Program extends Component {
	render() {
		return (
		<div className="g-bd4 f-cb">
			<div className="g-mn4">
				<div className="g-mn4c">
					<div className="g-wrap6">
						<div className="m-info m-info-program f-cb">
							<div className="cover u-cover u-cover-program">
								<img src="http://p1.music.126.net/2kek-rvQ7r1cRGtPzmwp1Q==/18861022463151838.jpg?param=140y140" />
							</div>
							<div className="cnt">
								<div className="cntc">
									<div className="topblk2">
										<div className="hd f-cb">
											<i className="f-fl u-icn2 u-icn2-7"></i>
											<div className="tit tit3">
												<h2 className="f-ff2">车窗外的风景</h2>
											</div>
										</div>
										<div className="rdiname">
											<i className="icon u-icn2 u-icn2-8 f-fl"></i>
											<a title="王东电台" href="/djradio?id=12" className="f-fl f-fs2 f-ff2 s-fc3">王东电台</a>
											<span>
												<a href="" className="u-btni u-btni-dy">
													<i><em className="u-icn2 u-icn2-dy"></em>订阅(90441)</i>
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="m-prointr">
							<div className="btns f-cb">
								<a href="" className="u-btni u-btni-play">
									<i>播放 36分13秒</i>
								</a>
								<a href="" className="u-btn2 u-btn2-1 u-btn2-icn">
									<i><em className="icn icn-praise"></em><span className="f-fl">(221)</span></i>
								</a>
								<a href="" className="u-btni u-btni-cmmt">
									<i>(77)</i>
								</a>
								<a href="" className="u-btni u-btni-share">
									<i>(26)</i>
								</a>
								<a href="" className="u-btni u-btni-dl">
									<i>下载</i>
								</a>
								<span className="u-outlink">
									<i className="u-icn u-icn-95"></i>
									<a className="s-fc7" href="/outchain/3/908509494/">生成外链播放器</a>
								</span>
							</div>
							<div className="sub">
								<a href="/discover/djradio/category?id=2" className="cat u-type u-type-red">音乐故事</a>
								<strong className="f-fs1">
									<span className="f-thide f-ib f-vam" title="王东电台">王东电台</span> 第157期
								</strong>
								<span className="s-fc4 sep">2017-08-05 创建</span>
								<span className="sep s-fc4">播放：<em id="play-count" className="f-fw1 s-fc6">76442</em>次</span>
							</div>
							<p className="s-fc3">
								介绍： 车启动了，窗外的一切便有了生命。欢迎收听#王东电台#——车窗外的风景……（喜欢就请你转发，手机收听，点一下可见歌单。）
							</p>
							<p className="s-fc3 f-hide">
								介绍： 车启动了，窗外的一切便有了生命。欢迎收听#王东电台#——车窗外的风景……（喜欢就请你转发，手机收听，点一下可见歌单。）
							</p>
						</div>
						<div className="n-songtb">
							<div className="prohead">
								<a href="" className="open s-fc3">
									收起<i className="icn u-icn2 u-icn2-9"></i>
								</a>
								<div className="total">
									<strong className="f-fw1">节目包含歌曲列表</strong>
									<span className="s-fc3">（8首歌）</span>
								</div>
							</div>
							<SongList tracks={[]}/>
						</div>
						<Comments />
					</div>
				</div>
			</div>
			<div className="g-sd4">
				<div className="g-wrap7">
					<div className="m-sidead f-hide"></div>
					<h3 className="u-hd3">
						<span className="f-fl"><a href="/djradio?id=12">更多节目</a></span>
						<a href="/djradio?id=12" className="more f-ff1 s-fc3">全部&gt;</a>
					</h3>
					<ul className="m-rctlist f-cb">
						{Array(5).fill(1).map((i,index) =>
							<li key={index}>
								<div className="cver u-cover u-cover-3">
									<a href="/program?id=908369264">
										<img src="http://p1.music.126.net/l11UW4HJM7nDKw3VhkBNlQ==/19140298416592852.jpg?param=50y50" />
									</a>
								</div>
								<div className="info">
									<p className="f-thide"><a className="sname f-fs1 s-fc0" href="/program?id=908369264" title="夏日傍晚的沙滩Party">夏日傍晚的沙滩Party</a></p>
									<p><span className="by s-fc4">Vol.156</span></p>
								</div>
							</li>
						)}
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
		)
	}
}

//音乐列表
class SongList extends Component {
	render() {
		const { tracks } = this.props
		if(!tracks.length) {
			return null
		}
		return (
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
							tracks.map((track,index) => (
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
														<Link to={`/song?id=${track.id}`}>
															<b title={track.name}>{track.name}</b>
														</Link>
														{track.alia.length?<span title={track.alia.join('/')} className="s-fc8"> - ({track.alia.join('/')})</span>:null}
														{track.mv?<Link to={`/mv?id=${track.mv}`} className="mv">mv</Link>:null}
													</div>
												</div>
											</div>
										</div>
									</td>
									<td className="s-fc3">
										<span className="u-dur">{formatSongTime(track.dt/1000)}</span>
										<div className="opt hshow">
											<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
											<span className="icn icn-fav"></span>
											<span className="icn icn-share"></span>
											<span className="icn icn-dl"></span>
										</div>
									</td>
									<td>
										<div className="text" title={track.ar.map(i => i.name).join('/')}>
											{
												track.ar.map((i,index) => 
													<span key={index}>
														<Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index >= track.ar.length-1?null:'/'}
													</span>
												)
											}
											
										</div>
									</td>
									<td>
										<div className="text">
											<a href={`/album?id=${track.al.id}`} title={track.al.name}>{track.al.name}</a>
										</div>
									</td>
								</tr>
							))
							}
						</tbody>
					</table>
				</div>
			)
		}
}


export default Program