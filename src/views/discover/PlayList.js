import React, { Component} from 'react';
import { Pagination } from 'antd';

//歌单页面
class PlayList extends Component {
	constructor(props){
		super(props)
		this.state = {
			showType:false
		}
		this.toggleShow = () => {
			this.setState(ps => {
				return {
					showType:!ps.showType
				}
			})
		}
	}
  render() {
    return (
      <div className="g-bd">
      	<div className="g-wrap p-pl f-pr">
      		<div className="u-title clearfix">
      			<h3>
      				<span className="f-ff2">全部</span>
      				<a href="javascript:;" className="u-btn2 u-btn2-1 menu d-flag" onClick={e => this.toggleShow()}>
      					<i>选择分类<em className="u-icn u-icn-38"></em></i>
      				</a>
      			</h3>
      			<div className="u-btn f-fr u-btn-hot">
      				<a href="" className="a1">热门</a>
      				<a href="" className="a2">最新</a>
      			</div>
      		</div>
      		<div className="n-sltlyr" style={{display:this.state.showType?'block':'none'}}>
      			<div className="hd">
      				<i className="icn"></i>
      			</div>
      			<div className="bd">
      				<h3>
      					<a href="/discover/playlist/" className="u-btn u-btn-g s-fc1"><em>全部风格</em></a>
      				</h3>
      				{
      					Array(5).fill(1).map((i,index) => 
									<dl className="clearfix" key={index}>
										<dt>
											<i className="u-icn u-icn-71"></i>语种
										</dt>
										<dd className={index == 4?'last':null}>
											{
												Array(10).fill(1).map((i,index) =>
													<span key={index}>
														<a className="s-fc1">华语</a>
														<span className="line">|</span>
													</span>
												)
											}
										</dd>
									</dl>
      					)
      				}
      			</div>
      			<div className="ft"></div>
      		</div>
      		<ul className="m-cvrlst f-cb">
      			{Array(35).fill(1).map((i,index) =>
							<li key={index}>
								<div className="u-cover u-cover-1">
									<img src="http://p1.music.126.net/7uwXpWCjW98Z6bPIQ3_idg==/19152393044496489.jpg?param=140y140" />
									<a title="秒懂这些歌曲是你我之间的小默契" href="/playlist?id=826797842" className="msk"></a>
									<div className="bottom">
										<a href="" className="icon-play f-fr"></a>
										<span className="icon-headset"></span>
										<span className="nb">38万</span>
									</div>
								</div>
								<p className="dec">
									<a href="" className="tit f-thide s-fc0">秒懂这些歌曲是你我之间的小默契</a>
								</p>
								<p>
									<span className="s-fc4">by </span> 
									<a title="扥你" href="/user/home?id=95142402" className="nm nm-icn f-thide s-fc3"> 扥你  </a> <sup className="u-icn u-icn-1 "></sup>
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


export default PlayList