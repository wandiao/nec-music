import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {numberFormat} from '../../util'
import ExtendRoute from '../../components/ExtendRoute'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:null,
			djRadios:[],
			records:[],
			pl:[],
			spl:[]
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
		api.getUserDj(id).then(res =>{
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					djRadios:res.data.djRadios
				})
			}
		})
		api.getUserRecord(id).then(res => {
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					records:res.data.allData.slice(0,10)
				})
			}
		})
		api.getUserPlaylist(id).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					pl:res.data.playlist.filter(i => i.userId == id),
					spl:res.data.playlist.filter(i => i.userId != id)
				})
			}
		})
	}
	render() {
		const {userInfo,djRadios,records,pl,spl} = this.state
		
		if(!userInfo) {
			return <div className="g-bd">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		const profile = userInfo.profile
		let djList,recordList,playlist,splaylist;
		if(!djRadios.length) {
			djList = <div style={{height:'70px'}} className="loading"><Spin tip="Loading..." /></div>
		}else{
			djList = djRadios.map((i,index) =>
				<li className="itm" key={index}>
					<Link to={`/djradio?id=${i.id}`} className="col cvr u-cover-3">
						<img src={i.picUrl} className="" />
					</Link>
					<div className="col cnt f-pr f-thide">
						<Link to={`/djradio?id=${i.id}`} className="s-fc1">{i.name}</Link>
						<div className="opt hshow">
							<span data-res-action="share" className="icn u-icn2 u-icn2-share">分享</span>
						</div>
					</div>
					<div className="col col-3 s-fc3">订阅{i.subCount}次</div>
					<div className="col col-4 s-fc4">{i.programCount}期</div>
				</li>
			)
		}
		if(!records.length){
			recordList = <div style={{height:'70px'}} className="loading"><Spin tip="Loading..." /></div>
		}else{
			recordList = records.map((i,index) =>
							<li key={index} className={index%2 == 0?'even':null}>
								<div className="hd ">
									<span className="ply ">&nbsp;</span><span className="num">{index+1}.</span>
								</div>
								<div className="song">
									<div className="tt">
										<div className="ttc">
											<span className="txt">
												<Link to={`/song?id=${i.song.id}`}><b title="Booty Call">{i.song.name}</b></Link>
												<span className="ar s-fc8"> <em>-</em>
													<span title={i.song.ar.map(i =>i.name).join('/')}>
													{
														i.song.ar.map((ai,index1)=>
															<span key={index1}>
																<Link className="s-fc8" to={`/artist?id=${ai.id}`}>{ai.name}</Link>
																{index1>=i.song.ar.length-1?null:'/'}
															</span>
														)
													}	
													</span>
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
								<div className="tops"><span className="bg" style={{width:`${i.score}%`}}></span></div>
							</li>
			)
		}
		if(!pl.length) {
			playlist = <div style={{height:'190px'}} className="loading"><Spin tip="Loading..." /></div>
		}else{
			playlist = pl.map((i,index) =>
						<li key={index}>
							<div className="u-cover u-cover-1">
								<img src={i.coverImgUrl}/>
								<Link to={`/playlist?id=${i.id}`} className="msk" title={i.name}></Link>
								<div className="bottom">
									<a className="icon-play f-fr" href="javascript:;" title="播放"></a>
									<span className="icon-headset"></span>
									<span className="nb">{numberFormat(i.playCount)}</span>
								</div>
							</div>
							<p className="dec">
								<Link className="tit f-thide s-fc0" to={`/playlist?id=${i.id}`} title={i.name}>{i.name}</Link>
							</p>
						</li>
			)
		}
		if(!spl.length) {
			splaylist = <div style={{height:'190px'}} className="loading"><Spin tip="Loading..." /></div>
		}else{
			splaylist = spl.map((i,index) =>
						<li key={index}>
							<div className="u-cover u-cover-1">
								<img src={i.coverImgUrl}/>
								<Link to={`/playlist?id=${i.id}`} className="msk" title={i.name}></Link>
								<div className="bottom">
									<a className="icon-play f-fr" href="javascript:;" title="播放"></a>
									<span className="icon-headset"></span>
									<span className="nb">{numberFormat(i.playCount)}</span>
								</div>
							</div>
							<p className="dec">
								<Link className="tit f-thide s-fc0" to={`/playlist?id=${i.id}`} title={i.name}>{i.name}</Link>
							</p>
						</li>
			)
		}
		return (
		<div className="g-bd">
			<div className="g-wrap p-prf">
				<dl className="m-proifo f-cb">
					<dt className="f-pr">
						<img src={profile.avatarUrl} />
					</dt>
					<dd>
						<div className="name f-cb">
							<div className="f-cb">
								<div className="edit">
									{profile.artistId?<Link to={`/artist?id=${profile.artistId}`} className="u-btn2 u-btn2-1"><i>查看歌手页</i></Link>:null}
								</div>
								<h2 className="wrap f-fl f-cb wrap-3">
									<span className="tit f-ff2 s-fc0 f-thide">{profile.nickname}</span>
									<span className="lev u-lev u-icn2 u-icn2-lev">{userInfo.level}<i className="right u-icn2 u-icn2-levr"></i></span>
									{profile.gender == 2?<i className="icn u-icn u-icn-02"></i>:<i className="icn u-icn u-icn-01"></i>}
								</h2>
								<div>
									<a href="#" className="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
									<a href="#" className="btn u-btn u-btn-6 f-tdn" style={{display:'none'}}><i>已关注</i></a>
									<a href="#" className="btn u-btn u-btn-5 f-tdn" style={{display:'none'}}><i>相互关注</i></a>
									<a href="#" className="btn u-btn u-btn-8 f-tdn" data-action="follow">关 注</a>
								</div>
							</div>
							<p className="djp f-fs1 s-fc3">{profile.userType?<i className="u-icn u-icn-14"></i>:null} {profile.description}</p>
						</div>
						<ul className="data s-fc3 f-cb">
							<li className="fst">
								<a href="/user/event?id=29879272">
									<strong id="event_count">{profile.eventCount}</strong><span>动态</span>
								</a>
							</li>
							<li>
								<a href="/user/follows?id=29879272">
									<strong id="follow_count">{profile.follows}</strong><span>关注</span>
								</a>
							</li>
							<li>
								<a href="/user/fans?id=29879272">
									<strong id="fan_count">{profile.followeds}</strong>
									<span>粉丝</span>
									<i className="u-icn u-icn-68 f-alpha" id="newCount" style={{display:'none'}}></i>
								</a>
							</li>
						</ul>
						<div className="inf s-fc3 f-brk">个人介绍：{profile.signature}</div>
						<div className="inf s-fc3">
							<span>所在地区：{profile.province} - {profile.city}</span>
						</div>
					</dd>
				</dl>
				<div className="u-title u-title-1 f-cb">
					<h3><span className="f-ff2 s-fc3">{profile.nickname}创建的电台</span></h3>
				</div>
				<ul className="m-plylist m-create f-cb">
					{djList}
				</ul>
				<div className="u-title u-title-1 f-cb m-record-title">
					<h3><span className="f-ff2 s-fc3">听歌排行</span></h3>
					<h4>累积听歌{userInfo.listenSongs}首</h4>
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
						{recordList}
					</ul>
					<div className="more"><a href="/user/songs/rank?id=29879272">查看更多&gt;</a></div>
				</div>
				<div className="u-title u-title-1 f-cb" >
					<h3><span className="f-ff2">{profile.nickname}创建的歌单（{pl.length}）</span></h3>
				</div>
				<ul className="m-cvrlst f-cb">
					{playlist}
				</ul>
				<div id="collectlsit" style={{display:spl.length?'block':'none'}}>
					<div className="u-title u-title-1 f-cb" >
						<h3><span className="f-ff2">{profile.nickname}收藏的歌单（{spl.length}）</span></h3>
					</div>
					<ul className="m-cvrlst f-cb">
						{splaylist}
					</ul>
				</div>
			</div>
		</div>
		)
	}
}

export default Home