import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {pos} from '../../util/dom'
// import {numberFormat} from '../../util'
import InfoComp from './InfoComp'
import { Pagination } from 'antd';

class Fans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:null,
			fans:[],
			currPage:1
		}
		this.choosePage = (page,pageSize) => {
			this.setState({
				currPage:page,
				fans:[]
			})
			const query = qs.parse(this.props.location.search)
			const id = query.id
			const fp = pos(document.getElementById('fanstitle'))
			api.getUserFans(id,page-1).then(res => {
				if(res.data.code == 200) {
					this.setState({
						fans:res.data.followeds
					})
					window.scrollTo.apply(null,fp)
				}
			})
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
		api.getUserFans(id).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					fans:res.data.followeds,
				})
			}
		})
	}
	render() {
		const {userInfo,fans,currPage} = this.state
		
		if(!userInfo) {
			return <div className="g-bd">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		const profile = userInfo.profile
		return (
		<div className="g-bd">
			<div className="g-wrap p-prf">
				<InfoComp userInfo={userInfo} profile={profile} />
				<div className="u-title u-title-1 f-cb" id="fanstitle">
					<h3><span className="f-ff2 s-fc3">粉丝（<span id="follow_count_down">{profile.followeds}</span>）</span></h3>
				</div>
				<ul className="m-fans f-cb">
					{fans.length?fans.map((i,index) =>
						<li key={index}>
							<Link to={`/user/home?id=${i.userId}`} className="ava f-pr" title={i.nickname}>
								<img src={i.avatarUrl} />
							</Link>
							<div className="info">
								<p>
									<Link to={`/user/home?id=${i.userId}`} className="s-fc7 f-fs1 nm f-thide" title={i.nickname}>{i.nickname}</Link>
									&nbsp;
									{i.userType?<sup className="icn u-icn2 u-icn2-music2"></sup>
									:i.authStatus?<sup className="u-icn u-icn-1"></sup>:null}
									&nbsp;
									{i.gender === 1?<i className="icn u-icn u-icn-s-01"></i>:<i className="icn u-icn u-icn-s-02"></i>}
									
								</p>
								<p>
									<Link to={`/user/event?id=${i.userId}`}>动态<em className="s-fc7">{i.eventCount}</em></Link>
									<span className="line">|</span>
									<Link to={`/user/follows?id=${i.userId}`}>关注<em className="s-fc7">{i.follows}</em></Link>
									<span className="line">|</span>
									<Link to={`/user/fans?id=${i.userId}`}>粉丝<em className="s-fc7">{i.followeds}</em></Link>
								</p>
								<p className="s-fc3 f-thide">{i.signature}</p>
							</div>
							<div className="oper">
								<a className="u-btn u-btn-7 f-tdn" href="#" style={{display:'none'}}><i>发私信</i></a>
								<p className="s-fc4" style={{display:'none'}}><i className="u-icn u-icn-67"></i> 已关注</p>
								<p className="s-fc4" style={{display:'none'}}><i className="u-icn u-icn-66"></i> 相互关注</p>
								<a className="u-btn u-btn-8 f-tdn" href="#" data-action="follow" data-userid="95313677">关 注</a>
							</div>
						</li>
					):<div style={{height:'300px'}} className="loading"><Spin tip="Loading..." /></div>}
				</ul>
				<div className="u-page" style={{display:profile.followeds<=20?'none':'block'}}>
					<Pagination onChange={this.choosePage} current={currPage} pageSize={20} total={profile.followeds<1000?profile.followeds:1000} />
				</div>
			</div>
		</div>
		)
	}
}

export default Fans