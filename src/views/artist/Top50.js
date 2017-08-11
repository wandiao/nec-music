import React, { Component} from 'react'
import {dateFormat} from '../../util/date'
import {Link} from 'react-router-dom'

class Top50 extends Component {
	render() {
		return (
			<div className="n-top50">
				<div className="m-info">
					<div className="btns f-cb">
						<a href="" className="u-btn2 u-btn2-2 u-btni-addply f-fl">
							<i><em className="ply"></em>播放</i>
						</a>
						<a href="" className="u-btni u-btni-add"></a>
						<a href="" className="u-btni u-btni-fav">
							<i>收藏热门50</i>
						</a>
					</div>
				</div>
				<SongList />
			</div>
		)
	}
}

//音乐列表
class SongList extends Component {
	render() {
		const { tracks } = this.props
		if(!tracks || !tracks.length) {
			return null
		}
		return (
				<div className="track-list">
					<table className="m-table m-table-1 m-table-4">
						<tbody>
							{
							tracks.map((track,index) => (
								<tr key={index} className={index%2 == 0?'even':null}>
									<td className="w1">
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
														{track.alia.length?<span title={track.alia.join('/')} className="s-fc8"> - ({track.alia.join('/')})</span>:null}
														{track.mv?<Link to={`/mv?id=${track.mv}`} className="mv">mv</Link>:null}
													</div>
												</div>
											</div>
										</div>
									</td>
									<td className="w2-1 s-fc3">
										<span className="u-dur">{dateFormat(track.dt,'mm:ss')}</span>
										<div className="opt hshow">
											<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
											<span className="icn icn-fav"></span>
											<span className="icn icn-share"></span>
											<span className="icn icn-dl"></span>
										</div>
									</td>
									<td className="w4">
										<div className="text" title={track.ar.map(i => i.name).join('/')}>
											{
												track.ar.map((i,index) => 
													<span key={index}>
														<Link className="" to={`/artist?id=${i.id}`}>{i.name}</Link>{index >= track.ar.length-1?null:'/'}
													</span>
												)
											}
											
										</div>
									</td>
									<td className="w5"><span className="hot u-hot"><i style={{width:'92%'}}><i></i></i></span></td>
								</tr>
							))
							}
						</tbody>
					</table>
				</div>
			)
		}
}

export default Top50