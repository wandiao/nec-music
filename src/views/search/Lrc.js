import React, { Component} from 'react';
import { Pagination } from 'antd';

class Lrc extends Component {
	render() {
		return (
			<div className="ztag n-srchrst">
				<div className="srchsongst">
					<ul className="m-mvlist f-cb">
						{Array(20).fill(1).map((i,index) =>
							<div key={index}>
								<div className={index%2 != 0?'item f-cb even':'item f-cb'}>
									<div className="td">
										<div className="hd">
											<a id="song_436514312" className="ply " title="播放"></a>
										</div>
									</div>
									<div className="td w0">
										<div className="sn">
											<div className="text">
												<a href="/song?id=436514312">
													<b title="成都">
														<span className="s-fc7">成都</span>
													</b>
												</a>
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
									<div className="td w1">
										<div className="text">
											<a href="/artist?id=6731">赵雷</a>
										</div>
									</div>
									<div className="td w2">
										<div className="text">
											<a className="s-fc3" href="/album?id=34930257" title="《成都》">《<span className="s-fc7">成都</span>》</a>
										</div>
									</div>
									<div className="td">05:28</div>
								</div>
								<div className="lyric">
									<div>
										<p> <span className="s-fc7">成都</span> 带不走的 只有你</p>
										<p> 和我在成都的街头走一走 </p>
										<p> 直到所有的灯都熄灭了也不停留</p>
										<p> 你会挽着我的衣袖 我会把手揣进裤兜</p>
									</div>
									<div className="f-hide">
										<p> <span className="s-fc7">成都</span> 带不走的 只有你</p>
										<p> 和我在成都的街头走一走 </p>
										<p> 直到所有的灯都熄灭了也不停留</p>
										<p> 你会挽着我的衣袖 我会把手揣进裤兜</p>
									</div>
									<div className="crl">
										<a href="javascript:void(0)" className="s-fc3">展开<i className="u-icn u-icn-69"></i></a>
									</div>
								</div>
							</div>
						)}
					</ul>
					
				</div>
				<div className="u-page">
					<Pagination   pageSize={20} total={50} />
				</div>
			</div>
			
		);
	}
}

export default Lrc