import { 
  CHANGE_PLAY_LIST,
  CHANGE_CURR_MUSIC,
  CHOOSE_BOX, 
  ADD_PLAY_ITEM,
  CLEAR_CURR_MUSIC
   } from './actions'

const initState = {
  playList:[],//播放列表
  currMusic:{//当前音乐
    index:0,
    info:null,
    url:null,
    isPlay:false,
    lrc:[]
  },
  logBox:{
    name:'登录',
    show:false
  }
}

function playList(state=initState.playList,action) {
  switch(action.type) {
    case CHANGE_PLAY_LIST:
      localStorage.playList = JSON.stringify(action.list)
      return action.list
    case ADD_PLAY_ITEM:

      let pl = Object.assign([],state)
      pl.unshift(action.item)
      localStorage.playList = JSON.stringify(pl)
      return pl;
    default:
      return state;
  }
}

function currMusic(state=initState.currMusic,action) {
  switch(action.type) {
    case CHANGE_CURR_MUSIC:
      const index = action.index === 0 ? 0 : action.index || state.index
      let music = {
        index:action.index || index,
        info:action.info || state.info,
        url:action.url || state.url,
        isPlay:false,
        lrc:action.lrc || state.lrc,
      }
      localStorage.currMusic = JSON.stringify(music)
      const isPlay = action.isPlay === false ? false : action.isPlay || state.isPlay
      music.isPlay = isPlay;
      return music;
    case CLEAR_CURR_MUSIC:
      localStorage.currMusic = ''
      return initState.currMusic;
    default:
      return state;
  }
}

function logBox(state=initState.logBox,action) {
  switch(action.type) {
    case CHOOSE_BOX:
      return {
        name:action.name,
        show:action.show
      }
    default:
    return state
  }
}


export default {playList,currMusic,logBox}