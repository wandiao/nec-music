import React, { Component} from 'react';
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'
import {numberFormat} from '../../util'
import InfoComp from './InfoComp'
import { Pagination } from 'antd';

class Follows extends Component {
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
				<InfoComp userInfo={userInfo} profile={profile} />
				<div className="u-title u-title-1 f-cb">
					<h3><span className="f-ff2 s-fc3">关注（<span id="follow_count_down">44</span>）</span></h3>
				</div>
				<ul className="m-fans f-cb">
					{Array(10).fill(1).map((i,index) =>
						<li key={index}>
							<a href="/user/home?id=95313677" className="ava f-pr" title="鹊神怪鸟">
								<img src="http://p1.music.126.net/cDXYmITI6OZh_86FKLD5TA==/3327122186618530.jpg?param=60y60" />
							</a>
							<div className="info">
								<p><a href="/user/home?id=95313677" className="s-fc7 f-fs1 nm f-thide" title="鹊神怪鸟">鹊神怪鸟</a>&nbsp;<i className="icn u-icn u-icn-s-01"></i></p>
								<p>
									<a href="/user/event?id=95313677">动态<em className="s-fc7">0</em></a>
									<span className="line">|</span>
									<a href="/user/follows?id=95313677">关注<em className="s-fc7">11</em></a>
									<span className="line">|</span>
									<a href="/user/fans?id=95313677">粉丝<em className="s-fc7">5</em></a>
								</p>
								<p className="s-fc3 f-thide">非常李白的苏东坡</p>
							</div>
							<div className="oper">
								<a className="u-btn u-btn-7 f-tdn" href="#" style={{display:'none'}}><i>发私信</i></a>
								<p className="s-fc4" style={{display:'none'}}><i className="u-icn u-icn-67"></i> 已关注</p>
								<p className="s-fc4" style={{display:'none'}}><i className="u-icn u-icn-66"></i> 相互关注</p>
								<a className="u-btn u-btn-8 f-tdn" href="#" data-action="follow" data-userid="95313677">关 注</a>
							</div>
						</li>
					)}
				</ul>
				<div className="u-page">
					<Pagination  defaultCurrent={1} pageSize={20} total={50} />
				</div>
			</div>
		</div>
		)
	}
}

export default Follows