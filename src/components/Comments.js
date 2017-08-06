import React, { Component} from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom'
import {dateBeautify} from '../util/date'
import {pos} from '../util/dom'

//评论组件
class Comments extends Component {
	constructor(props) {
		super(props)
		this.choosePage = (page,pageSize) => {
			var commentPos = pos(document.getElementById("commentWrap"));
			this.props.onChange(page,pageSize,commentPos)
		}
	}
	render() {
		const {data} = this.props
		if(!data) {
			return null
		}
		return (
			<div className="n-cmt" id="commentWrap">
				<div className="u-title u-title-1">
					<h3><span className="f-ff2">评论</span></h3>
					<span className="sub s-fc3">共<span>{data.total}</span>条评论</span>
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
							<Comment title="精彩评论" comments={data.hotComments} />
							
							<Comment title="最新评论" total={data.total} comments={data.comments} />
					</div>
					<div className="u-page">
						<Pagination onChange={this.choosePage} defaultCurrent={1} pageSize={20} total={data.total} />
					</div>
				</div>
			</div>
		)
	}
}
class Comment extends Component {
	render() {
		const {title,comments,total} = this.props
		if(!comments || !comments.length) {
			return null;
		}
		return (
			<div>
				<h3 className="u-hd4">{total?`${title}(${total})`:title}</h3>
				{
					comments.map((comment,index) => (
						<div className="itm" key={comment.commentId}>
							<div className="head">
								<Link to={`/user/home?id=${comment.user.userId}`}>
									<img src={comment.user.avatarUrl} />
								</Link>
							</div>
							<div className="cntwrap">
								<div className="cnt f-brk">
									<Link to={`/user/home?id=${comment.user.userId}`} className="s-fc7">{comment.user.nickname}</Link>
									{comment.user.expertTags?<sup className="u-icn u-icn-84"></sup>:null}
									：{comment.content}
								</div>
								{
									comment.beReplied.length?<div className="que f-brk f-pr s-fc3">
									<span className="darr">
										<i className="bd">◆</i>
										<i className="bg">◆</i>
									</span>
									{comment.beReplied.map((i,index) =>
										<span key={index}>
											<Link className="s-fc7" to={`/user/home?id=${i.user.userId}`}>{i.user.nickname}</Link>
											：{i.content}
										</span>
									)}
									
								</div>:null
								}
								<div className="rp">
									<div className="time s-fc4">{dateBeautify(comment.time)}</div>
									<a href="">
										<i className="zan u-icn2 u-icn2-12"></i>{comment.likedCount?`(${comment.likedCount})`:null}
									</a>
									<span className="sep">|</span>
									<a href="" className="s-fc3">回复</a>
								</div>
							</div>
						</div>
					))
				}
			</div>	
		)
	}
	
}
export default Comments