import React, { Component} from 'react';
import { Pagination } from 'antd';

//新碟上架
class Album extends Component {
  render() {
    return (
      <div className="g-bd">
      	<div className="g-wrap n-alblist f-pr">
      		<div className="u-title f-cb">
      			<h3>
      				<span className="f-ff2">热门新碟</span>
      			</h3>
      		</div>
    			<ul className="m-cvrlst m-cvrlst-alb2 f-cb">
    				{
    				Array(10).fill(1).map((i,index) => 
							<li key={index}>
								<div className="u-cover u-cover-alb2">
									<img src="http://p3.music.126.net/vsjj0af7iWFDZaRdImQbpg==/19085322835194337.jpg?param=130y130" />
									<a href="" className="msk"></a>
									<a href="" className="icon-play f-fr"></a>
								</div>
								<p className="dec">
									<a className="tit f-thide s-fc0" href="/album?id=35835442" title="Super Tizzy">Super Tizzy</a>
								</p>
								<p className="f-thide">
									<span className="nm f-thide" title="Tizzy T">
										<a className="s-fc3" href="/artist?id=1204010">Tizzy T</a>
									</span>
								</p>
							</li>
    				)
    				}
    			</ul>
    			<div className="u-title f-cb">
    				<h3><span className="f-ff2">全部新碟</span></h3>
    				<div className="tab">
    					<a href="/discover/album?area=ALL" className="s-fc6">全部</a>
    					<span className="line">|</span>
    					<a href="/discover/album?area=ZH" className="s-fc6">华语</a>
    					<span className="line">|</span>
    					<a href="/discover/album?area=EA" className="s-fc6">欧美</a>
    					<span className="line">|</span>
    					<a href="/discover/album?area=KR" className="s-fc6">韩国</a>
    					<span className="line">|</span>
    					<a href="/discover/album?area=JP" className="s-fc6">日本</a>
    				</div>
    			</div>
    			<ul className="m-cvrlst m-cvrlst-alb2 f-cb">
    				{
    				Array(20).fill(1).map((i,index) => 
							<li key={index}>
								<div className="u-cover u-cover-alb2">
									<img src="http://p3.music.126.net/vsjj0af7iWFDZaRdImQbpg==/19085322835194337.jpg?param=130y130" />
									<a href="" className="msk"></a>
									<a href="" className="icon-play f-fr"></a>
								</div>
								<p className="dec">
									<a className="tit f-thide s-fc0" href="/album?id=35835442" title="Super Tizzy">Super Tizzy</a>
								</p>
								<p className="f-thide">
									<span className="nm f-thide" title="Tizzy T">
										<a className="s-fc3" href="/artist?id=1204010">Tizzy T</a>
									</span>
								</p>
							</li>
    				)
    				}
    			</ul>
    			<div className="u-page">
						<Pagination defaultCurrent={1} total={50} />
					</div>
      	</div>
      </div>
    );
  }
}


export default Album