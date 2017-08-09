import React, { Component} from 'react';
import { Pagination } from 'antd';


class Album extends Component {
	render() {
		return (
		<div>
			<ul className="m-cvrlst m-cvrlst-alb4 f-cb">
				{Array(12).fill(1).map((i,index) =>
					<li key={index}>
						<div className="u-cover u-cover-alb3" title="姊妹2016">
							<img src="http://p3.music.126.net/1ewGPlNaOczku3USsGWrsw==/18566353348178818.jpg?param=120y120" />
							<a href="/album?id=35045434" className="msk"></a>
							<a className="icon-play f-alpha" href="javascript:;" title="播放"></a>
						</div>
						<p className="dec dec-1 f-thide2 f-pre" title="姊妹2016">
							<a href="/album?id=35045434" className="tit s-fc0">姊妹2016</a>
						</p>
						<p><span className="s-fc3">2016.12.13</span></p>
					</li>
				)}
			</ul>
			<div className="u-page">
				<Pagination  defaultCurrent={1} pageSize={10} total={50} />
			</div>
		</div>
		)
	}
}

export default Album