import { CHANGE_PLAY_LIST } from './actions'


function playList(state={tracks:[]},action) {
  switch(action.type) {
    case CHANGE_PLAY_LIST:
      return action.listObj;
    default:
      return state;
  }
}


export default {playList}