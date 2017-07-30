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

/**
 * 转化歌曲时间
 *
 * @param {Number} time 需要转化的时间.
 * @returns {String} 返回格式化之后的时间字符串.
 */
export function formatSongTime(time) {
  var time = time
  var minute = Math.floor(time / 60);
  var second = Math.floor(time - (minute * 60))
  if(minute < 10) {
    minute = "0" + minute
  }
  if(second < 10) {
    second = "0" + second
  }
  time = minute + ":" + second
  return time
}

/**
 *格式化歌词
 *@param {string} data 歌唱字符串
 *@return {array} 歌词数组
 *
 */
export function parseLrc(data) {
  var lines = data.split('\n');
  var pattern = /\[\d{2}:\d{2}.\d{2,}\]/g;
  var result = [];
  while(!pattern.test(lines[0])) {
    lines = lines.slice(1)
  };
  for(var i = 0; i < lines.length; i++) {
    if(lines[i] == "" || typeof(lines[i]) == "undefined") {
      delete lines[i];
    }

  }
  lines.forEach(function(item, index, data) {
    var time = item.match(pattern);
    var value = item.replace(pattern, '');
    time.forEach(function(v, i, a) {
      var t = v.slice(1, -1);
      t = t.split(':');
      result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
    })
  })
  result.sort(function(a, b) {
    return a[0] - b[0];
  });
  return result
};

