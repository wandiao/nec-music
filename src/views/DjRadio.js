import React, { Component} from 'react';
import qs from 'query-string'
import  * as api from '../api';
import {dateFormat} from '../util/date'
import {numberFormat} from '../util'
import {Link} from 'react-router-dom'
import {Spin} from 'antd'

class DjRadio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			djRadio:null,
			programs:[],
			order:0
		}
	}
	componentDidMount() {
		const id = qs.parse(this.props.location.search).id;
		api.getDjDetail(id).then(res => {
			// console.log(res)
			if(res.data.code == 200) {

				this.setState({
					djRadio:res.data.djRadio
				})
				return api.getDjPrograms(id,0,999)
			}
		})
		.then(res => {
			if(res.data.code == 200) {
				this.setState({
					programs:res.data.programs
				})
			}
		})
		api.getSimiDj(id).then(res => {
			console.log(res)
		})
	}
	render() {
		const {djRadio,programs,order} = this.state;
		if(!djRadio) {
			return <div className="g-bd4 clearfix">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		return (
		<div className="g-bd4 f-cb">
			<div className="g-mn4">
				<div className="g-mn4c">
					<div className="g-wrap6">
						<div className="m-info f-cb">
							<div className="cover u-cover u-cover-dj">
								<img src={djRadio.picUrl} />
								<span className="msk"></span>
							</div>
							<div className="cnt">
								<div className="cntc">
									<div className="hd f-cb">
										<i className="f-fl u-icn u-icn-93"></i>
										<div className="tit">
											<h2 className="f-ff2">{djRadio.name}</h2>
										</div>
									</div>
									<div className="user f-cb">
										<Link to={`/user/home?id={djRadio.dj.userId}`} className="face">
											<img src={djRadio.dj.avatarUrl} />
										</Link>
										<span className="name">
											<Link className="s-fc7" to={`/user/home?id={djRadio.dj.userId}`} title={djRadio.dj.nickname}>{djRadio.dj.nickname}</Link>
										</span>
										<sup className="icn u-icn2 u-icn2-music2 "></sup>
									</div>
									<div className="btns f-cb">
										<a href="" className="u-btni u-btni-sub">
											<i>订阅({numberFormat(djRadio.subCount)})</i>
										</a>
										<a href="" className="u-btni u-btni-playall">
											<i>播放全部</i>
										</a>
										<a href="" className="u-btni u-btni-share">
											<i>分享({numberFormat(djRadio.shareCount)})</i>
										</a>
									</div>
									<p className="intr f-brk">
									<Link to={`/discover/djradio/category?id=${djRadio.categoryId}`} className="cat cat u-type u-type-red">{djRadio.category}</Link>
									<span dangerouslySetInnerHTML={{__html:djRadio.desc.replace(/\n/g,'<br />')}}></span>
									</p>
								</div>
							</div>
						</div>
						<div className="n-songtb">
							<div className="u-title u-title-1 f-cb">
								<h3 id="programlist"><span className="f-ff2">节目列表</span></h3>
								<span className="sub s-fc4">共{djRadio.programCount}期</span>
								<div className="u-sort f-fr f-cb">
									<a href="" className="desc" title="降序"></a>
									<a href="" className="asc sel" title="升序"></a>
								</div>
								<div className="out f-fr">
									<i className="u-icn u-icn-95"></i>&nbsp; 
									<a className="s-fc7" href="javascript:;">生成外链播放器</a>
								</div>
							</div>
							<ProgramList programs={programs} order={order} />
						</div>
					</div>
				</div>
			</div>
			<div className="g-sd4">
				<div className="g-wrap7">
					<div className="m-sidead f-hide"></div>
					<h3 className="u-hd3">
						<span className="f-fl">你可能也喜欢</span>
					</h3>
					<ul className="m-rctlist f-cb">
						{Array(5).fill(1).map((i,index) =>
							<li key={index}>
								<div className="cver u-cover u-cover-3">
									<a href="/djradio?id=347451177">
										<img src="http://p1.music.126.net/HPuTTz1csHyCesU4Su0diw==/18673005976857436.jpg?param=50y50" />
									</a>
								</div>
								<div className="info">
									<p className="f-thide">
										<a className="sname f-fs1 s-fc0" href="/djradio?id=347451177" title="伦桑爱唱歌">伦桑爱唱歌</a>
									</p>
									<p>
										<span className="by s-fc4">by</span> 
										<a className="nm nm f-thide s-fc3" href="/user/home?id=352548501" title="伦桑_伦桑">伦桑_伦桑</a> 
										<sup className="icn u-icn2 u-icn2-music2 "></sup>
									</p>
								</div>
							</li>
						)}
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

//节目列表
class ProgramList extends Component {
	render() {
		const {programs,order} = this.props;
		if(!programs.length) {
			return null;
		}
		return (
				<div className="track-list">
					<table className="m-table m-table-program">
						<tbody>
							{
							programs.map((i,index) => (
								<tr key={index} className={index%2 == 0?'even':null}>
									<td className="col1">
										<div className="hd">
											<span className="ply"></span>
											<span className="num">{index+1}</span>
										</div>
									</td>
									<td className="col2">
										<div className="tt f-thide"><Link to={`/program?id=${i.id}`} title={i.name}>{i.name}</Link></div>
										<div className="opt hshow">
											<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
											<span className="icn icn-share"></span>
											<span className="icn icn-dl"></span>
										</div>
									</td>
									<td className="col3">
										<span className="s-fc3">播放{numberFormat(i.listenerCount)}</span>
									</td>
									<td className="col4"><span className="s-fc3">赞{i.likedCount}</span></td>
									<td className="col5"><span className="s-fc4">{dateFormat(i.createTime,'yyyy-MM-dd')}</span></td>
									<td className="f-pr">
										<span className="s-fc4">{dateFormat(i.duration,'mm:ss')}</span>
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

export default DjRadio