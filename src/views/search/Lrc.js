import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {pos} from '../../util/dom'
import { Pagination } from 'antd';
import {formatSongTime} from '../../util/date'
import {drop} from '../../util/array'

class Lrc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs:[],
			total:0,
			keywords:'',
			currPage:1,
			queryCorrected:null
		}
		this.choosePage = (page,pageSize) => {
			this.setState({
				currPage:page,
				songs:[]
			})
			const query = qs.parse(this.props.location.search)
			const keywords = query.keywords	
			api.search(keywords,1006,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						songs:res.data.result.songs
					})
					const sp = pos(document.getElementById('search_result'))
					window.scrollTo.apply(null,sp)
				}
			})
		}
	}
	componentDidMount() {
		const keywords = qs.parse(this.props.location.search).keywords
		if(keywords === undefined) {
			return false
		}
		this.setState({
			keywords:keywords
		})
		api.search(keywords,1006).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					songs:res.data.result.songs,
					total:res.data.result.songCount,
					queryCorrected:res.data.result.queryCorrected
				})
			}
		})
	}
	componentWillReceiveProps(nextProps) {
		const keywords = qs.parse(nextProps.location.search).keywords
		if(keywords === undefined || keywords == this.state.keywords) {
			return false
		}
		this.setState({
			keywords:keywords,
			songs:[],
			total:0,
			currPage:1,
			queryCorrected:null
		})
		api.search(keywords,1006).then(res => {
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					songs:res.data.result.songs,
					total:res.data.result.songCount,
					queryCorrected:res.data.result.queryCorrected
				})
			}
		})
	}
	render() {
		const {songs,total,keywords,currPage,queryCorrected} = this.state
		return (
			<div className="ztag n-srchrst f-pr" id="search_result">
				<div className="snote s-fc4 ztag">
					搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 个歌词
					{queryCorrected?<span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span>:null}
				</div>
				<div className="srchsongst">
					<ul className="m-mvlist f-cb">
						{songs.length?songs.map((i,index) =>
							<div key={index}>
								<div className={index%2 != 0?'item f-cb even':'item f-cb'}>
									<div className="td">
										<div className="hd">
											<a id="song_436514312" className="ply " title="播放"></a>
										</div>
									</div>
									<div className="td w0">
										<div className="sn">
											<div className="text">
												<Link to={`/song?id=${i.id}`}>
													<b title={i.name}
													dangerouslySetInnerHTML={{__html:i.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}	
													></b>
												</Link>
											</div>
										</div>
									</div>
									<div className="td">
										<div className="opt hshow">
											<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
											<span className="icn icn-fav"></span>
											<span className="icn icn-share"></span>
											<span className="icn icn-dl"></span>
										</div>
									</div>
									<div className="td w1">
										<div className="text">
											{i.artists.map((ar,index) =>
												<span key={index}>
													<Link to={`/artist?id={ar.id}`}
													dangerouslySetInnerHTML={{__html:ar.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}
													></Link>
													{index>=i.artists.length-1?null:'/'}
												</span>
											)}
										</div>
									</div>
									<div className="td w2">
										<div className="text">
											<Link className="s-fc3" to={`/album?id=${i.album.id}`} title="《成都》"
											dangerouslySetInnerHTML={{__html:'《'+i.album.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)+'》'}}
											></Link>
										</div>
									</div>
									<div className="td">{formatSongTime(i.duration/1000)}</div>
								</div>
								<div className="lyric">
									<div>
										{drop(i.lyrics,li => li.indexOf(keywords) == -1).slice(0,4).map((li,index) =>
											<p key={index} 
											dangerouslySetInnerHTML={{__html:li}}
											></p>
										)}
										
									</div>
									<div className="f-hide">
										{drop(i.lyrics,li => li.indexOf(keywords) == -1).map((li,index) =>
											<p key={index}>{li}</p>
										)}
									</div>
									<div className="crl">
										<a href="javascript:void(0)" className="s-fc3">展开<i className="u-icn u-icn-69"></i></a>
									</div>
								</div>
							</div>
						):<div style={{height:'300px'}} className="loading"><Spin tip="Loading..." /></div>}
					</ul>
					
				</div>
				<div className="u-page" style={{display:total<=30?'none':'block'}}>
					<Pagination onChange={this.choosePage} current={currPage}   pageSize={30} total={total} />
				</div>
			</div>
			
		);
	}
}

export default Lrc