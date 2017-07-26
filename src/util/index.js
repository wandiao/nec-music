/**
 * 格式化数字
 *
 * @param {Number} num 需要转化的数字.
 * @returns {Number|String} 返回格式化之后的数字或字符串.
 */
export function numberFormat(num) {
	num = parseInt(num,10);
	if(num <= 99999) {
		return num
	}
	num = Math.round(parseInt(num/10000,10));
	return `${num}万`
}

