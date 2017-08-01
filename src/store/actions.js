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
export function changePlayList(obj) {
	return {type:CHANGE_PLAY_LIST,obj}
}

 //切换当前歌曲
export function changeCurrMusic({index,info,url,isPlay,lrc}) {
	return {type:CHANGE_CURR_MUSIC,index,info,url,isPlay,lrc}
}

//选择登录框
export function chooseBox(name,show=true) {
	return {type:CHOOSE_BOX,name,show}
}