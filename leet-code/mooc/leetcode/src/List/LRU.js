const LRUCache = function (capacity) {
  this.capacity = capacity
  this.caches = {}
  this.keys = []
}

/**
 *
 1. 添加缓存数据
 2. 当缓存中没有key的时候，判断keys的长度是否大于capacity
 3. 是：a. 弹出第一项; b. 清理缓存
 4. 否：不作处理
 5. 当缓存中有key的时候，调整key在keys的顺序
 * @param key
 * @param value
 */
LRUCache.prototype.put = function (key, value) {
  // 2. 当缓存中没有key的时候，判断keys的长度是否大于等于capacity
  // cache 或者 keys
  if (!this.caches[key]) {
    // 是：a. 弹出第一项; b. 清理缓存
    if (this.keys.length >= this.capacity) {
      let k = this.keys.shift()
      delete this.caches[k]
    }
    this.keys.push(key)
  } else {
    const index = keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
      this.keys.push(key)
    }
  }
  // 1. 添加缓存数据
  this.caches[key] = value
}

/**
 *
 缓存中没有key，返回null
 缓存中有key，调整key在keys中的顺序，并返回值
 * @param key
 */
LRUCache.prototype.get = function (key) {
  if (this.caches[key]) {
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
      this.keys.push(key)
      return this.caches[key]
    }
  }
  return null
}

const cache = new LRUCache(3)
cache.put(1, 'a')
cache.put(2, 'b')
cache.put(3, 'c')
console.info(JSON.stringify(cache.keys)) // 1, 2, 3
console.info(JSON.stringify(cache.caches))
cache.put(4, 'd')
console.info(JSON.stringify(cache.keys)) // 2, 3, 4
console.info(JSON.stringify(cache.caches))
console.info(cache.get(2))
console.info(JSON.stringify(cache.keys)) // 3, 4, 2
console.info(JSON.stringify(cache.caches))
console.info(cache.get(1))
