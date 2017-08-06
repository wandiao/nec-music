import * as api from '../api'
import {parseLrc} from '../util';
/*
 * action 类型
 */


export const CHANGE_PLAY_LIST = 'CHANGE_PLAY_LIST'
export const CHANGE_CURR_MUSIC = 'CHANGE_CURR_MUSIC'
export const CHOOSE_BOX = 'CHOOSE_BOX'


/*
 * action 创建函数
 */

 //切换歌单
export function changePlayList(list) {
	return {type:CHANGE_PLAY_LIST,list}
}

 //切换当前歌曲
export function changeCurrMusic({index,info,url,isPlay,lrc}) {
	return {type:CHANGE_CURR_MUSIC,index,info,url,isPlay,lrc}
}

//选择登录框
export function chooseBox(name,show=true) {
	return {type:CHOOSE_BOX,name,show}
}

export function asyncChangeCurrMusic(index,id,isPlay) {
	return function(dispatch,getState) {
		const state = getState();
		const info = state.playList[index]
		dispatch(changeCurrMusic({index,info,isPlay}))
		api.getMusicUrl(id).then(res => {
			if(res.data.code == 200) {
				const url = res.data.data[0].url;
				dispatch(changeCurrMusic({
					url:url
				}))
			}
			return api.getLyric(id) 
		})
		.then(res => {
			if(res.data.code == 200) {
				const lrc = res.data.lrc?parseLrc(res.data.lrc.lyric):[]
        dispatch(changeCurrMusic({
          lrc:lrc
        }))
			}
		})
		.catch(err => {
			console.log(err)
		})
	}
}