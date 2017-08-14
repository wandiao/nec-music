import React, { Component} from 'react';
import { Pagination } from 'antd';

class User extends Component {
	render() {
		return (
			<div className="ztag n-srchrst">
				<table className="m-table m-table-2 m-table-2-cover">
					<tbody>
						{
							Array(10).fill(1).map((i,index) =>
								<tr key={index}>
									<td className="w7">
										<div className="u-cover u-cover-3">
											<a href="/user/home?id=252955528">
												<img src="http://p1.music.126.net/hC3EliLWRYbuRbcGeXprdQ==/18977570695598250.jpg?param=180y180" />
												<span className="msk" title="成都大象先生"></span>
											</a>
										</div>
									</td>
									<td>
										<div className="ttc">
											<a href="/user/home?id=252955528" title="成都大象先生" className="txt f-fs1">
												<span className="s-fc7">成都</span>大象先生<sup className="u-icn2 u-icn2-music2"></sup><i className="icnfix u-icn u-icn-s-01"></i>
											</a>
										</div>
										<div className="dec s-fc4 f-thide" title="工作联系：新浪微博@成都大象先生">工作联系：新浪微博@<span className="s-fc7">成都</span>大象先生</div>
									</td>
									<td className="w9">
										<a className="u-btn u-btn-3 f-tdn" href="javascript:void(0)"><i>关注</i></a>
									</td>
									<td className="w9 s-fc4">歌单：1</td>
									<td className="w9 s-fc4">粉丝：<span id="follow_num_252955528">34547</span></td>
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

export default User