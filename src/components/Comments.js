import React, { Component} from 'react';
import { Pagination } from 'antd';
//评论组件
class Comments extends Component {
	render() {
		return (
			<div className="n-cmt">
				<div className="u-title u-title-1">
					<h3><span className="f-ff2">评论</span></h3>
					<span className="sub s-fc3">共<span>925</span>条评论</span>
				</div>
				<div className="m-cmmt">
					<div className="iptarea">
						<div className="head">
							<img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" />
						</div>
						<div className="m-cmmtipt f-cb f-pr">
							<div className="u-txtwrap holder-parent f-pr">
								<textarea placeholder="评论" className="u-txt area"></textarea>
							</div>
							<div className="btns f-cb f-pr">
								<i className="icn u-icn u-icn-36"></i>
								<i className="icn u-icn u-icn-41"></i>
								<a href="" className="btn u-btn u-btn-1">评论</a>
								<span className="zs s-fc4">140</span>
							</div>
							<div className="corr u-arr">
								<em className="arrline">◆</em>
								<span className="arrclr">◆</span>
							</div>
						</div>
					</div>
					<div className="cmmts">
						<h3 className="u-hd4">精彩评论</h3>
						{
						Array(20).fill(1).map((i,index) => (
							<Comment key={index} />
						))
						}
					</div>
					<div className="u-page">
						<Pagination defaultCurrent={1} total={50} />
					</div>
				</div>
			</div>
		)
	}
}
class Comment extends Component {
	render() {
		return (
			<div className="itm">
				<div className="head">
					<a href="/user/home?id=135905540">
						<img src="http://p1.music.126.net/VpbKn7xtQuAuEHCO0Z3ZJw==/1400777815058422.jpg?param=50y50" />
					</a>
				</div>
				<div className="cntwrap">
					<div className="cnt f-brk">
						<a href="/user/home?id=135905540" className="s-fc7">虚幻黑梦</a>
						：林俊杰压力很大，如果做不好音乐就要回到新加坡去继承千亿家产。所以他一直很努力
					</div>
					<div className="rp">
						<div className="time s-fc4">昨天17:08</div>
						<a href="">
							<i className="zan u-icn2 u-icn2-12"></i> (1172)
						</a>
						<span className="sep">|</span>
						<a href="" className="s-fc3">回复</a>
					</div>
				</div>
			</div>
		)
	}
	
}
export default Comments