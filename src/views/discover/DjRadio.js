import React, { Component} from 'react';

class DjRadio extends Component {
  render() {
    return (
      <div className="g-bd">
      	<div className="g-wrap m-radio">
      		<RdiType />
      		<div className="rditop f-cb">
      			<div className="blk f-fl">
      				<div className="u-title f-cb">
      					<h3><a href="/discover/djradio/recommend" className="f-ff2">推荐节目</a></h3>
      					<a href="/discover/djradio/recommend" className="more s-fc3">更多 &gt;</a>
      				</div>
      				<ul className="m-plylist toplist">
      					{
      						Array(10).fill(1).map((i,index) =>
										<li key={index} className={index%2==0?'itm':'itm bg'}>
											<a href="" className="cvr u-cover u-cover-tiny f-fl">
												<img src="http://p1.music.126.net/MS97p2nwS3d6Wjd6lVXvnA==/1396379778174456.jpg?param=40x40" alt="" />
												<i className="ply f-pa f-dn"></i>
											</a>
											<div href="" className="cnt f-fl">
												<h3 className="f-thide">
													<a href="/program?id=906955412" className="s-fc1 f-fw0" title="第二季 - 你知道松鼠桂鱼名字的来由吗？">第二季 - 你知道松鼠桂鱼名字的来由吗？</a>
												</h3>
												<p className="f-thide">
													<a href="/djradio?id=335425050" className="s-fc4" title="围炉夜话">围炉夜话</a>
												</p>
											</div>
											<a href="/discover/djradio/category?id=11" className="tag u-type">人文历史</a>
										</li>
      						)
      					}
      				</ul>
      			</div>
      			<div className="blk f-fr">
      				<div className="u-title f-cb">
      					<h3><a href="/discover/djradio/recommend" className="f-ff2">推荐节目</a></h3>
      					<a href="/discover/djradio/recommend" className="more s-fc3">更多 &gt;</a>
      				</div>
      				<ul className="m-plylist toplist">
      					{
      						Array(10).fill(1).map((i,index) =>
										<li key={index} className={index%2==0?'itm':'itm bg'}>
											<a href="" className="cvr u-cover u-cover-tiny f-fl">
												<img src="http://p1.music.126.net/MS97p2nwS3d6Wjd6lVXvnA==/1396379778174456.jpg?param=40x40" alt="" />
												<i className="ply f-pa f-dn"></i>
											</a>
											<div href="" className="cnt f-fl">
												<h3 className="f-thide">
													<a href="/program?id=906955412" className="s-fc1 f-fw0" title="第二季 - 你知道松鼠桂鱼名字的来由吗？">第二季 - 你知道松鼠桂鱼名字的来由吗？</a>
												</h3>
												<p className="f-thide">
													<a href="/djradio?id=335425050" className="s-fc4" title="围炉夜话">围炉夜话</a>
												</p>
											</div>
											<a href="/discover/djradio/category?id=11" className="tag u-type">人文历史</a>
										</li>
      						)
      					}
      				</ul>
      			</div>
      		</div>
      		{
						Array(6).fill(1).map((i,index) =>
							<div className="rdimore" key={index}>
								<div className="u-title f-cb">
									<h3>
										<span className="f-ff2">
											<a href="/discover/djradio/category?id=2">音乐故事</a>
											<span className="f-ff1">·</span>电台
										</span>
									</h3>
									<a href="/discover/djradio/category?id=2" className="more s-fc3">更多 &gt;</a>
								</div>
								<ul className="rdilist f-cb">
									{
										Array(4).fill(1).map((i,index) => 
											<li key={index} className={(index==2||index==3)?'bb0':null}>
												<a href="/djradio?id=335965054" className="cvr u-cover u-cover-rdi f-fl">
													<img src="http://p1.music.126.net/S9t4DhG1Xhu_7gvs80pIGA==/18984167765431940.jpg?param=200y200" alt="" />
												</a>
												<div className="cnt">
													<h3 className="f-fs3">
														<a href="/djradio?id=335965054" className="s-fc1" title="林非的唱片私藏馆">林非的唱片私藏馆</a>
													</h3>
													<p className="note s-fc4">DJ林非跟你分享他的两万张老唱片</p>
												</div>
											</li>
										)
									}
								</ul>
							</div>
						)
      		}
      	</div>
      </div>
    );
  }
}
class RdiType extends Component {
	render() {
		return (
			<div className="rditype f-pr f-cb">
  			<div className="boxes j-flag muti">
    			{
    				Array(2).fill(1).map((i,index) =>
							<ul key={index} className="box f-cb show">
    					{Array(18).fill(1).map((i,index) =>
      					<li key={index}>
									<a  href="">
										<div className="icon" style={{backgroundImage:'url(http://p1.music.126.net/jQo83vj8D0r3g0ydL1ujag==/18555358232264878.jpg)'}}></div>
										<em>有声书</em>
									</a>
								</li>
    					)}
    				</ul>
    				)
    			}	
  			</div>
  			<span className="turn turn-left j-flag z-dis">向左</span>
  			<span className="turn turn-right j-flag">向右</span>
  			<div className="dotpage">
  				<span className="dot curr">1</span>
  				<span className="dot">2</span>
  			</div>
  		</div>
		)
	}
}


export default DjRadio