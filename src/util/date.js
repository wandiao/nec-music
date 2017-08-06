/**
 * 时间格式化
 *
 * @param {*} time 需要格式化的时间.
 * @param {String} fmt 格式化的形式.
 * @returns {String} 格式化之后的时间字符串.
 */
export function dateFormat(time,fmt) {
  var date = new Date(time);
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 时间美化
 *
 * @param {*} time 需要美化的时间.
 * @returns {String} 每化之后的时间字符串.
 */
export function dateBeautify(str) {
  var date = new Date(str);
  var now = new Date();
  var time = now.getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if(now.getFullYear()>date.getFullYear()){
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
  }else if(now.getFullYear() == date.getFullYear()){
    if(now.getMonth() == date.getMonth()){
      if(now.getDate() == date.getDate()){
        if (time / 1000 < 60) {
          return '刚刚';
        } else if ((time / 60000) < 60) {
          return parseInt((time / 60000),10) + '分钟前';
        }
        return `${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`;
      }else if(now.getDate() == date.getDate()+1){
         return `昨天${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`;
      }else if(now.getDate() == date.getDate()+2){
        return `前天${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`;
      }else{
        return `${date.getMonth()+1}月${date.getDate()}日`;
      }
    }else{
      return `${date.getMonth()+1}月${date.getDate()}日`;
    }
  }
}