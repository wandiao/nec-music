import React, { Component} from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom'
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {dateFormat} from '../../util/date'

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums:[],
			currPage:1,
			total:0
		}
		this.choosePage = (page,pageSize) => {
			const id = qs.parse(this.props.location.search).id
			this.setState({
				currPage:page,
				albums:[]
			})
			api.getArtistAlbum(id,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						albums:res.data.hotAlbums
					})
					window.scrollTo(0,0)
				}
			})
		}
	}
	componentDidMount() {
		const id = qs.parse(this.props.location.search).id
		api.getArtistAlbum(id).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					albums:res.data.hotAlbums,
					total:res.data.artist.albumSize
				})
			}
		})
	}
	render() {
		const {albums,total,currPage} = this.state
		return (
		<div>
			<ul className="m-cvrlst m-cvrlst-alb4 f-cb">
				{albums.length?albums.map((i,index) =>
					<li key={index}>
						<div className="u-cover u-cover-alb3" title={i.name}>
							<img src={i.picUrl} />
							<Link to={`/album?id=${i.id}`} className="msk"></Link>
							<a className="icon-play f-alpha" href="javascript:;" title="播放"></a>
						</div>
						<p className="dec dec-1 f-thide2 f-pre" title={i.name}>
							<Link to={`/album?id=${i.id}`} className="tit s-fc0">{i.name}</Link>
						</p>
						<p><span className="s-fc3">{dateFormat(i.publishTime,'yyyy.M.d')}</span></p>
					</li>
				):<div style={{height:'200px'}} className="loading"><Spin tip="Loading..." /></div>}
			</ul>
			<div className="u-page" style={{display:total<=12?'none':'block'}}>
				<Pagination onChange={this.choosePage} current={currPage}   pageSize={12} total={total} />
			</div>
		</div>
		)
	}
}

export default Album