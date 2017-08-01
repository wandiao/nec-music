import { CHANGE_PLAY_LIST, CHANGE_CURR_MUSIC,CHOOSE_BOX } from './actions'

const initState = {
  playList:{//播放列表
    tracks:[]
  },
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
      localStorage.playList = JSON.stringify(action.obj)
      return action.obj
    default:
      return state;
  }
}

function currMusic(state=initState.currMusic,action) {
  switch(action.type) {
    case CHANGE_CURR_MUSIC:
      let music = {
        index:action.index || state.index,
        info:action.info || state.info,
        url:action.url || state.url,
        isPlay:false,
        lrc:action.lrc || state.lrc
      }
      localStorage.currMusic = JSON.stringify(music)
      const isPlay = action.isPlay === false ? false : action.isPlay || state.isPlay
      music.isPlay = isPlay;
      return music;
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