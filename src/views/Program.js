import React, { Component} from 'react';
import Comments from '../components/Comments'
import {Link} from 'react-router-dom'
import {Spin} from 'antd'
import {dateFormat} from '../util/date'
import * as api from '../api'
import qs from 'query-string'

function formatSongTime(time) {
  var minute = Math.floor(time / 60);
  var second = Math.floor(time - (minute * 60))
  time = minute + "分" + second + '秒'
  return time
}
class Program extends Component {
	constructor(props) {
		super(props);
		this.state = {
			program:null,
			showList:true,
			commentData:null,
			otherPrograms:[]
		}
		this.toggleShowList = () => {
			this.setState(ps => {
				return {
					showList:!ps.showList
				}
			})
		}
		this.choosePage = (page,pageSize,pos) => {
			console.log(page-1)
			const id = qs.parse(this.props.location.search).id;
			api.getDjComment(id,page-1).then(res => {
				if(res.data.code == 200) {
					window.scrollTo.apply(null,pos)
					this.setState({
						commentData:res.data
					})
				}
			})	
		}
	}
	componentDidMount() {
		const id = qs.parse(this.props.location.search).id
		api.getDjProgramDetail(id).then(res =>{
			console.log(res.data)
			if(res.data.code == 200) {
				this.setState({
					program:res.data.program
				})
				const rid = res.data.program.radio.id
				return api.getDjPrograms(rid,0,6)
			}
		})
		.then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					otherPrograms:res.data.programs.slice(1)
				})
			}
		})
		api.getDjComment(id).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					commentData:res.data
				})
			} 
		})
	}
	render() {
		const {program,showList,commentData,otherPrograms} = this.state;
		let otherList = null
		if(!program) {
			return <div className="g-bd4 clearfix">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		if(!otherPrograms.length) {
			otherList = <div style={{height:'200px'}} className="loading"><Spin tip="Loading..." /></div>
		}else{
			otherList = otherPrograms.map((i,index) =>
				<li key={index}>
					<div className="cver u-cover u-cover-3">
						<Link to={`/program?id=${i.id}`}>
							<img src={i.coverUrl} />
						</Link>
					</div>
					<div className="info">
						<p className="f-thide"><Link className="sname f-fs1 s-fc0" to={`/program?id=${i.id}`} title={i.name}>{i.name}</Link></p>
						<p><span className="by s-fc4">Vol.{i.serialNum}</span></p>
					</div>
				</li>
			)
		}

		return (
		<div className="g-bd4 f-cb">
			<div className="g-mn4">
				<div className="g-mn4c">
					<div className="g-wrap6">
						<div className="m-info m-info-program f-cb">
							<div className="cover u-cover u-cover-program">
								<img src={program.coverUrl} />
							</div>
							<div className="cnt">
								<div className="cntc">
									<div className="topblk2">
										<div className="hd f-cb">
											<i className="f-fl u-icn2 u-icn2-7"></i>
											<div className="tit tit3">
												<h2 className="f-ff2">{program.name}</h2>
											</div>
										</div>
										<div className="rdiname">
											<i className="icon u-icn2 u-icn2-8 f-fl"></i>
											<Link title={program.radio.name} to={`/djradio?id=${program.radio.id}`} className="f-fl f-fs2 f-ff2 s-fc3">{program.radio.name}</Link>
											<span>
												<a href="javascript:;" className="u-btni u-btni-dy">
													<i><em className="u-icn2 u-icn2-dy"></em>订阅({program.radio.subCount})</i>
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="m-prointr">
							<div className="btns f-cb">
								<a href="javascript:;" className="u-btni u-btni-play">
									<i>播放 {formatSongTime(program.duration/1000)}</i>
								</a>
								<a href="javascript:;"  className="u-btn2 u-btn2-1 u-btn2-icn">
									<i><em className="icn icn-praise"></em><span className="f-fl">({program.likedCount})</span></i>
								</a>
								<a href="javascript:;"  className="u-btni u-btni-cmmt">
									<i>({program.commentCount})</i>
								</a>
								<a href="javascript:;"  className="u-btni u-btni-share">
									<i>({program.shareCount})</i>
								</a>
								<a href="javascript:;" className="u-btni u-btni-dl">
									<i>下载</i>
								</a>
								<span className="u-outlink">
									<i className="u-icn u-icn-95"></i>
									<a className="s-fc7" href="/outchain/3/908509494/">生成外链播放器</a>
								</span>
							</div>
							<div className="sub">
								<Link to={`/discover/djradio/category?id=${program.radio.categoryId}`} className="cat u-type u-type-red">{program.radio.category}</Link>
								<strong className="f-fs1">
									<span className="f-thide f-ib f-vam" title={program.radio.name}>{program.radio.name}</span> 第{program.serialNum}期
								</strong>
								<span className="s-fc4 sep">{dateFormat(program.createTime,'yyyy-MM-dd')} 创建</span>
								<span className="sep s-fc4">播放：<em id="play-count" className="f-fw1 s-fc6">{program.listenerCount}</em>次</span>
							</div>
							<p className="s-fc3">
								介绍： {program.description}
							</p>
							<p className="s-fc3 f-hide">
								介绍： {program.description}
							</p>
						</div>
						<div className="n-songtb">
							<div className="prohead">
								<a onClick={this.toggleShowList} href="javascript:;" className={showList?'open s-fc3':'open-close open sfc3'}>
									{showList?'收起':'展开'}<i className="icn u-icn2 u-icn2-9"></i>
								</a>
								<div className="total">
									<strong className="f-fw1">节目包含歌曲列表</strong>
									<span className="s-fc3">（{program.songs.length}首歌）</span>
								</div>
							</div>
							<SongList show={showList} tracks={program.songs}/>
						</div>
						<Comments onChange={this.choosePage} data={commentData} />
					</div>
				</div>
			</div>
			<div className="g-sd4">
				<div className="g-wrap7">
					<div className="m-sidead f-hide"></div>
					<h3 className="u-hd3">
						<span className="f-fl"><Link to={`/djradio?id=${program.radio.id}`}>更多节目</Link></span>
						<Link to={`/djradio?id=${program.radio.id}`} className="more f-ff1 s-fc3">全部&gt;</Link>
					</h3>
					<ul className="m-rctlist f-cb">
					{otherList}
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
		const { tracks,show } = this.props
		if(!tracks.length) {
			return null
		}
		return (
				<div className="track-list" style={{display:show?'block':'none'}}>
					<table className="m-table">
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
														{track.alias.length?<span title={track.alias.join('/')} className="s-fc8"> - ({track.alias.join('/')})</span>:null}
														{track.mv?<Link to={`/mv?id=${track.mv}`} className="mv">mv</Link>:null}
													</div>
												</div>
											</div>
										</div>
									</td>
									<td className="s-fc3">
										<span className="u-dur">{dateFormat(track.duration,'mm:ss')}</span>
										<div className="opt hshow">
											<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
											<span className="icn icn-fav"></span>
											<span className="icn icn-share"></span>
											<span className="icn icn-dl"></span>
										</div>
									</td>
									<td>
										<div className="text" title={track.artists.map(i => i.name).join('/')}>
											{
												track.artists.map((i,index) => 
													<span key={index}>
														<Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index >= track.artists.length-1?null:'/'}
													</span>
												)
											}
											
										</div>
									</td>
									<td>
										<div className="text">
											<a href={`/album?id=${track.album.id}`} title={track.album.name}>{track.album.name}</a>
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