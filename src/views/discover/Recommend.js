import React, { Component} from 'react';
import {
  getBanner, 
  getPersonalized, 
  getRecDjprogram, 
  getTopAlbum, 
  getTopList, 
  getTopArtists, 
  getDjRecommend,
  getPlayListDetail,
  getMusicUrl} from '../../api';
import {numberFormat} from '../../util';
import { connect } from 'react-redux';
import { changePlayList, changeCurrMusic } from '../../store/actions'
import {chunk} from '../../util/array';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners:[],
      hotRecommends:[],
      topAlbums:[],
      topLists:[],
      artists:[],
      djs:[]
    }    
  }
  componentDidMount() {
    //获取banner数据
    getBanner().then(res => {
      if(res.data.code == 200) {
        this.setState({
          banners:res.data.banners
        })
      }
    })
    //获取推荐歌单和电台数据
    axios.all([getPersonalized(),getRecDjprogram()])
    .then(axios.spread((p,d) => {
      // console.log(p)
      if(p.data.code == 200 && d.data.code == 200){
        let hotRecommends = p.data.result;
        hotRecommends.splice(3,0,d.data.result[0]);
        hotRecommends.splice(5,0,d.data.result[1]);
        hotRecommends.splice(7,0,d.data.result[2]);
        hotRecommends.splice(-1,1)
        this.setState({
          hotRecommends:hotRecommends
        })
      }
    }))
    //获取新碟上架数据
    getTopAlbum().then(res => {
      // console.log(res)
      if(res.data.code == 200) {
        let topAlbums = chunk(res.data.albums,5);
        topAlbums.unshift(topAlbums[topAlbums.length-1])
        topAlbums.push(topAlbums[1])
        this.setState({
          topAlbums:topAlbums
        })
      }
    })
    //获取排行榜数据
    axios.all([getTopList(3),getTopList(0),getTopList(2)])
    .then(axios.spread((b,x,y) => {
      const topLists = [b.data.result,x.data.result,y.data.result];
      this.setState({
        topLists:topLists
      })
    }))

    //获取入驻歌手
    getTopArtists(0,5).then(res => {
      if(res.data.code == 200) {
        this.setState({
          artists:res.data.artists
        })
      }
    })

    //获取热门dj
    getDjRecommend().then(res => {
      if(res.data.code === 200) {
        let djs = res.data.djRadios.slice(0,5).map(i => i.dj)
        this.setState({
          djs:djs
        })
      }
    })

  }
  render() {
    const {banners,hotRecommends,topAlbums,topLists,artists,djs} = this.state
    return (
      <div className="recommend-page">
      	<Banner banners={banners} />
      	<div className="g-bd1 clearfix">
      		<MainCon data={{hotRecommends,topAlbums,topLists}} {...this.props} />
          <Sidebar data={{artists,djs}} />
      	</div>
      </div>
    );
  }
}

//banner
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex:0
    }
    //切换当前banner
    this.changeIndex = (index) => {
      if(index < 0) {
        index = this.props.banners.length-1;
      }
      if(index > this.props.banners.length-1) {
        index = 0;
      }
      this.setState({
        currIndex:index
      })
    }
    //自动轮播
    this.autoPlay = () => {
      this.timer = setInterval(() => {
        let currIndex = this.state.currIndex;
        if(currIndex >= this.props.banners.length-1) {
          this.setState({
            currIndex:0
          })
        }else{
          this.setState({
            currIndex:currIndex+1
          })
        }   
      },4000)
    }
    //暂停自动播放
    this.clear = () => {
      if(this.timer){
        clearInterval(this.timer);
      } 
    }
  }
  componentDidMount() { 
    this.autoPlay();
  }
  componentWillUnmount() {
    this.clear();
  }
 	render() {
    let {currIndex} = this.state;
    let {banners} = this.props;
    let bannerList = null;
    if(!banners.length) {
      bannerList = <div />
    }else{
      bannerList = banners.map((banner,index) =>(
              <a key={index} href={banner.url} className={'b-item '+ (index==currIndex?'active':'')}>
                <img src={banner.pic} />
              </a>
              ))
    }
 		return (
			<div className="n-ban">
				<div className="wrap">
					<div className="ban pr" onMouseEnter={this.clear} onMouseLeave={e => {this.autoPlay()}}>
            {bannerList}
						<a onClick={e => this.changeIndex(currIndex-1)} href="javascript:;" className="btnl">&gt;</a>
						<a onClick={e => this.changeIndex(currIndex+1)} href="javascript:;" className="btnr">&lt;</a>
						<div className="dots">
							{banners.map((i,index) => 
								<a onClick={e =>this.changeIndex(index)} className={`pg ${index == currIndex?'active':''}`} key={index}></a>
							)}
						</div>
					</div>
					<div className="download pr">
						<a href="" className="btn">下载客户端</a>
						<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
						<span className="shadow"></span>
						<span className="shadowr"></span>
					</div>
				</div>
			</div>
 		)
 	}
}
//左边主体内容
class MainCon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {hotRecommends,topAlbums,topLists} = this.props.data
    
    return (
      <div className="g-mn1">
        <div className="g-mn1c">
          <div className="g-wrap3">
            <HotRcmd hotRecommends={hotRecommends} {...this.props} />
            <div className="n-clmnad">
              <a href="" className="dm_ad_hover"></a>
              <img src="/static/img/ad-ex.jpg" />
            </div>
            <Disk topAlbums={topAlbums} />
            <Bill topLists={topLists} />
          </div>
        </div>
      </div>
    )
  } 
}

