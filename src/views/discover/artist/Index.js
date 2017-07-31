import React, { Component} from 'react';
import ExtendRoute from '../../../components/ExtendRoute'
import { NavLink as Link } from 'react-router-dom'

const singerTypes = [
	{
		name:'华语',
		types:[
			{id:1001,name:'华语男歌手'},
			{id:1002,name:'华语女歌手'},
			{id:1003,name:'华语组合/乐队'}
		]
	},
	{
		name:'欧美',
		types:[
			{id:2001,name:'欧美男歌手'},
			{id:2002,name:'欧美女歌手'},
			{id:2003,name:'欧美组合/乐队'}
		]
	},
	{
		name:'日本',
		types:[
			{id:6001,name:'日本男歌手'},
			{id:6002,name:'日本女歌手'},
			{id:6003,name:'日本组合/乐队'}
		]
	},
	{
		name:'韩国',
		types:[
			{id:7001,name:'韩国男歌手'},
			{id:7002,name:'韩国女歌手'},
			{id:7003,name:'韩国组合/乐队'}
		]
	},
	{
		name:'其他',
		types:[
			{id:4001,name:'其他男歌手'},
			{id:4002,name:'其他女歌手'},
			{id:4003,name:'其他组合/乐队'}
		]
	},
	
]
//歌手
class Artist extends Component {
	constructor(props) {
		super(props);
		this.checkActive = (match,location) => {
			console.log(match)
			console.log(location)
		}
	}
  render() {
    return (
      <div className="g-bd2 f-cb">
      	<div className="g-sd2">
      		<div className="g-wrap4 n-sgernav">
      			<h2 className="tit">推荐</h2>
      			<ul className="nav f-cb">
      				<li>
								<Link to="/discover/artist/" exact activeClassName="active">推荐歌手</Link>
							</li>
							<li>
								<Link to="/discover/artist/signed/" activeClassName="active">入驻歌手</Link>
							</li>
      			</ul>
      			{
      				singerTypes.map((i,index) => 
								<div className="blk" key={index}>
		      				<h2 className="tit">{i.name}</h2>
		      				<ul className="nav f-cb">
		      				{
		      					i.types.map((type,index1) =>
											<li key={index1}><Link  activeClassName="active" to={`/discover/artist/cat?id=${type.id}`}>{type.name}</Link>
											</li>
		      					)
		      				}
		      					
		      				</ul>
		      			</div>
      				)
      			}
      		</div>
      	</div>
      	<div className="g-mn2">
      		<div className="g-mn2c">
	      		{this.props.routes.map((route,i)=> 
	      			<ExtendRoute key={i} {...route}/>
	      		)}
      			
      		</div>
      	</div>
      </div>
    );
  }
}



export default Artist