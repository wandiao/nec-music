import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {pos} from '../../util/dom'
import {numberFormat} from '../../util'
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { changePlayList,asyncChangeCurrMusic as ac } from '../../store/actions'

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playlists:[],
			total:0,
			keywords:'',
			currPage:1,
			queryCorrected:null
		}
		this.choosePage = (page,pageSize) => {
			this.setState({
				currPage:page,
				playlists:[]
			})
			const query = qs.parse(this.props.location.search)
			const keywords = query.keywords	
			api.search(keywords,1000,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						playlists:res.data.result.playlists
					})
					const sp = pos(document.getElementById('search_result'))
					window.scrollTo.apply(null,sp)
				}
			})
		}
		//播放歌单
		this.changePlaylist = (id) => {
			api.getPlayListDetail(id).then(res => {
        if(res.data.code == 200) {
          const playList = res.data.playlist
          if(!playList.tracks.length) {
            return false;
          }
          let tracks = playList.tracks.map(i => {
            i.source = `/playlist?id=${playList.id}`
            return i;
          })
          console.log(playList)
          this.props.dispatch(changePlayList(tracks))
         	this.props.dispatch(ac(0,playList.tracks[0].id,true))
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
		api.search(keywords,1000).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					playlists:res.data.result.playlists,
					total:res.data.result.playlistCount,
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
			playlists:[],
			total:0,
			currPage:1,
			queryCorrected:null
		})
		api.search(keywords,1000).then(res => {
			// console.log(res)
			if(res.data.code == 200) {
				this.setState({
					playlists:res.data.result.playlists,
					total:res.data.result.playlistCount,
					queryCorrected:res.data.result.queryCorrected
				})
			}
		})
	}
	render() {
		const {playlists,total,keywords,currPage,queryCorrected} = this.state
		return (
			<div className="ztag n-srchrst f-pr" id="search_result">
				<div className="snote s-fc4 ztag">
					搜索“{keywords}”，找到 <em className="s-fc6">{total}</em> 个歌单
					{queryCorrected?<span>，您是不是要搜：<Link className="s-fc7" to={`/search/song?keywords=${queryCorrected}`}>{queryCorrected}</Link></span>:null}
				</div>
				<table className="m-table m-table-2 m-table-2-cover">
					<tbody>
						{
							playlists.length?playlists.map((i,index) =>
								<tr key={index}>
									<td className="first w0">
										<div className="hd"><span onClick={e => this.changePlaylist(i.id)} className="ply " title="播放"></span></div>
									</td>
									<td className="w7">
										<div className="u-cover u-cover-3">
											<Link to={`/playlist?id=${i.id}`}>
												<img src={i.coverImgUrl} />
												<span title={i.name} className="msk"></span>
											</Link>
										</div>
									</td>
									<td>
										<div className="f-cb">
											<div className="opt hshow">
												<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
												<span className="icn icn-fav"></span>
												<span className="icn icn-share"></span>
												<span className="icn icn-dl"></span>
											</div>
											<div className="tt">
												<div className="ttc">
													<span className="txt">
														<Link to={`/playlist?id=${i.id}`} title={i.name}
														dangerouslySetInnerHTML={{__html:i.name.replace(new RegExp(keywords,'gi'),rs =>`<span class="s-fc7">${rs}</span>`)}}
														></Link>
													</span>
												</div>
											</div>
										</div>
									</td>
									<td className="w11 s-fc4">{i.trackCount}首</td>
									<td className="w4">
										<div className="text">
											<span className="s-fc3">by</span>&nbsp;&nbsp;
											<Link className="s-fc3" to={`/user/home?id=${i.creator.userId}`} title={i.creator.nickname}>{i.creator.nickname}</Link>
											{i.creator.authStatus?<sup className="u-icn u-icn-1"></sup>:null}
										</div>
									</td>
									<td className="w6 s-fc4">收藏：<span>{numberFormat(i.bookCount)}</span></td>
									<td className="last w6 s-fc4">收听：<span>{numberFormat(i.playCount)}</span></td>
								</tr>
							):<tr style={{height:'300px'}} className="loading"><td><Spin tip="Loading..." /></td></tr>
						}
					</tbody>
				</table>
				<div className="u-page" style={{display:total<=30?'none':'block'}}>
					<Pagination onChange={this.choosePage} current={currPage}   pageSize={30} total={total} />
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

export default connect(select)(Playlist)