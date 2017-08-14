import React, { Component} from 'react';
import { Pagination } from 'antd';

class Radio extends Component {
	render() {
		return (
			<div className="ztag n-srchrst">
				<h2 className="head2">主播电台</h2>
				<ul className="m-rdilist f-cb">
					{Array(20).fill(1).map((i,index) =>
						<li key={index}>
							<a href="/djradio?id=341929066" className="u-cover u-cover-rdi2">
								<img src="http://p1.music.126.net/f9refyKEF_MCj3Mo9c0E5w==/18548761161208137.jpg?param=200y200" alt="" />
							</a>
							<h3 className="f-fs2 f-thide">
								<a href="/djradio?id=341929066" className="s-fc1">赵雷—<span className="s-fc7">成都</span>（各种版本）</a>
							</h3>
							<p className="f-thide s-fc4">
								by <a href="/user/home?id=111132698">张咏MEIMEIMEI</a>&nbsp;<i className="icnfix u-icn u-icn-s-02 f-sep"></i>
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

export default Radio