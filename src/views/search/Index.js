import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import ExtendRoute from '../../components/ExtendRoute'

const nav = [
	{id:1, path:'song', name:'单曲'},
	{id:100, path:'artist', name:'歌手'},
	{id:10, path:'album', name:'专辑'},
	{id:1004, path:'mv', name:'MV'},
	{id:1006, path:'lrc', name:'歌词'},
	{id:1000, path:'playlist', name:'歌单'},
	{id:1009, path:'radio', name:'主播电台'},
	{id:1002, path:'user', name:'用户'}
]

class Search extends Component {
	render() {
		return (
		<div className="g-bd">
			<div className="g-wrap n-srch">
				<div className="pgsrch f-pr j-suggest">
					<input id="m-search-input" type="text" className="srch j-flag" value="" />
					<a href="" className="btn j-flag">搜索</a>
					<div className="u-lstlay" style={{display:'none'}}>
						<div className="m-schlist">
							<p className="note s-fc3">
								<a className="s-fc3 xtag" href="/search/#/?s=q&amp;type=1002">搜“q” 相关用户</a> &gt;
							</p>
							<div className="rap">
								{Array(5).fill(1).map((i,index) =>
									<div className="itm f-cb" key={index}>
										<h3 className="hd"><i className="icn u-icn u-icn-26"></i><em className="f-fl">单曲</em></h3>
										<ul className="f-cb">
											{
												Array(4).fill(1).map((i,index) =>
													<li key={index}>
														<a className="s-fc0 f-thide xtag" href="/song?id=436514312">成都-赵雷&nbsp;</a>
													</li>
												)
											}
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="m-search">
					<div className="snote s-fc4 ztag">搜索“成都去去去”，找到 <em className="s-fc6">8</em> 首单曲，您是不是要搜：<a className="s-fc7" href="/search/#/?s=%E6%88%90%E9%83%BD&amp;type=1">成都</a></div>
					<ul className="m-tabs m-tabs-srch f-cb ztag">
						{
							nav.map((i,index) =>
								<li key={index}>
									<Link to={`/search/${i.path}`} className={index == 0?'sel':null}><em>{i.name}</em></Link>
								</li>
							)
						}
					</ul>
					{this.props.routes.map((route,i)=> 
    				<ExtendRoute key={i} {...route}/>
    			)}
				</div>
			</div>
		</div>
		)
	}
}

export default Search