import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {pos} from '../../util/dom'
import { Pagination,message } from 'antd';
import {formatSongTime} from '../../util/date'
import { connect } from 'react-redux';
import {addPlayItem } from '../../store/actions'

class Song extends Component {
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
			api.search(keywords,1,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						songs:res.data.result.songs
					})
					const sp = pos(document.getElementById('search_result'))
					window.scrollTo.apply(null,sp)
				}
			})
		}
		//播放歌曲
		this.playSong = (index) => {
      const item = Object.assign({},this.state.songs[index])
      item.source = `/search/song?keywords=${this.state.keywords}`
      if(item.st <0) {
      	message.error('需要付费，无法播放');
      }else{
      	// console.log(item)
      	this.props.dispatch(addPlayItem(item))
      } 
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
		api.search(keywords,1).then(res => {
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
		api.search(keywords,1).then(res => {
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
	render() {
		const {songs,total,keywords,currPage,queryCorrected} = this.state
		return (
			<div className="ztag f-pr" id="search_result">
				<div className="snote s-fc4 ztag">
					搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 首单曲
					{queryCorrected?<span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span>:null}
				</div>
				<div className="n-srchrst">
					<div className="srchsongst">
						{songs.length?songs.map((i,index) =>
							<div key={index} className="item f-cb">
								<div className="td">
									<div className="hd">
										<a onClick={e => this.playSong(index)} href="javascript:;" className="ply " title="播放"></a>
									</div>
								</div>
								<div className="td w0">
									<div className="sn">
										<div className="text">
											<Link to={`/song?id=${i.id}`}><b title={i.name} dangerouslySetInnerHTML={{__html:i.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}></b></Link>
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
												<Link to={`/artist?id=${ar.id}`}>{ar.name}</Link>
												{index >= i.artists.length-1?null:'/'}
											</span>
										)
										}
									</div>
								</div>
								<div className="td w2">
									<div className="text">
										<Link className="s-fc3" to={`/album?id=${i.album.id}`} title={`《${i.album.name}》`}>《{i.album.name}》</Link>
									</div>
								</div>
								<div className="td">{formatSongTime(i.duration/1000)}</div>
							</div>
						):<div style={{height:'300px'}} className="loading"><Spin tip="Loading..." /></div>}
					</div>
					<div className="u-page" style={{display:total<=30?'none':'block'}}>
						<Pagination onChange={this.choosePage} current={currPage}   pageSize={30} total={total} />
					</div>
				</div>
			</div>
			
		);
	}
}

function select(state) {
  return {
    playList:state.playList,
    currMusic:state.currMusic
  }
}

export default connect(select)(Song)