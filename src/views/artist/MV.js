import React, { Component} from 'react';
import { Pagination } from 'antd';

class MV extends Component {
	render() {
		return (
			<div>
				<ul className="m-cvrlst m-cvrlst-7 f-cb">
					{
						Array(12).fill(0).map((i,index) =>
							<li key={index}>
								<div className="u-cover u-cover-7">
									<img src="http://p3.music.126.net/LjLLYmafKlCxQsWDZzNcOw==/19071029183891546.jpg?param=137y103" />
									<a href="/mv?id=5501228" className="msk"></a>
									<a href="/mv?id=5501228" className="icon-play f-alpha"></a>
								</div>
								<p className="dec"><a href="/mv?id=5501228" className="tit f-thide s-fc0">We Are One</a></p>
							</li>
						)					
					}
				</ul>
				<div className="u-page">
					<Pagination  defaultCurrent={1} pageSize={10} total={50} />
				</div>
			</div>
		);
	}
}

export default MV