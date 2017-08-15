import React, { Component} from 'react';
import Comments from '../components/Comments'
import {Link} from 'react-router-dom'
import * as api from '../api'
import qs from 'query-string'
import {Spin} from 'antd'
import {dateFormat} from '../util/date'

class MV extends Component {
	
	componentDidMount() {
		const id = qs.parse(this.props.location.search).id
		api.getMV(id).then(res => {
			console.log(res)
		})
	}
	render() {
		return (
		<div className="g-bd4 f-cb">
			<div className="g-mn4">
				<div className="g-mn4c">
					<div className="g-wrap6">
						<div className="n-mv">
							<div className="title f-cb">
								<h2 className="f-ff2 f-thide" id="flag_title1">美人鱼</h2>
								<span className="name">
									<a href="/artist?id=6452" className="s-fc7" title="周杰伦">周杰伦</a> 
								</span>
							</div>
							<div className="mv">
								
							</div>
							<div className="btns f-cb">
								<a className="j-flag u-btni u-btni-fav" href="javascript:;"><i>收藏</i></a>
								<a className="u-btni u-btni-share" href="javascript:;"><i>分享</i></a>
							</div>
						</div>
						<Comments />
					</div>
				</div>
			</div>
			<div className="g-sd4">
				<div className="g-wrap7">
					<div className="m-sidead f-hide"></div>
					<h3 className="u-hd3">
						<span className="f-fl">MV简介</span>
					</h3>
					<div className="m-mvintr">
						<p className="s-fc4">发布时间：2017-03-18</p>
						<p className="s-fc4">播放次数：324万次</p>
						<p className="intr">
							轻快曲风中暗藏美人鱼的眼泪
							<br/>
							充满浪漫童话风格的《美人鱼》MV公开！周杰伦以一种略带潇洒而随性的口气演唱着，象是个叙事者一般，缓缓说着关于爱，关于眼泪的种种；也许爱情，很多时候就像美人鱼的眼泪，无声的眼泪，说不出口的却是最深刻的。
						</p>
					</div>
					<h3 className="u-hd3">
						<span className="f-fl">相关MV</span>
					</h3>
					<ul className="n-mvlist f-cb">
						{Array(5).fill(1).map((i,index) =>
							<li key={index}>
								<div className="mvpic u-cover u-cover-8">
									<img src="http://p3.music.126.net/rilAgdsNqDumLUHEXdZNkw==/18564154325210193.jpg?param=80y60" />
									<a href="/mv?id=5461064" className="msk"></a>
									<a href="/mv?id=5461064" className="icon-play f-alpha"></a>
								</div>
								<div className="cnt">
									<p className="p1 f-thide" style={{marginTop:'20px'}}><a href="/mv?id=5461064">一点点</a></p>
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
		)
	}
}

export default MV