import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {numberFormat} from '../../util'
import InfoComp from './InfoComp'

class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:null,
		}
	}
	componentDidMount() {
		const query = qs.parse(this.props.location.search)
		const id = query.id;
		api.getUserInfo(id).then(res => {
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					userInfo:res.data
				})
			}
		})
	}
	render() {
		const {userInfo} = this.state
		
		if(!userInfo) {
			return <div className="g-bd">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		const profile = userInfo.profile
		return (
		<div className="g-bd">
			<div className="g-wrap p-prf">
				<InfoComp userInfo={userInfo} profile={profile} />
				<div className="u-title u-title-1 f-cb">
					<h3><span className="f-ff2 s-fc3">TA的动态（<span id="event_count2">223</span>）</span></h3>
				</div>
				<div className="g-bd1 g-bd1-1 f-cb">
					<div className="g-mn1">
						<div className="g-mn1c">
							<div className="g-wrap10">
								<div className="m-timeline">
									<ul className="m-dlist">
										{Array(5).fill(1).map((i,index) =>
											<li key={index} className="itm">
												<div className="gface">
													<a href="/user/home?id=21002" className="ficon">
														<img className="j-flag" src="http://p1.music.126.net/_HexGaUfSyBh0B_H_wcZxA==/19198572532825162.jpg?param=45y45" />
													</a>
												</div>
												<div className="gcnt">
													<div className="dcntc">
														<div className="type f-pr f-fs1">
															<a href="/user/home?id=21002" className="s-fc7">王东</a>
															<sup className="u-icn u-icn-1"></sup>
															<span className="sep s-fc3">分享节目</span>
														</div>
														<div className="time">
															<a className="s-fc4" href="/event?id=1985065336&amp;uid=21002">8月9日 23:23</a>
														</div>
														<div className="text f-fs1  f-brk">
															<a href="javascript:;" className="s-fc7">#音乐三人行#</a>
															——暗黑任性吉普赛，松绑搜爱捉迷藏<br/><br/>
															喜欢我们的节目，欢迎你转发！<br/><br/>
															本期阵容：王东、丁薇、王海涛<br/><br/>
															面对好友，丁薇格外放松，也更加健谈，关于她的音乐和生活，也关于这张无论你喜欢还是不喜欢的专辑。<br/><br/>
															本期音乐并不主流，你能尝试完整听完吗？
														</div>
														<div className="src f-cb">
															<div className="cover cover-ply">
																<span className="lnk">
																	<img src="http://p1.music.126.net/n9Aqd_efQ3tAwedMl-zoGw==/18648816720732809.jpg?param=40y40&amp;quality=100" />
																</span>
																<a href="" className="ply u-dicn u-dicn-8 f-alpha"></a>
															</div>
															<div className="scnt">
																<h3 className="tit f-thide s-fc1 f-fs1">
																	<a href="/program?id=908602025" className="s-fc1">暗黑任性吉普赛，松绑搜爱捉迷藏</a>
																</h3>
																<h4 className="from f-thide s-fc3">
																	<a className="tag u-dtag" href="/discover/djradio/category?id=5">脱口秀<i className="rt"></i></a>
																	<a href="/djradio?id=350043871" className="s-fc3">音乐三人行</a>
																	</h4>
															</div>
														</div>
														<div className="doper">
															<a href="javascript:;" className="s-fc7"><i className="icn u-dicn u-dicn-3"></i><span className="">(9)</span></a>
															<span className="line">|</span>
															<a href="javascript:;" className="s-fc7">转发 <span className="f-hide">(0)</span></a>
															<span className="line">|</span>
															<a href="javascript:" className="s-fc7">评论 <span className="f-hide">(0)</span></a>
														</div>
														<div className="arrow u-dicn u-dicn-2"></div>
													</div>
												</div>
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="g-sd1">
						<div className="g-wrap11">
							<h4 className="v-hd4">TA的关注</h4>
							<ul className="m-gz f-cb">
								{Array(6).fill(1).map((i,index) =>
									<li key={index}>
										<a href="/user/home?id=95313677" title="鹊神怪鸟">
											<img src="http://p1.music.126.net/cDXYmITI6OZh_86FKLD5TA==/3327122186618530.jpg?param=64y64" />
										</a>
										<p>
											<a href="/user/home?id=95313677" className="nm nm-icn f-thide s-fc1" title="鹊神怪鸟">鹊神怪鸟</a> 
											<sup className="u-icn u-icn-1 "></sup>
										</p>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Event