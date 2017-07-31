import React, { Component} from 'react';

class Signed extends Component {
	render() {
		return (
			<div className="g-wrap">
				<div className="u-title f-cb">
					<h3><span className="f-ff2">入驻歌手</span></h3>
					<a href="/discover/artist/signed/" className="more s-fc3">更多 &gt;</a>
				</div>
				<div className="m-sgerlist">
					<div className="m-cvrlst m-cvrlst-5 f-cb">
					{
						Array(50).fill(1).map((i,index) => 
							<SingerItem key={index} index={1} />
						)
					}
						
					</div>
				</div>
				
			</div>
		)
	}
}

class SingerItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		if(this.props.index < 10) {
			return (
				<li className={this.props.index <5?null:'line'}>
					<div className="u-cover u-cover-5">
						<img src="http://p4.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg" />
						<a href="/artist?id=10559" className="msk" title="张惠妹的音乐"></a>
					</div>
					<p>
						<a href="/artist?id=10559" className="nm nm-icn f-thide s-fc0" title="张惠妹的音乐">张惠妹</a>
						<a className="f-tdn" href="/user/home?id=29879272" title="张惠妹的个人主页">
							<i className="u-icn u-icn-5"></i>
						</a>
					</p>
				</li>
			)
		}else{
			return (
				<li className="sml">
					<a href=" /artist?id=6066" className="nm nm-icn f-thide s-fc0" title="杨宗纬的音乐">杨宗纬</a>&nbsp;
					<a className="icn u-icn u-icn-5" href="/user/home?id=818067" title="杨宗纬的个人主页"></a>
				</li>
			)
		}
	}
}
export default Signed