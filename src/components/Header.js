import React, { Component} from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="wrapper">
					<h1 className="logo"><a href="/">网易云音乐</a></h1>
				</div>
			</div>
		)
	}
}

export default Header