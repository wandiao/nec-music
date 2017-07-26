/*
 * action 类型
 */


export const CHANGE_PLAY_LIST = 'CHANGE_PLAY_LIST'


/*
 * action 创建函数
 */

 //切换歌单
export function changePlayList(listObj) {
	return {type:CHANGE_PLAY_LIST,listObj}
}