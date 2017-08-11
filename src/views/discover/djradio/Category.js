import React, { Component} from 'react';
import RdiType from './RdiTypeComp'
import { Pagination } from 'antd';

class Category extends Component {
	render() {
		return (
			<div className="g-bd">
      	<div className="g-wrap m-radio">
      		<RdiType cates={[]} />
      		<div className="new">
      			<div className="u-title f-cb">
							<h3><span className="f-ff2">优秀新电台</span></h3>
						</div>
						<ul className="m-rdilist f-cb">
							{Array(5).fill(1).map((i,index) =>
								<li key={index}>
									<a href="/djradio?id=349714403" className="u-cover u-cover-rdi2">
										<img src="http://p1.music.126.net/BQQ0tR4AJ8CMKw5kzLJiBw==/18532268488083068.jpg?param=200y200" alt="" />
									</a>
									<h3 className="f-fs2">
										<a href="/djradio?id=349714403" className="s-fc1" title="雍正皇帝">雍正皇帝</a>
									</h3>
									<p className="f-thide2 s-fc4">全方位揭秘鲜为人知的宫廷秘闻</p>
								</li>
							)}
						</ul>
      		</div>
      		<div className="rdimore">
      			<div className="u-title f-cb">
							<h3><span className="f-ff2">电台排行榜</span></h3>
							<div className="tab tab-r">
								<a data-action="order" href="/discover/djradio/category?id=10001&amp;order=1&amp;_hash=allradios" className="z-sel">上升最快</a>
								<span className="line">|</span>
								<a data-action="order" href="/discover/djradio/category?id=10001&amp;order=0&amp;_hash=allradios">最热电台</a>
							</div>
						</div>
						<ul className="rdilist rdilist-2 f-cb">
							{
								Array(4).fill(1).map((i,index) =>
									<li key={index}>
										<a href="/djradio?id=350090354" className="cvr u-cover u-cover-rdi f-fl">
											<img src="http://p1.music.126.net/8eVaG6MpTy9MHImggg1-YA==/18547661650950798.jpg?param=200y200" alt="" />
										</a>
										<div className="cnt">
											<h3 className="f-fs3"><a href="/djradio?id=350090354" title="十宗罪">十宗罪</a></h3>
											<p className="note">
												<i className="u-icn u-icn-27"></i>
												<a href="/user/home?id=96773426" className="sep f-brk" title="网易云音乐有声读物">网易云音乐有声读物</a>
												<sup className="u-icn u-icn-1 "></sup>
											</p>
											<p className="s-fc4">共89期&nbsp;&nbsp;&nbsp;&nbsp;订阅5077次</p>
										</div>
									</li>
								)
							}
						</ul>
						<div className="u-page">
							<Pagination  defaultCurrent={1} pageSize={20} total={100} />
						</div>
      		</div>
      	</div>
      </div>
		)
	}
}

export default Category