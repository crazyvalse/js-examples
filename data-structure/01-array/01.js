// 2.1 创建数组
// a.
let num = []
console.info(num.length)    // 0

// b. 在[]中放入一组元素；
let num2 = [1, 2, 3, 4, 5]
console.info(num2.length)   // 5

// 调用Array的构造函数创建数组
let num3 = new Array()
console.info(num3.length)   // 0

//
let num4 = new Array(100)
// console.info(Array.from(num4.keys()))    // 0 -> 99

// 2.2 判断 数组
var num5 = [1, 2, 3, 4, 5]
console.info(Array.isArray(num5))

