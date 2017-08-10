import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {numberFormat} from '../../util'
import ExtendRoute from '../../components/ExtendRoute'

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:null,
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
	}
	render() {
		const {userInfo} = this.state
		
		if(!userInfo) {
			return <div className="g-bd">
  						<div style={{height:(document.body.clientHeight-105)+'px'}} className="loading"><Spin tip="Loading..." /></div>
  					</div>
		}
		const profile = userInfo.profile
		return (
		<div className="g-bd">
			<div className="g-wrap p-prf">
				<dl className="m-proifo f-cb">
					<dt className="f-pr">
						<img src={profile.avatarUrl} />
					</dt>
					<dd>
						<div className="name f-cb">
							<div className="f-cb">
								<div className="edit">
									<Link to={`/artist?id=${profile.artistId}`} className="u-btn2 u-btn2-1"><i>查看歌手页</i></Link>
								</div>
								<h2 className="wrap f-fl f-cb wrap-3">
									<span className="tit f-ff2 s-fc0 f-thide">{profile.nickname}</span>
									<span className="lev u-lev u-icn2 u-icn2-lev">{userInfo.level}<i className="right u-icn2 u-icn2-levr"></i></span>
									{profile.gender == 2?<i className="icn u-icn u-icn-02"></i>:<i class="icn u-icn u-icn-01"></i>}
								</h2>
								<div>
									<a href="#" className="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
									<a href="#" className="btn u-btn u-btn-6 f-tdn" style={{display:'none'}}><i>已关注</i></a>
									<a href="#" className="btn u-btn u-btn-5 f-tdn" style={{display:'none'}}><i>相互关注</i></a>
									<a href="#" className="btn u-btn u-btn-8 f-tdn" data-action="follow">关 注</a>
								</div>
							</div>
							<p className="djp f-fs1 s-fc3">{profile.userType?<i className="u-icn u-icn-14"></i>:null} {profile.description}</p>
						</div>
						<ul className="data s-fc3 f-cb">
							<li className="fst">
								<a href="/user/event?id=29879272">
									<strong id="event_count">{profile.eventCount}</strong><span>动态</span>
								</a>
							</li>
							<li>
								<a href="/user/follows?id=29879272">
									<strong id="follow_count">{profile.follows}</strong><span>关注</span>
								</a>
							</li>
							<li>
								<a href="/user/fans?id=29879272">
									<strong id="fan_count">{profile.followeds}</strong>
									<span>粉丝</span>
									<i className="u-icn u-icn-68 f-alpha" id="newCount" style={{display:'none'}}></i>
								</a>
							</li>
						</ul>
						<div className="inf s-fc3 f-brk">个人介绍：{profile.signature}</div>
						<div className="inf s-fc3">
							<span>所在地区：{profile.province} - {profile.city}</span>
						</div>
					</dd>
				</dl>
				{this.props.routes.map((route,i)=> 
  				<ExtendRoute key={i} {...route}/>
  			)}
			</div>
		</div>
		)
	}
}

export default User