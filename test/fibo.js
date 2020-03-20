/**
 * [1, 1, 2, 3, 5, 8, 13, 21, 34]
 * a1 = 1, a2 = 1, (n>3)an = a(n-1) + a(n-2)
 * @param length
 */
function f (length) {
  // length 异常判断
  length = parseInt(length)
  if (isNaN(length) || length <= 0) {
    return 0
  }

  // 正式的方法
  let current = 1, pre = 1
  for (let i = 3; i <= length; i++) {
    current = pre + (pre = current)
  }
  return current
}

console.info(f(10))

/**
 * a[current] = a[current-1] + a[current - 2]
 * @param length
 */
function f0 (length) {
  length = parseInt(length)
  if (isNaN(length) || length <= 0) {
    return 0
  }

  if (length === 1) {
    return 1
  }

  if (length === 2) {
    return 1
  }
  return f0(length - 1) + f0(length - 2)
}

console.info(f0(10))
