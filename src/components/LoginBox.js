import React, { Component} from 'react';
import { connect } from 'react-redux';
import {chooseBox} from '../store/actions'

class LoginBox extends Component {
	render() {
		const {logBox,dispatch} = this.props
		let box = null;
		console.log(logBox)
		switch(logBox.name) {
			case '登录':
				box = <div className="lyct lyct-1">
								<div className="n-log2 n-log2-1 f-cb">
									<div className="u-main">
										<div className="u-plt"></div>
										<div className="f-mgt10">
											<a href="javascript:;" onClick={e => dispatch(chooseBox('手机号登录'))} className="u-btn2 u-btn2-2">
												<i>手机号登录</i>
											</a>
										</div>
										<div className="f-mgt10">
											<a href="javascript:;" onClick={e => dispatch(chooseBox('手机号注册'))} className="u-btn2 u-btn2-1">
												<i>注　册</i>
											</a>
										</div>
									</div>
									<div className="u-alt">
										<ul>
											<li>
												<a href="http://music.163.com/api/sns/authorize?snsType=10&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"><i className="u-mlg2 u-mlg2-wx"></i>微信登录</a>
											</li>
											<li><a href="http://music.163.com/api/sns/authorize?snsType=5&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true" ><i className="u-mlg2 u-mlg2-qq"></i>QQ登录</a>
											</li>
											<li><a href="http://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"><i className="u-mlg2 u-mlg2-sn"></i>微博登录</a>
											</li>
											<li>
												<a onClick={e => dispatch(chooseBox('邮箱登录'))} href="javascript:;"><i className="u-mlg2 u-mlg2-wy"></i>网易邮箱帐号登录</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
				break;
			case '手机号登录':
				box = <div className="lyct lyct-1">
								<div className="n-log2 n-log2-2">
									<div>
										<input type="text" className="u-txt" placeholder="请输入手机号"/>
									</div>
									<div className="f-mgt10">
										<input type="password" className="u-txt" placeholder="请输入密码"/>
									</div>
									<div className="u-err" style={{display:'none'}}>
										<i className="u-icn u-icn-25"></i><span></span>
									</div>
									<div className="f-mgt10">
										<label className="s-fc3">
											<input type="checkbox" checked="checked" className="u-auto"/>自动登录
										</label>
										<a href="#" className="f-fr s-fc3">忘记密码？</a>
									</div>
									<div className="f-mgt20">
										<a href="" className="u-btn2 u-btn2-2"><i>登　录</i></a>
									</div>	
								</div>
								<div className="n-loglink2 f-cb">
									<a href="javascript:;" onClick={e => dispatch(chooseBox('登录'))} className="f-fl s-primary">&lt;&nbsp;&nbsp;其他登录方式</a>
									<a href="javascript:;" onClick={e => dispatch(chooseBox('手机号注册'))} className="f-fr">没有帐号？免费注册&nbsp;&nbsp;&gt;</a>
								</div>
							</div>
				break;
			case '手机号注册':
				box = <div className="lyct lyct-1">
								<div className="n-log2 n-log2-2">
									<div className="s-fc3"><label>手机号：</label></div>
									<div className="f-mgt10">
										<div className="u-txtwrap">
											<span className="u-prefix">+86</span>
											<input type="text" className="u-txt" placeholder="请输入手机号" />
										</div>
									</div>
									<div className="f-mgt10 s-fc3"><label>密码：</label></div>
									<div className="f-mgt10">
										<input type="password" className="u-txt f-mgt10" placeholder="设置登录密码，不少于6位" />
									</div>
									<div className="u-err" style={{display:'none'}}>
										<i className="u-icn u-icn-25"></i><span></span>
									</div>
									<div className="f-mgt20">
										<a href="" className="u-btn2 u-btn2-2"><i>下一步</i></a>
									</div>	
								</div>
								<div className="js-btmbar n-loglink2 f-cb">
									<a onClick={e => dispatch(chooseBox('登录'))} href="javascript:;" className="f-fl s-primary">&lt;&nbsp;&nbsp;返回登录</a>
								</div>
							</div>
					break;
				case '邮箱登录':
					box = <div className="lyct lyct-1">
								<div className="n-log2 n-log2-2">
									<div>
										<input type="text" className="u-txt" placeholder="请输入手机号"/>
									</div>
									<div className="f-mgt10">
										<input type="password" className="u-txt" placeholder="请输入密码"/>
									</div>
									<div className="u-err" style={{display:'none'}}>
										<i className="u-icn u-icn-25"></i><span></span>
									</div>
									<div className="f-mgt10">
										<label className="s-fc3">
											<input type="checkbox" checked="checked" className="u-auto"/>自动登录
										</label>
										<a href="#" className="f-fr s-fc3">忘记密码？</a>
									</div>
									<div className="f-mgt20">
										<a href="" className="u-btn2 u-btn2-2"><i>登　录</i></a>
									</div>	
								</div>
								<div className="n-loglink2 f-cb">
									<a href="javascript:;" onClick={e => dispatch(chooseBox('登录'))} className="f-fl s-primary">&lt;&nbsp;&nbsp;其他登录方式</a>
								</div>
							</div>
				break;
			default:
					box = null
		}
		return (
		<div className="m-layer" style={{display:logBox.show?'block':'none'}}>
			<div className="zbar">
				<div className="zttl">{logBox.name}</div>
			</div>
			<div className="zcnt">
				{box}
			</div>
			<span onClick={e=>dispatch(chooseBox('登录',false))} className="zcls" title="关闭窗体">×</span>
		</div>
		)
	}
}
function select(state) {
  return {
    logBox:state.logBox,
  }
}

export default connect(select)(LoginBox)