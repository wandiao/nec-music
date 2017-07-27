import { CHANGE_PLAY_LIST, CHANGE_CURR_MUSIC } from './actions'

const initState = {
  playList:{//播放列表
    tracks:[]
  },
  currMusic:{//当前音乐
    index:0,
    info:null,
    url:null,
    isPlay:false
  }
}
function playList(state=initState.playList,action) {
  switch(action.type) {
    case CHANGE_PLAY_LIST:
      return action.obj
    default:
      return state;
  }
}
function currMusic(state=initState.currMusic,action) {
  switch(action.type) {
    case CHANGE_CURR_MUSIC:
      return {
        index:action.index || state.index,
        info:action.info || state.music,
        url:action.url || state.url,
        isPlay:action.isPlay
      }
    default:
      return state;
  }
}


export default {playList,currMusic}