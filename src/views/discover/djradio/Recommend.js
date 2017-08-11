import React, { Component} from 'react';
import * as api from '../../../api'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'

class Recommend extends Component {
	render() {
		return (
			<div className="g-bd">
				<div className="g-wrap m-radio">
					<div className="u-title f-pr f-cb">
						<h3><span className="f-ff2">推荐节目</span></h3>
						<span className="sub s-fc4">（每日更新）</span>
					</div>
					<ul className="m-plylist toplist toplist-recmd f-cb">
						{Array(20).fill(1).map((i,index) =>
							<li key={index} className="itm">
								<a className="col cvr u-cover u-cover-tiny" title="播放">
									<img src="http://p1.music.126.net/MS97p2nwS3d6Wjd6lVXvnA==/1396379778174456.jpg?param=40x40" alt="" />
									<i className="ply f-pa f-dn f-alpha"></i>
								</a>
								<div className="col cnt f-thide">
									<a href="/program?id=906955412" className="s-fc1" title="第二季 - 你知道松鼠桂鱼名字的来由吗？">第二季 - 你知道松鼠桂鱼名字的来由吗？</a>
								</div>
								<div className="col artist f-thide">
									<a href="/djradio?id=335425050" className="s-fc3" title="围炉夜话">围炉夜话</a>
								</div>
								<div className="col col-4 s-fc4">播放774508</div>
								<div className="col col-5 s-fc4">赞728 </div>
								<a href="/discover/djradio/category?id=11" className="tag u-type">人文历史</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}	
}

export default Recommend