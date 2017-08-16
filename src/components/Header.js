import React, { Component} from 'react'
import { NavLink as Link }from 'react-router-dom'
import * as api from '../api'
import { connect } from 'react-redux'
import {chooseBox} from '../store/actions'
import axios from 'axios'
import { withRouter } from 'react-router'

const navConfig = [
	{path:'/',name:'推荐',exact:true},
	{path:'/discover/toplist',name:'排行榜'},
	{path:'/discover/playlist',name:'歌单'},
	{path:'/discover/djradio',name:'主播电台'},
	{path:'/discover/artist',name:'歌手'},
	{path:'/discover/album',name:'新碟上架'},
]

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPlaceholder:true,
			showSrchSuggest:false,
			searchSuggests:[
				{
					name:'单曲',
					icon:'u-icn-26',
					href:'/song',
					list:[]
				},
				{
					name:'歌手',
					icon:'u-icn-27',
					href:'/artist',
					list:[]
				},
				{
					name:'专辑',
					icon:'u-icn-28',
					href:'/album',
					list:[]
				},
				{
					name:'MV',
					icon:'u-icn-96',
					href:'/mv',
					list:[]
				},
				{
					name:'歌单',
					icon:'u-icn-29',
					href:'/playlist',
					list:[]
				}
			]
		}
		this.toggleShowPlace = (bool) => {
			if(bool) {
				setTimeout(() => {
					this.setState({
						showSrchSuggest:false
					})
				},2000)	
			}
			if(this.searchInput.value) {
				bool = false;
			}
			if(!bool) {
				this.searchInput.focus();
			}
			this.setState({
				showPlaceholder:bool
			})

		}
		this.search = (e) => {
			const keywords = this.searchInput.value
			if(!keywords) {
				this.setState({
					showSrchSuggest:false
				})
				return false;
			}
			if(e.keyCode !== 13) {
				this.setState({
					showSrchSuggest:true
				})
				axios.all([api.searchSuggest(keywords,1,0,4),api.searchSuggest(keywords,100,0,3),api.searchSuggest(keywords,10,0,2),api.searchSuggest(keywords,1004,0,2),api.searchSuggest(keywords,1000,0,3)])
				.then(res => {
					console.log(res)
					const ss = Object.assign([],this.state.searchSuggests)
					console.log(ss)
					ss[0].list = res[0].data.result.songs || [];
					ss[1].list = res[1].data.result.artists || [];
					ss[2].list = res[2].data.result.albums || [];
					ss[3].list = res[3].data.result.mvs || [];
					ss[4].list = res[4].data.result.playlists || [];
					this.setState({
						searchSuggest:ss
					})
					
				})
				
			}else{
				this.props.history.push({
					pathname:'/search/song',
					search:`?keywords=${keywords}`
				})
				this.setState({
					showSrchSuggest:false
				})
			}		
		}
	}
	componentDidMount() {
	
	}	
	render() {
		const {searchSuggests} = this.state
		const {dispatch,userInfo} = this.props
		const pathname = window.location.pathname
		let userBox = null;
		if(!userInfo) {
			userBox = <div className="m-dt pr">
									<a onClick={e => dispatch(chooseBox('登录'))} href="javascipt:;" className="link">登录</a>
									<div className="dropdown-layer">
										<div className="inner">
											<ul className="dl-list clearfix">
												<li>
													<a onClick={e => dispatch(chooseBox('手机号登录'))} className="item-1" href="javascipt:;">
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
													<a onClick={e => dispatch(chooseBox('邮箱登录'))} className="item-2" href="javascipt:;">
														<i className="icn icn-wy"></i>
														<em>网易邮箱帐号登录</em>
													</a>
												</li>
											</ul>
										</div>
										<i className="arr"></i>
									</div>
								</div>

		}else {
		userBox = <div className="m-tophead f-pr">
								<div className="head f-fl f-pr">
									<img src="http://p3.music.126.net/UwKXxqwQEC48Izw3HrvhBw==/18715886929772352.jpg?param=30y30" />
									<a href="/user/home?id=413278451" className="mask"></a>
									<i className="icn u-icn u-icn-68 f-alpha" style={{display:'none'}}></i>
								</div>
								<a href="/user/home?id=413278451" className="name f-thide f-fl f-tdn f-hide">天下大雨丶</a>
								<div className="m-tlist m-tlist-lged">
									<div className="inner">
										<ul className="f-cb lb mg">
											<li>
												<a className="itm-1" href="/user/home?id=413278451">
													<i className="icn icn-hm"></i>
													<em>我的主页</em>
													<i className="icon u-icn u-icn-68 f-alpha j-uflag" style={{display:'none'}}></i>
												</a>
											</li>
											<li>
												<a href="/user/level" className="itm-2">
													<i className="icn icn-lv"></i>
													<em>我的等级</em>
													<i className="new u-icn u-icn-78 j-uflag"></i>
												</a>
											</li>
											<li>
												<a href="/member" className="itm-2">
												<i className="icn icn-mbr"></i>
												<em>会员中心</em></a>
											</li>
										</ul>
										<ul className="f-cb ltb mg">
											<li>
												<a  className="itm-2" href="/user/update">
													<i className="icn icn-st"></i><em>个人设置</em>
												</a>
											</li>
											<li>
												<a  className="itm-2" href="/import/kugou">
													<i className="icn icn-imt"></i><em>导入歌单</em>
												</a>
											</li>
										</ul>
										<ul className="f-cb lt">
											<li>
												<a  className="itm-3" href="#" data-action="logout">
													<i className="icn icn-ex"></i><em>退出</em>
												</a>
											</li>
										</ul>
									</div>
									<i className="arr"></i>
								</div>
							</div>
		}
		return (
			<div className="g-topbar">
				<div className="m-top">
					<div className="wrapper">
						<h1 className="logo"><a href="/">网易云音乐</a></h1>
						<Nav />
						
						{userBox}
						<a href="" className="m-msg pr" style={{display: 'none'}}></a>
						<div className="m-srch pr">
							<div className="s-bg" onClick={e => this.toggleShowPlace(false)}>
								<span className="parent">
									<input
									onKeyUp={this.search} 
									ref={(input) => { this.searchInput = input; }}
									onBlur={e => this.toggleShowPlace(true)}
									  type="text" className="txt" name="" />
									<label style={{display:this.state.showPlaceholder?'block':'none'}} className="ph">单曲/歌手/专辑/歌单/MV/用户</label>
								</span>
							</div>
							<div className="u-lstlay" style={{display:this.state.showSrchSuggest?'block':'none'}}>
								<div className="m-schlist">
									<p className="note s-fc3">
										<Link to={`/search/user?keywords=1`} className="s-fc3 xtag">搜“{this.searchInput?this.searchInput.value:null}” 相关用户</Link> >
									</p>
									<div className="rap">
									{
										searchSuggests.map((i,index) => 
										  <div className="itm clearfix" key={index} style={{display:i.list.length?'block':'none'}}>
												<h3 className="hd">
													<i className={`icn u-icn ${i.icon}`}></i>
													<em className="f-fl">{i.name}</em>
												</h3>
												<ul className={index%2 == 0?'clearfix':'odd clearfix'}>
												{i.list.length?
													i.list.map((item,index1) =>
														<li key={index1}>
															<a href={`${i.href}?id=${item.id}`} className="s-fc0 f-thide xtag">{index ==0 ?`${item.name}-${item.artists.map(a =>a.name).join('/')}`:item.name}</a>
														</li>
													):null
												}	
												</ul>
											</div>
										)
									}
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={(pathname.indexOf('/discover') != -1||pathname == '/')? "m-subnav":'m-subnav m-subnav-up'}>
					<div className="wrapper pr">
						<ul className="nav">
							{
								navConfig.map((i,index) =>
									<li key={index}>
										<Link to={i.path} exact={i.exact} activeClassName="active">
											<em>{i.name}</em>
										</Link>
									</li>
								)
							}
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
						<Link to='/' exact activeClassName="active">
							<em>发现音乐</em>
							<sub className="cor"></sub>
						</Link>
					</span>
				</li>
				<li>
					<span>
						<Link to='/my' activeClassName="active">
							<em>我的音乐</em>
							<sub className="cor"></sub>
						</Link>
					</span>
				</li>
				<li>
					<span>
						<Link to='/friend' activeClassName="active">
							<em>朋友</em>
							<sub className="cor"></sub>
						</Link>
					</span>
				</li>
				<li>
					<span>
						<a href="http://music.163.com/store/product" target="_blank">
							<em>商城</em>
							<sub className="cor"></sub>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a href="http://music.163.com/nmusician/web/recruit" target="_blank">
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

function select(state) {
  return {
    logBox:state.logBox,
    userInfo:state.userInfo
  }
}

export default connect(select,undefined,undefined,{pure:false})(withRouter(Header))