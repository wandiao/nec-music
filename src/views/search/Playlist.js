import React, { Component} from 'react';
import { Pagination } from 'antd';

class Playlist extends Component {
	render() {
		return (
			<div className="ztag n-srchrst">
				<table className="m-table m-table-2 m-table-2-cover">
					<tbody>
						{
							Array(10).fill(1).map((i,index) =>
								<tr key={index}>
									<td className="first w0">
										<div className="hd"><span className="ply " title="播放"></span></div>
									</td>
									<td className="w7">
										<div className="u-cover u-cover-3">
											<a href="/playlist?id=62071817">
												<img src="http://p1.music.126.net/gN5zRRn02RjqNgv2BkiSew==/109951162858130537.jpg?param=180y180" />
												<span title="民谣不止成都 南山南" className="msk"></span>
											</a>
										</div>
									</td>
									<td>
										<div className="f-cb">
											<div className="opt hshow">
												<a href="javascript:;" className="u-icn u-icn-81 icn-add"></a>
												<span className="icn icn-fav"></span>
												<span className="icn icn-share"></span>
												<span className="icn icn-dl"></span>
											</div>
											<div className="tt">
												<div className="ttc">
													<span className="txt"><a href="/playlist?id=62071817" title="民谣不止成都 南山南">民谣不止<span className="s-fc7">成都</span> 南山南</a></span>
												</div>
											</div>
										</div>
									</td>
									<td className="w11 s-fc4">224首</td>
									<td className="w4">
										<div className="text"><span className="s-fc3">by</span>&nbsp;&nbsp;<a className="s-fc3" href="/user/home?id=40408152" title="咸肉先生">咸肉先生</a></div>
									</td>
									<td className="w6 s-fc4">收藏：<span>7293</span></td>
									<td className="last w6 s-fc4">收听：<span>50万</span></td>
								</tr>
							)
						}
					</tbody>
				</table>
				<div className="u-page">
					<Pagination   pageSize={20} total={50} />
				</div>
			</div>
			
		);
	}
}

export default Playlist