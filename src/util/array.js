/**
 * 将一个数组拆分成多个数组的块
 *
 * @param {Array} array 需要处理的数组.
 * @param {Number} size 每个块的元素数量.
 * @returns {Array} 返回处理后的数组 .
 */
export function chunk(array, size) {
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}