//热门推荐
class HotRcmd extends Component {
  constructor(props) {
    super(props)
    const {dispatch} = this.props
    this.changePlaylist = (index) => {
      let playList = null;
      getPlayListDetail(index).then(res => {
        console.log(res);
        if(res.data.code == 200) {
          playList = res.data.playlist
          if(!playList.tracks.length) {
            return false;
          }
          dispatch(changePlayList(playList))
          return getMusicUrl(playList.tracks[0].id)
        }
      })
      .then(res => {
        console.log(res)
        if(res.data.code == 200) {
          const url = res.data.data[0].url;
          dispatch(changeCurrMusic({
            index:0,
            info:playList.tracks[0],
            url:url,
            isPlay:true
          }))
        }
      }).catch(err => {
        console.log(err)
      })
      
    }
  }

  render() {
    const {hotRecommends} = this.props
    let hotlist = null
    if(!hotRecommends.length) {
      hotlist = <div />
    }else{
      hotlist = hotRecommends.map((item,index) => 
        <li key={item.id}>
          <div className="u-cover u-cover-1">
            <img src={item.picUrl} />
            {item.highQuality?<i className="u-jp u-icn2 u-icn2-jp3"></i>:''}
            <a title={item.name} href={item.program?`/dj?id=${item.id}`:`/playlist?id=${item.id}`} className="msk"></a>
            <div className="bottom">
              <a href="javascript:;" onClick={e => this.changePlaylist(item.id)} className="icon-play fr"></a>
              <span className="icon-headset"></span>
              <span className="nb">{item.playCount?numberFormat(item.playCount):numberFormat(item.program.listenerCount)}</span>
            </div>
          </div>
          <p className="dec">
            <a href="" className="tit s-fc0">{item.program?<i className="u-icn u-icn-53"></i>:''} {item.name}</a>
          </p>
        </li>
      ) 
    }
    const recCat = ['华语','流行','摇滚','民谣','电子']
    return (
      <div className="n-rcmd">
        <div className="v-hd2">
          <Link to="/discover/playlist" className="tit f-ff2 f-tdn">热门推荐</Link>
          <div className="tab">
            {
              recCat.map((cat,index) =>
                <span key={index}>
                  <Link to={`/discover/playlist?cat=${cat}`} className="s-fc3"> {cat} </Link>
                  {index == recCat.length-1?'':<span className="line">|</span>}
                </span>
              )
            }
            
          </div>
          <span className="more">
            <a href="" className="s-fc3">更多</a>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <ul className="m-cvrlst clearfix">
           {hotlist}
        </ul>
      </div>
    )
  }
}

//新碟上架
class Disk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currIndex:1,
      changing:true
    }
    //切换分组
    this.changeIndex = (index) => {
      if(!this.state.changing) {
        return false;
      }
      this.setState({
        currIndex:index
      })
      if(index <= 0) {
        setTimeout(() => {
          this.setState({
            currIndex:this.props.topAlbums.length - 2,
            changing:false
          })
        },500)
      }else if(index >= this.props.topAlbums.length - 1){
        setTimeout(() => {
          this.setState({
            currIndex:1,
            changing:false
          })
        },500)
      }
      setTimeout(() => {
        this.setState({
          changing:true
        })
      },550)
    }
  }
  componentDidMount() {

  }
  render() {
    const {topAlbums} = this.props
    const {currIndex,changing} = this.state
    let albumList = null
    if(!topAlbums.length) {
      albumList = <div />
    }else{
      albumList = topAlbums.map((group,index) => (
        <ul key={index} style={{left:index == currIndex?'0':index<currIndex?'-645px':'645px',transition:changing?'left .5s':'none'}}>
          {
            group.map((item,index1) => (
              <li key={index1}>
                <div className="u-cover u-cover-alb1">
                <img className="j-img"  src={item.picUrl} />
                <Link title={item.name}  to={`/album?id=${item.id}`} className="msk"></Link>
                <a href="javascript:;" className="icon-play fr" title="播放"></a>
                </div>
                <p className="f-thide"><a href="/album?id=35792020" className="s-fc0 tit">{item.name}</a></p>
                <p className="tit f-thide">
                  <a className="s-fc3" href="">{item.artist.name}</a>
                </p>
              </li>
            ))
          }
        </ul>  
      ))
    }
    
    return (
      <div className="n-news">
        <div className="v-hd2">
          <a href="/discover/album/" className="tit f-ff2 f-tdn">新碟上架</a>
          <span className="more">
            <a href="" className="s-fc3">更多</a>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-disk">
          <div className="inner">
            <a onClick={e => this.changeIndex(currIndex-1)} href="javascript:;" className="pre s-bg s-bg-7 f-tdn">&nbsp;</a>
            <div className="roll pr">
              {albumList}
            </div>
            <a onClick={e => this.changeIndex(currIndex+1)} href="javascript:;" className="click-flag nxt s-bg s-bg-8 f-tdn">&nbsp;</a>
          </div>
        </div>
      </div>
    )
  }
}

