import { CHANGE_PLAY_LIST, CHANGE_CURR_MUSIC } from './actions'

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


export default {playList,currMusic}