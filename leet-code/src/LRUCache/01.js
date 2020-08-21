/**
 * 1. capacity
 *
 * 2. 内部有两个对象 keys caches
 * @param capacity
 * @constructor
 */
let LRUCache = function (capacity) {
  this.keys = []
  this.caches = {}
  this.capacity = capacity
}

/*
put：添加一个键值对到缓存中
  1. 先判断key是不是在keys中，
    a. 如果在的话，
      a.1 就把key的位置放到keys的最后面
      a.2 替换cache中的value
    b. 否则，先判断 keys的长度，
    如果 < capacity,，添加keys，并添加cache
    否则，先弹出一个，并添加最新的
 */
LRUCache.prototype.put = function (key, value) {
  const _position = this.keys.indexOf(key)
  if (_position !== -1) {
    // a.1 就把key的位置放到keys的最后面
    this.keys.splice(_position, 1)
    this.keys.push(key)
    // a.2 替换cache中的value
    this.caches[key] = value
  } else {
    // 如果 < capacity,，添加keys，并添加cache
    if (this.keys.length >= this.capacity) {
      delete this.caches[this.keys.shift()]
    }
    this.keys.push(key)
    this.caches[key] = value
  }
}
/**
 * 1. 有key的话
 *  a. 调整key的位置
 *    放到最后面
 *  f. 返回value
 * 否则
 *  a. 返回null
 * @param key
 */
LRUCache.prototype.get = function (key) {
  const _position = this.keys.indexOf(key)
  if (_position !== -1) {
    // a.1 就把key的位置放到keys的最后面
    this.keys.splice(_position, 1)
    this.keys.push(key)
    return this.caches[key]
  }
  return -1
}

let cache = new LRUCache(2 /* 缓存容量 */)

cache.put(1, 1)
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))
cache.put(2, 2)
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))
console.info(cache.get(1)) // 返回  1
cache.put(3, 3)    // 该操作会使得密钥 2 作废
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))
console.info(cache.get(2)) // 返回 -1 (未找到)
cache.put(4, 4)    // 该操作会使得密钥 1 作废
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))
console.info(cache.get(1)) // 返回 -1 (未找到)
console.info(cache.get(3)) // 返回  3
console.info(cache.get(4)) // 返回  4
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))