//排行榜
class Bill extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {topLists} = this.props
    let billList = null;
    if(!topLists.length) {
      billList = <div></div>
    }else{
      billList = topLists.map((topList,index) => 
        <dl className="blk" key={index}>
          <dt className="top">
            <div className="cver u-cover u-cover-4">
              <img src={topList.coverImgUrl} />
              <Link to={`/discover/toplist?id=${topList.id}`} className="msk" title={topList.name}></Link>
            </div>
            <div className="tit">
              <Link to={`/discover/toplist?id=${topList.id}`} title={topList.name}>
                <h3 className="f-fs1 f-thide">{topList.name}</h3>
              </Link>
              <div className="btn">
                <a href="javascript:;" className="s-bg s-bg-9 f-tdn">播放</a>
                <a href="javascript:;" className="s-bg s-bg-10 f-tdn">收藏</a>
              </div>
            </div>
          </dt>
          <dd>
            <ol>
              {
                topList.tracks.slice(0,10).map((item,index1) => (
                  <li key={index1}>
                    <span className={index1<3?'no no-top':'no'}>{index1+1}</span>
                    <Link to={`/song?id=${item.id}`} className="nm s-fc0 f-thide" title={item.name}>{item.name}</Link>
                    <div className="oper">
                      <a href="javascript:;" className="s-bg s-bg-11"></a>
                      <a href="javascript:;" className="u-icn u-icn-81"></a>
                      <a href="javascript:;" className="s-bg s-bg-12"></a>
                    </div>
                  </li>
                ))
              } 
            </ol>
            <div className="more">
              <Link to={`/discover/toplist?id=${topList.id}`} className="s-fc0">查看全部&gt;</Link>
            </div>
          </dd>
        </dl>
      )
    }
    return (
      <div className="n-bill">
        <div className="v-hd2">
          <a href="/discover/album/" className="tit f-ff2 f-tdn">榜单</a>
          <span className="more">
            <a href="" className="s-fc3">更多</a>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-bilst">
          {billList}
        </div>
      </div>
    )
  }
}

//sidebar
class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {artists,djs} = this.props.data
    let artistsList = null;
    let djsList = null;
    if(artists.length) {
      artistsList = artists.map((artist,index) => (
        <li key={index}>
          <Link to={`/user/home?id=${artist.id}`} className="itm f-tdn">
            <div className="head">
              <img className="j-img" src={artist.picUrl} />
            </div>
            <div className="ifo">
              <h4>
                <span className="nm f-fs1 f-ib f-thide">{artist.name}</span>
              </h4>
              <p className="f-thide s-fc3">{artist.briefDesc}</p>
            </div>
          </Link>
        </li>
      ))
    }
    if(djs.length) {
      djsList = djs.map((dj,index) => (
        <li key={index}>
          <Link to={`/user/home?id=${dj.id}`} className="cver">
            <img src={dj.avatarUrl} />
          </Link>
          <div className="info">
            <p>
              <a href="/user/home?id=278438485" className="nm-icn f-thide s-fc0">{dj.nickname}</a>
              <sup className="u-icn u-icn-1 "></sup>
            </p>
            <p className="f-thide s-fc3">{dj.description}</p>
          </div>
        </li>
      ))
    }
    return (
      <div className="g-sd1">
        <div className="n-myinfo n-myinfo-1 s-bg s-bg-1">
          <p className="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="#" className="btn s-bg s-bg-2 f-tdn">用户登录</a>
        </div>
        <div className="n-singer">
          <h3 className="v-hd3">
            <span className="fl">入驻歌手</span>
            <a href="/discover/artist/signed/" className="more s-fc3">查看全部 &gt;</a>
          </h3>
          <ul className="n-enter clearfix">
            {artistsList}
          </ul>
          <div>
            <a className="u-btn2 u-btn2-1"><i>申请成为网易音乐人</i></a>
          </div>
        </div>
        <div className="n-dj n-dj-1">
          <h3 className="v-hd3">热门DJ</h3>
          <ul className="n-hotdj clearfix">
            {djsList}
          </ul>
        </div>
      </div>
    )
  }
}
function select(state) {
  return {
    playList:state.playList,
    currMusic:state.currMusic
  }
}

export default connect(select)(Recommend)