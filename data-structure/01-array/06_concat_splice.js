// 由已有数组创建新数组
// concat 合并多个数组创建一个新数组
// splice 截取一个数组的子集创建一个新数组

let cisDept = ['David', 'Cynthia', 'Raymond', 'Clayton']
let dmpDept = ['Jennifer', 'Clayton', 'Cynthia']

let itDiv = cisDept.concat(dmpDept)
console.info(itDiv.toString())

itDiv = dmpDept.concat(cisDept)
console.info(itDiv.toString())

// splice 第一个参数是起始索引，第二个参数是截取的长度
let nums = [1, 2, 3, 4, 5, 6]
let n1 = nums.splice(3, 3, 11, 22, 33, 44)
console.info(nums, n1)
