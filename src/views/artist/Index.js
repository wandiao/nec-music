import React, { Component} from 'react';
import {NavLink,Link} from 'react-router-dom'
import ExtendRoute from '../../components/ExtendRoute'

class Artist extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="g-bd4 f-cb">
				<div className="g-mn4">
					<div className="g-mn4c">
						<div className="g-wrap6">
							<div className="n-artist f-cb">
								<div className="btm">
									<h2 className="sname f-thide sname-max" title="张惠妹 - aMEI;阿密特">张惠妹</h2>
									<h3 className="salias f-thide" title="张惠妹 - aMEI;阿密特">aMEI;阿密特</h3>
								</div>
								<img src="http://p4.music.126.net/-JxOlVRUl3OFqNkCIu9dlw==/678398674363509.jpg?param=640y300" />
								<div className="mask f-alpha"></div>
								<a id="artist-home" href="/user/home?id=29879272" className="btn-rz f-tid">Ta的个人主页</a>
								<a id="artist-sub" href="javascript:void(0)" className="btnfav f-tid">收藏</a>
							</div>
							<ul className="m-tabs f-cb">
								<li className="fst">
									<NavLink to="/artist?id=10559" isActive={e=>this.props.location.pathname == '/artist'} activeClassName="sel"><em>热门50单曲</em></NavLink>
								</li>
								<li><NavLink to="/artist/album?id=10559" isActive={e =>this.props.location.pathname == '/artist/album'} activeClassName="sel"><em>所有专辑</em></NavLink></li>
								<li><NavLink to="/artist/mv?id=10559" isActive={e=>this.props.location.pathname == '/artist/mv'} activeClassName="sel"><em>相关MV</em></NavLink></li>
								<li><NavLink to="/artist/desc?id=10559" isActive={e=>this.props.location.pathname == '/artist/desc'} activeClassName="sel"><em>歌手介绍</em></NavLink></li>
							</ul>
							{this.props.routes.map((route,i)=> 
	      				<ExtendRoute key={i} {...route}/>
	      			)}
						</div>
					</div>
				</div>
				<div className="g-sd4">
					<div className="g-wrap7">
						<div className="m-sidead f-hide"></div>
						<h3 className="u-hd3">
							<span className="f-fl">热门歌手</span>
						</h3>
						<ul className="m-hdlist f-cb">
							{Array(6).fill(1).map((i,index) =>
								<li key={index}>
									<div className="hd">
										<a href="/artist?id=9621" title="王菲">
											<img src="http://p3.music.126.net/GKhjgN1ltQYK3eYf9DdJwg==/18727981557622763.jpg?param=50y50" />
										</a>
									</div>
									<p>
										<a href="/artist?id=9621" title="王菲" className="nm nm-icn f-ib f-thide">王菲</a>
									</p>
								</li>
							)}
						</ul>
						<div className="m-multi">
      				<h3 className="u-hd3">
								<span className="f-fl">网易云音乐多端下载</span>
							</h3>
							<ul className="bg">
								<li>
									<a href="" className="ios"></a>
								</li>
								<li>
									<a href="" className="pc"></a>
								</li>
								<li>
									<a href="" className="aos"></a>
								</li>
							</ul>
							<p className="s-fc4">同步歌单，随时畅听320k好音乐</p>
      			</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Artist
