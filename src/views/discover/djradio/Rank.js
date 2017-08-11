import React, { Component} from 'react';
import * as api from '../../../api'
import {Spin} from 'antd'
import {Link} from 'react-router-dom'

class Rank extends Component {
	render() {
		return (
			<div className="g-bd">
				<div className="g-wrap m-radio">
					<div className="u-title f-pr f-cb">
						<h3><span className="f-ff2">节目排行榜</span></h3>
						<span className="sub s-fc4">最近更新：08月11日</span>
						<div className="info f-pa">
							<a href="javascript:void(0)" className="icon u-icn2 u-icn2-5 j-flag"></a>
							<div className="tip s-fc3 f-brk f-pa j-flag">
								选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算。
							</div>
						</div>
					</div>
					<ul className="m-plylist toplist toplist-rank f-cb">
						{Array(20).fill(1).map((i,index) =>
							<li key={index} className="itm">
								<div className="col rank s-fc4">
									<em className="red f-fs1">01</em>
									<span className="u-rnk f-ff0"><i className="u-icn u-icn-72"></i>0</span>
								</div>
								<a className="col cvr u-cover u-cover-tiny" title="播放">
									<img src="http://p1.music.126.net/p1vefFCieMtKTSocRuz-MQ==/18929192184073392.jpg?param=40x40" alt="" />
									<i className="ply f-pa f-dn f-alpha"></i>
								</a>
								<div className="col cnt f-thide">
									<a href="/program?id=908528214" className="s-fc1" title="我的一个道姑朋友 - 冯提莫">我的一个道姑朋友 - 冯提莫</a>
								</div>
								<div className="col artist f-thide"><a href="/djradio?id=5811013" className="s-fc3" title="冯提莫">冯提莫</a></div>
								<div className="col tag"><a href="/discover/djradio/category?id=2001" className="u-type">创作|翻唱</a></div>
								<span className="col hot u-hot f-fl"><i style={{width:'92%'}}><i></i></i></span>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}	
}

export default Rank