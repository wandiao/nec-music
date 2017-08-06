import React, { Component} from 'react';
import Comments from '../../components/Comments'
import * as api from '../../api'
import {Link} from 'react-router-dom'
import qs from 'query-string'
import {Spin} from 'antd'
import {dateFormat} from '../../util/date'

//排行榜
class TopList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			featureList:[],
			globalList:[],
			currId:19723756,
			listDetail:null,
			commentData:null
		}
		this.choosePage = (page,pageSize,pos) => {
			console.log(page-1)
			const id = qs.parse(this.props.location.search).id;
			api.getPlayListComment(id,page-1).then(res => {
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
		let id = qs.parse(this.props.location.search).id;
		if(id === undefined) {
			id = 19723756
		}
		this.setState({
			currId:id
		})
		api.getTops().then(res => {
			if(res.data.code == 200) {
				const featureList = res.data.list.filter(i => i.ToplistType)
				const globalList = res.data.list.filter(i => !i.ToplistType)
				this.setState({
					featureList:featureList,
					globalList:globalList
				})
				return api.getTopList(id)
			}
		})
		.then(res => {
			if(res.data.code == 200) {
				// console.log(res.data)
				this.setState({
					listDetail:res.data.result
				})
			}
		})
		api.getPlayListComment(id).then(res => {
			if(res.data.code == 200) {
				this.setState({
					commentData:res.data
				})
			}
		})
	}
	componentWillReceiveProps(np) {
		let id = qs.parse(np.location.search).id;
		if(id === undefined) {
			id = 19723756
		}
		this.setState({
			currId:id,
			listDetail:null
		})
		api.getTopList(id).then(res => {
			if(res.data.code == 200) {
				// console.log(res.data)
				this.setState({
					listDetail:res.data.result
				})
			}
		})
		api.getPlayListComment(id).then(res => {
			if(res.data.code == 200) {
				this.setState({
					commentData:res.data
				})
			}
		})
	}
  render() {
  	const {currId,listDetail,commentData,featureList,globalList} = this.state
  	let main,topList;
  	if(!featureList.length || !globalList.length){
  		topList = null;
  	}else{
  		topList = <div className="n-minelst n-minelst-2">
			      			<h2 className="f-ff1">云音乐特色榜</h2>
			      			<ul className="clearfix">
			      				{
											featureList.map((i,index) => 
												<li key={i.id} className={index==0?'mine selected':'mine'}>
													<div className="item clearfix">
														<div className="left">
															<Link className="avatar" to={`/discover/toplist?id=${i.id}`}>
																<img src={i.coverImgUrl} alt={i.name} />
																<span className="msk"></span>
															</Link>
														</div>
														<p className="name">
															<Link to={`/discover/toplist?id=${i.id}`} className="s-fc0">{i.name}</Link>
														</p>
														<p className="s-fc4">{i.updateFrequency}</p>
													</div>
												</li>
											)
			      				}
			      			</ul>
			      			<h2 className="scd f-ff1">全球媒体榜</h2>
			      			<ul className="clearfix">
			      				{
											globalList.map((i,index) => 
												<li key={i.id} className={index==0?'mine selected':'mine'}>
													<div className="item clearfix">
														<div className="left">
															<Link className="avatar" to={`/discover/toplist?id=${i.id}`}>
																<img src={i.coverImgUrl} alt={i.name} />
																<span className="msk"></span>
															</Link>
														</div>
														<p className="name">
															<Link to={`/discover/toplist?id=${i.id}`} className="s-fc0">{i.name}</Link>
														</p>
														<p className="s-fc4">{i.updateFrequency}</p>
													</div>
												</li>
											)
			      				}
			      			</ul>
			      		</div>
  	}
  	if(!listDetail) {
  		main = <div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  		if(!featureList.length) {
  			main = null;
  		}
  	}else{
  		main = <div className="g-mn3c">
	      			<div className="g-wrap">
	      				<div className="m-info m-info-rank f-cb">
	      					<div className="cover u-cover u-cover-rank">
	      						<img src={listDetail.coverImgUrl} />
	      						<span className="msk"></span>
	      					</div>
	      					<div className="cnt">
	      						<div className="cntc m-info">
	      							<div className="hd clearfix">
	      								<h2 className="f-ff2">{listDetail.name}</h2>
	      							</div>
	      							<div className="user clearfix">
	      								<i className="u-icn u-icn-57"></i>
	      								<span className="sep s-fc3">最近更新：{dateFormat(listDetail.updateTime,'MM月dd日')}</span>
	      								<span className="s-fc4">（每天更新）</span>
	      							</div>
	      							<div className="btns clearfix">
	      								<a href="javascript:;" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
	      									<i>
	      										<em className="ply"></em>播放
	      									</i>
	      								</a>
	      								<a href="javascript:;" className="u-btni u-btni-add"></a>
	      								<a href="javascript:;" className="u-btni u-btni-fav ">
	      									<i>({listDetail.subscribedCount})</i>
	      								</a>
	      								<a href="javascript:;" className="u-btni u-btni-share">
	      									<i>({listDetail.shareCount})</i>
	      								</a>
	      								<a href="javascript:;" className="u-btni u-btni-dl ">
	      									<i>下载</i>
	      								</a>
	      								<a href="javascript:;" className="u-btni u-btni-cmmt ">
	      									<i>({listDetail.commentCount})</i>
	      								</a>
	      							</div>
	      						</div>
	      					</div>
	      				</div>
	      			</div>
	      			<div className="g-wrap12">
								<div className="u-title u-title-1 f-cb">
									<h3>
										<span className="f-ff2">歌曲列表</span>
									</h3>
									<span className="sub s-fc3">
										<span>{listDetail.tracks.length}</span>首歌
									</span>
									<div className="more s-fc3">
										播放：<strong className="s-fc6">{listDetail.playCount}</strong>次
									</div>
								</div>
								<SongList tracks={listDetail.tracks} id={listDetail.id}/>
								<Comments onChange={this.choosePage} data={commentData} />
							</div>
	      			
	      		</div>
  	}
    return (
      <div id="toplist" className="g-bd3 g-bd3-1 f-cb">
      	<div className="g-sd3 g-sd3-1">
      		{topList}
      	</div>
      	<div className="g-mn3">
      	{main}	
      	</div>
      </div>
    )
  }
}
class SongList extends Component {
	constructor(props) {
		super(props)
	} 
	render() {
		const {tracks} = this.props
		if(!tracks.length) {
			return null 
		}
		return (
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
					tracks.map((i,index) => (
						<tr key={index} className={index%2 == 0?'even':null}>
							<td>
								<div className="hd">
									<span className="num">{index+1}</span>
									<div className="rk">
									{i.lastRank?<span className={index<i.lastRank?"ico u-icn u-icn-73 s-fc9":"ico u-icn u-icn-74 s-fc10"}>{Math.abs(i.lastRank-index)}</span>:<span className="u-icn u-icn-75"></span>}
									</div>
								</div>
							</td>
							<td className={index<=2?'rank':null}>
								<div className="clearfix">
									<div className="tt">
									 {
									 		index<=2?<a href="javascript:;">
											<img className="rpic" src={i.album.picUrl}/>
										</a>:null
									 }
										<div className="ply"></div>
										<div className="ttc">
											<div className="txt">
												<Link to={`/song?id=${i.id}`}>
													<b title={i.name}>{i.name}</b>
												</Link>
												{i.alias.length?<span title={i.alias.join('/')} className="s-fc8"> - ({i.alias.join('/')})</span>:null}
												
												{i.mvid?<span className="mv">mv</span>:null}
											</div>
										</div>
									</div>
								</div>
							</td>
							<td className="s-fc3">
								<span className="u-dur">{dateFormat(i.duration,'mm:ss')}</span>
								<div className="opt hshow">
									<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
									<span className="icn icn-fav"></span>
									<span className="icn icn-share"></span>
									<span className="icn icn-dl"></span>
								</div>
							</td>
							<td>
								<div className="text" title={i.artists.map(ar =>ar.name).join('/')}>
									{
										i.artists.map((ar,index) =>
											<span key={index}>
											<Link className="" to={`/artist?id=${ar.id}`}>{ar.name}</Link>
											{index>=i.artists.length-1?null:'/'}
										</span>
										)
									}
									
								</div>
							</td>
						</tr>
					))
					}
				</tbody>
			</table>
		)
	}
}

export default TopList
