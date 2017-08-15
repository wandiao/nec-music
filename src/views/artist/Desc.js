import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import * as api from '../../api'
import qs from 'query-string'
import {Spin} from 'antd'

class Desc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arInfo:null,
			arName:null
		}
	}
	componentDidMount() {
		const id = qs.parse(this.props.location.search).id
		api.getArtistDesc(id).then(res => {
			console.log(res)
			if(res.data.code == 200) {
				this.setState({
					arInfo:res.data
				})
			}
		})
		const arName = document.getElementById('artist_name').innerHTML
		this.setState({
			arName:arName
		})
	}
	render() {
		const {arInfo,arName} = this.state
		if(!arInfo) {
			return <div style={{height:'400px'}} className="loading"><Spin tip="Loading..." /></div>
		}
		return (
			<div className="n-artdesc">
				<h2><i>&nbsp;</i>{arName}简介</h2>
				<p>{arInfo.briefDesc}</p>
				{arInfo.introduction.map((i,index)=>
					<div key={index}>
						<h2>{i.ti}</h2>
						<p className="z-indent"
						dangerouslySetInnerHTML={{__html:i.txt.replace(/\n/g,'<br />')}}
						></p>
					</div>
				)}
			</div>
		)
	}
}

export default Desc