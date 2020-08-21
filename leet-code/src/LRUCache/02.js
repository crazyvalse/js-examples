const LRUCache = function (capacity) {
  this.capacity = capacity
  this.keys = []
  this.caches = {}
}
/**
 1. 添加缓存的值
 2. 当缓存中有key的时候，调整key在keys的顺序
 3. 当缓存中没有key的时候，判断keys的长度是否大于capacity
 是：a. 弹出第一项; b. 清理缓存
 否：不作处理
 * @param key
 * @param value
 */
LRUCache.prototype.put = function (key, value) {
  // 2. 当缓存中有key的时候，调整key在keys的顺序
  // 有两种方法：1. 在keys中查找；2. 在cache中查找
  // keys: 优点：能直接返回索引；缺点：数据量大的时候，浪费时间
  // cache: 优点：判断快；缺点：确定之后，需要进一步获得索引
  if (this.caches[key]) {
    // 调整key在keys中的顺序
    // 删掉key后push一个新的
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
    }
  } else {
    // 3. 当缓存中没有key的时候，判断keys的长度是否大于capacity
    if (this.keys.length >= this.capacity) {
      const _k = this.keys.shift()
      delete this.caches[_k]
    }
  }
  this.keys.push(key)
  // 1. 添加缓存的值
  this.caches[key] = value
}

/**
 * 缓存中没有key，返回null
 * 缓存中有key，调整key在keys中的顺序，并返回值
 * @param key
 * @returns {null}
 */
LRUCache.prototype.get = function (key) {
  // 1. 缓存中有key，调整key在keys中的顺序，并返回值
  if (this.caches[key]) {
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
    }
    this.keys.push(key)
    return this.caches[key]
  }
  return null
}

let cache = new LRUCache(3)
cache.put(1, 'a')
cache.put(2, 'b')
cache.put(3, 'c')
cache.put(4, 'd')
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))  // 2 3 4
console.info(cache.get(3))
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))  // 2 4 3
cache.put(5, 'e')
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))  // 4 3 5
cache.put(4, 'd')
console.info(JSON.stringify(cache.keys), JSON.stringify(cache.caches))  // 3 5 4
console.info(cache.get(1))
