/**
 * 将一个数组拆分成多个数组的块
 *
 * @param {Array} array 需要处理的数组.
 * @param {Number} size 每个块的元素数量.
 * @returns {Array} 返回处理后的数组 .
 */
export function chunk(array, size) {
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

/**
 * 对数组进行截取，从第一个不满足predicate 条件的元素开始截取数组
 *
 * @param {Array} array 需要处理的数组.
 * @param {Function} predicate 迭代判断条件.
 * @param {boolean} [isDrop] 指定是移除还是获取这些元素.
 * @param {boolean} [fromRight] 指定从开始还是末尾开始判断.
 * @returns {Array} 返回处理后的数组.
 */
export function drop(array, predicate, isDrop = true, fromRight = false) {
  const length = array.length;
  let index = fromRight ? length : -1;
  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}
  return isDrop
    ? array.slice((fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : array.slice((fromRight ? index + 1 : 0), (fromRight ? length : index));
}