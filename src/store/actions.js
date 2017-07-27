/*
 * action 类型
 */


export const CHANGE_PLAY_LIST = 'CHANGE_PLAY_LIST'
export const CHANGE_CURR_MUSIC = 'CHANGE_CURR_MUSIC'


/*
 * action 创建函数
 */

 //切换歌单
export function changePlayList(obj) {
	return {type:CHANGE_PLAY_LIST,obj}
}
 //切换当前歌曲
export function changeCurrMusic({index,info,url,isPlay}) {
	return {type:CHANGE_CURR_MUSIC,index,info,url,isPlay}
}