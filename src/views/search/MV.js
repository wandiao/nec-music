import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {pos} from '../../util/dom'
import { Pagination } from 'antd';
import {formatSongTime} from '../../util/date'

class MV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mvs:[],
			total:0,
			keywords:'',
			currPage:1,
			queryCorrected:null
		}
		this.choosePage = (page,pageSize) => {
			this.setState({
				currPage:page,
				mvs:[]
			})
			const query = qs.parse(this.props.location.search)
			const keywords = query.keywords	
			api.search(keywords,1004,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						mvs:res.data.result.mvs
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
		api.search(keywords,1004).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					mvs:res.data.result.mvs,
					total:res.data.result.mvCount,
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
			mvs:[],
			total:0,
			currPage:1,
			queryCorrected:null
		})
		api.search(keywords,1004).then(res => {
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					mvs:res.data.result.mvs,
					total:res.data.result.mvCount,
					queryCorrected:res.data.result.queryCorrected
				})
			}
		})
	}
	render() {
		const {mvs,total,keywords,currPage,queryCorrected} = this.state
		return (
			<div className="ztag n-srchrst f-pr" id="search_result">
				<div className="snote s-fc4 ztag">
					搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 首MV
					{queryCorrected?<span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span>:null}
				</div>
				<ul className="m-mvlist f-cb">
					{mvs.length?mvs.map((i,index) =>
						<li key={index}>
							<div className="cover f-pr">
								<img src={i.cover} />
								<span title={i.name} className="msk"></span>
								<p className="tr u-msk u-msk-1">
									<span className="u-icn2 u-icn2-mv"></span>{i.playCount}
								</p>
								<p className="bl u-msk u-msk-2">{formatSongTime(i.duration/1000)}</p>
								<Link className="link" to={`/mv?id=${i.id}`}></Link>
							</div>
							<h4 className="title f-thide">
								<Link to={`/mv?id=${i.id}`} className="s-fc0" title={i.name}
								dangerouslySetInnerHTML={{__html:i.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}
								></Link>
							</h4>
							<h5 className="name f-thide">
								<span className="f-thide" title={i.artists.map(i => i.name).join('/')}>
								{i.artists.map((ar,index) =>
									<span key={index}>
										<Link to={`/artist?id={ar.id}`}
										dangerouslySetInnerHTML={{__html:ar.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}
										></Link>
										{index>=i.artists.length-1?null:'/'}
									</span>

								)}
								</span>
							</h5>
						</li>
					):<div style={{height:'300px'}} className="loading"><Spin tip="Loading..." /></div>}
				</ul>
				<div className="u-page" style={{display:total<=30?'none':'block'}}>
					<Pagination onChange={this.choosePage} current={currPage}   pageSize={30} total={total} />
				</div>
			</div>
			
		);
	}
}

export default MV