import React, { Component} from 'react';
import { Pagination } from 'antd';

class Album extends Component {
	render() {
		return (
			<div className="n-srchrst ztag">
				<ul className="m-cvrlst m-cvrlst-alb3 f-cb">
					{Array(20).fill(1).map((i,index) =>
						<li key={index}>
							<div className="u-cover u-cover-alb2">
								<a href="/album?id=34930257">
									<img src="http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=180y180" />
									<span title="成都" className="msk"></span>
								</a>
								<a title="播放"className="icon-play f-alpha f-fr " href="javascript:void(0)"></a>
							</div>
							<p className="dec">
								<a href="/album?id=34930257" className="tit f-thide s-fc0" title="成都"><span className="s-fc7">成都</span></a>
							</p>
							<p>
								<span className="nm f-thide" title="赵雷">
									<a href="/artist?id=6731" className="s-fc3">赵雷</a>
								</span>
							</p>
						</li>
					)}
				</ul>
				<div className="u-page">
					<Pagination   pageSize={20} total={50} />
				</div>	
			</div>
			
		);
	}
}

export default Album