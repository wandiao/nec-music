import React, { Component} from 'react';

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
      	</div>
      </div>
    );
  }
}


export default PlayList