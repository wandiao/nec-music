import React, { Component} from 'react';
import { Pagination } from 'antd';

class MV extends Component {
	render() {
		return (
			<div className="ztag n-srchrst">
				<ul className="m-mvlist f-cb">
					{Array(20).fill(1).map((i,index) =>
						<li key={index}>
							<div className="cover f-pr">
								<img src="http://p4.music.126.net/v3V2DLh0GT1OUD1FZ7nHbA==/18898405858247256.jpg?param=159y90" />
								<span title="成都 (王者荣耀)" className="msk"></span>
								<p className="tr u-msk u-msk-1">
									<span className="u-icn2 u-icn2-mv"></span>418496
								</p>
								<p className="bl u-msk u-msk-2">03:35</p>
								<a className="link" href="/mv?id=5467079"></a>
							</div>
							<h4 className="title f-thide">
								<a href="/mv?id=5467079" className="s-fc0" title="成都 (王者荣耀)">
									<span className="s-fc7">成都</span> (王者荣耀)
								</a>
							</h4>
							<h5 className="name f-thide">
								<span className="f-thide" title="任宇翔"><a href="/artist?id=4926" className="s-fc3">任宇翔</a></span>
							</h5>
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

export default MV