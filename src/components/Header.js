import React, { Component} from 'react'
import { NavLink as Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className="g-topbar">
				<div className="m-top">
					<div className="wrapper">
						<h1 className="logo"><a href="/">网易云音乐</a></h1>
						<Nav />
						<div className="m-dt pr">
							<a href="javascipt:;" className="link">登录</a>
							<div className="dropdown-layer">
								<div className="inner">
									<ul className="dl-list clearfix">
										<li>
											<a className="item-1" href="">
												<i className="icn icn-mb"></i>
												<em>手机号登录</em>
											</a>
										</li>
										<li>
											<a className="item-2" href="">
												<i className="icn icn-wx"></i>
												<em>微信登录</em>
											</a>
										</li>
										<li>
											<a className="item-2" href="">
												<i className="icn icn-qq"></i>
												<em>QQ登录</em>
											</a>
										</li>
										<li>
											<a className="item-2" href="">
												<i className="icn icn-sn"></i>
												<em>新浪微博登录</em>
											</a>
										</li>
										<li>
											<a className="item-2" href="">
												<i className="icn icn-wy"></i>
												<em>网易邮箱帐号登录</em>
											</a>
										</li>
									</ul>
								</div>
								<i className="arr"></i>
							</div>
						</div>
						<a href="" className="m-msg pr" style={{display: 'none'}}></a>
						<div className="m-search pr">
							<div className="s-bg">
								<span className="parent">
									<input type="text" className="txt" name="" />
									<label className="ph">单曲/歌手/专辑/歌单/MV/用户</label>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="m-subnav">
					<div className="wrapper pr">
						<ul className="nav">
							<li>
								<Link to="/" exact activeClassName="active">
									<em>推荐</em>
								</Link>
							</li>
							<li>
								<Link to="/discover/toplist" activeClassName="active">
									<em>排行榜</em>
								</Link>
							</li>
							<li>
								<Link to="/discover/playlist" activeClassName="active">
									<em>歌单</em>
								</Link>
							</li>
							<li>
								<Link to="/discover/djradio" activeClassName="active">
									<em>主播电台</em>
								</Link>
							</li>
							<li>
								<Link to="/discover/artist" activeClassName="active">
									<em>歌手</em>
								</Link>
							</li>
							<li>
								<Link to="/discover/album" activeClassName="active">
									<em>新碟上架</em>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
class Nav extends Component {
	render() {
		return (
			<ul className="m-nav">
				<li className="active">
					<span>
						<a href="javascipt:;" className="active">
							<em>发现音乐</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="javascipt:;">
							<em>我的音乐</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="javascipt:;">
							<em>朋友</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="javascipt:;">
							<em>商城</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="javascipt:;">
							<em>音乐人</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="javascipt:;">
							<em>下载客户端</em>
							<sub className="cor"></sub>
						</a>
					</span>
					<sup className="hot">&nbsp;</sup>
				</li>
			</ul>
		)
	}
}

export default Header