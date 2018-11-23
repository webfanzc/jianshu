/**
 * @description 深拷贝
 * @param {*} obj 要拷贝的对象
 * @param {*} [cache=[]]
 * @returns 新的拷贝对象
 */
export const deepCopy = (obj, cache = []) => {
  function find(list, f) {
    return list.filter(f)[0]
  }

  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}

  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
/**
 * @description 整合saga
 * @param {Object} sagas 所有saga的对象
 * @returns {Array} saga数组
 */
export const genRoot = sagas => {
  let sagaArr = []
  Object.keys(sagas).forEach(sagasKey => {
    let item = sagas[sagasKey]
    Object.keys(item).forEach(key => {
      sagaArr.push(item[key]())
    })
  })
  return sagaArr
}
