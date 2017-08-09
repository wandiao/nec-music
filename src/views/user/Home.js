import React, { Component} from 'react';

class Home extends Component {
	render() {
		return (
		<div className="g-bd">
			<div className="g-wrap p-prf">
				<dl className="m-proifo f-cb">
					<dt className="f-pr">
						<img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=180y180" />
					</dt>
					<dd>
						<div className="name f-cb">
							<div className="f-cb">
								<div className="edit">
									<a href="/artist?id=10559" className="u-btn2 u-btn2-1"><i>查看歌手页</i></a>
								</div>
								<h2 className="wrap f-fl f-cb wrap-3">
									<span className="tit f-ff2 s-fc0 f-thide">张惠妹aMEI</span>
									<span className="lev u-lev u-icn2 u-icn2-lev">1<i className="right u-icn2 u-icn2-levr"></i></span>
									<i className="icn u-icn u-icn-02"></i>
								</h2>
								<div>
									<a href="#" className="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
									<a href="#" className="btn u-btn u-btn-6 f-tdn" style={{display:'none'}}><i>已关注</i></a>
									<a href="#" className="btn u-btn u-btn-5 f-tdn" style={{display:'none'}}><i>相互关注</i></a>
									<a href="#" className="btn u-btn u-btn-8 f-tdn" data-action="follow">关 注</a>
								</div>
							</div>
							<p className="djp f-fs1 s-fc3"><i className="u-icn u-icn-14"></i> 台湾歌手张惠妹</p>
						</div>
						<ul className="data s-fc3 f-cb">
							<li className="fst">
								<a href="/user/event?id=29879272">
									<strong id="event_count">1</strong><span>动态</span>
								</a>
							</li>
							<li>
								<a href="/user/follows?id=29879272">
									<strong id="follow_count">10</strong><span>关注</span>
								</a>
							</li>
							<li>
								<a href="/user/fans?id=29879272">
									<strong id="fan_count">429207</strong>
									<span>粉丝</span>
									<i className="u-icn u-icn-68 f-alpha" id="newCount" style={{display:'none'}}></i>
								</a>
							</li>
						</ul>
						<div className="inf s-fc3 f-brk">个人介绍：亞洲國寶級傳奇天后「 a MEI」我是a MEI，一個你認識很久，卻認識不完的女人。</div>
						<div className="inf s-fc3">
							<span>所在地区：台湾省 - 台北市</span>
						</div>
					</dd>
				</dl>
				<div className="u-title u-title-1 f-cb">
					<h3><span className="f-ff2 s-fc3">张惠妹aMEI创建的电台</span></h3>
				</div>
				<ul className="m-plylist m-create f-cb">
					<li className="itm">
						<a href="/djradio?id=343" className="col cvr u-cover-3">
							<img src="http://p1.music.126.net/IlWff-0NLLBcBspcDQFQPw==/5976945209011951.jpg?param=50y50" className="" />
						</a>
						<div className="col cnt f-pr f-thide">
							<a href="/djradio?id=343" className="s-fc1">aMEI电台</a>
							<div className="opt hshow">
								<span data-res-action="share" className="icn u-icn2 u-icn2-share">分享</span>
							</div>
						</div>
						<div className="col col-3 s-fc3">订阅1646次</div>
						<div className="col col-4 s-fc4">1期</div>
					</li>
				</ul>
				<div className="u-title u-title-1 f-cb m-record-title">
					<h3><span className="f-ff2 s-fc3">听歌排行</span></h3>
					<h4>累积听歌29首</h4>
					<span className="n-iconpoint">
						<a href="javascript:void(0)" className="icon u-icn2 u-icn2-5 j-flag"></a>
						<div className="tip">
							<p>实际播放时间过短的歌曲将不纳入计算。</p>
							<i className="t"></i><i className="b"></i>
						</div>
					</span>
					<div className="nav f-cb">
						<span className="sel">所有时间</span>
						<i></i>
						<span>最近一周</span>
					</div>
				</div>
				<div className="m-record">
					<ul>
						{Array(10).fill(1).map((i,index) =>
							<li key={index} className={index%2 == 0?'even':null}>
								<div className="hd ">
									<span className="ply ">&nbsp;</span><span className="num">{index+1}.</span>
								</div>
								<div className="song">
									<div className="tt">
										<div className="ttc">
											<span className="txt">
												<a href="/song?id=28754103"><b title="Booty Call">Booty Call</b></a>
												<span className="ar s-fc8"> <em>-</em>
													<span title="张惠妹"><a className="s-fc8" href="/artist?id=10559">张惠妹</a></span>
												</span>
											</span>
										</div>
									</div>
									<div className="opt">
										<a className="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
										<span className="icn icn-fav" title="收藏"></span>
										<span className="icn icn-share" title="分享">分享</span>
										<span className="icn icn-dl" title="下载">下载</span>
									</div>
								</div>
								<div className="tops"><span className="bg" style={{width:'100%'}}></span></div>
							</li>
						)}
					</ul>
					<div className="more"><a href="/user/songs/rank?id=29879272">查看更多&gt;</a></div>
				</div>
				<div className="u-title u-title-1 f-cb" >
					<h3><span className="f-ff2">张惠妹aMEI创建的歌单（3）</span></h3>
				</div>
				<ul className="m-cvrlst f-cb">
					{Array(5).fill(1).map((i,index) =>
						<li key={index}>
							<div className="u-cover u-cover-1">
								<img src="http://p1.music.126.net/3gY4PcSVv4veogE6FOmr7Q==/3382097768218496.jpg?param=140y140" />
								<a href="/playlist?id=20574603" className="msk" title="张惠妹aMEI喜欢的音乐"></a>
								<div className="bottom">
									<a className="icon-play f-fr" href="javascript:;" title="播放"></a>
									<span className="icon-headset"></span>
									<span className="nb">11万</span>
								</div>
							</div>
							<p className="dec">
								<a className="tit f-thide s-fc0" href="/playlist?id=20574603" title="张惠妹aMEI喜欢的音乐">张惠妹aMEI喜欢的音乐</a>
							</p>
						</li>
					)}
				</ul>
			</div>
		</div>
		)
	}
}

export default Home