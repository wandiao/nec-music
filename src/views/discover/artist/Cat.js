import React, { Component} from 'react';
class Cat extends Component {
	render() {
		return (
			<div className="g-wrap">
				<div className="u-title f-cb">
					<h3><span className="f-ff2 d-flag">华语男歌手</span></h3>
				</div>
				<ul className="n-ltlst f-cb">
					<li>
						<a href="/discover/artist/cat?id=1001&amp;initial=-1" className="ch f-fs0 active">热门</a>
					</li>			
					{Array(26).fill(1).map((i,index) => 
						<li key={index}>
							<a href="/discover/artist/cat?id=1001&amp;initial=-1" className="">A</a>
						</li>
					)}
					<li>
						<a href="/discover/artist/cat?id=1001&amp;initial=0" className="ch f-fs0">其他</a>
					</li>
				</ul>
				<div className="m-sgerlist">
					<div className="m-cvrlst m-cvrlst-5 f-cb">
					{
						Array(50).fill(1).map((i,index) => 
							<SingerItem key={index} index={index} />
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
export default Cat