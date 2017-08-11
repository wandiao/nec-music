import React, { Component} from 'react';

class Song extends Component {
	render() {
		return (
			<div className="ztag">
				<div className="n-srchrst">
					<div className="srchsongst">
						{Array(10).fill(1).map((i,index) =>
							<div key={index} className="item f-cb">
								<div className="td">
									<div className="hd">
										<a className="ply " title="播放"></a>
									</div>
								</div>
								<div className="td w0">
									<div className="sn">
										<div className="text">
											<a href="/song?id=437246040"><b title="穿过成都去看你">穿过成都去看你</b></a>
										</div>
									</div>
								</div>
								<div className="td">
									<div className="opt hshow">
										<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
										<span className="icn icn-fav"></span>
										<span className="icn icn-share"></span>
										<span className="icn icn-dl"></span>
									</div>
								</div>
								<div className="td w1"><div className="text"><a href="/artist?id=1006036">2468</a></div></div>
								<div className="td w2"><div className="text"><a className="s-fc3" href="/album?id=34940034" title="《穿过成都去看你》">《穿过成都去看你》</a></div></div>
								<div className="td">04:03</div>
							</div>
						)}
					</div>
				</div>
			</div>
			
		);
	}
}

export default Song