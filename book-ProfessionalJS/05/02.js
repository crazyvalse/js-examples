/**
 * Created by codingnuts on 2018/2/17.
 */
/**
 * 1. 使用typeof来判断基础数据类型
 * @type {string}
 */
/*
 var s = "zac";
 var b = true;
 var i = 22;
 var u;
 var n = null;
 var o = new Object();

 console.info(typeof s === "string");
 */


/**
 * 2. 判断引用类型 使用instanceof
 * 如果是检测基本类型，返回的是false，基本类型不是对象
 */
/*
 var person = {};
 var colors = [];
 console.info(person instanceof Object);
 console.info(colors instanceof Array);
 */


/**
 * 3. 没有块级作用域: 在js中 if语句中的变量声明会将变量添加到当前的执行环境（全局环境）中。
 * 在使用for语句的时候尤其要牢记这一差异；
 */
/*if(true) {
 var color = "blue";
 }

 console.info(color);

 for(var i = 0 ; i < 10 ; i ++) {

 }
 console.info(i);*/

/*function add (num1, num2) {
 return num1 + num2;
 }
 console.info(add(1, 2));*/

/**
 * 4. Array.isArray(value)
 */
/*var arr = [1, 2, 3, 4];
 var arr1 = [5];

 //console.info(Array.isArray(arr));

 console.info(arr.toString());
 console.info(arr.valueOf());
 console.info([arr, arr1]);*/

/**
 * 5. 操作
 * @type {Array}
 */
var colors = new Array();
var count = colors.push("red", "green", "white");
//console.info(count);

/*//push 从后推入
 count = colors.push("black");
 console.info(count);

 //pop 从后取出
 var item = colors.pop();
 console.info(item, colors.length);

 //shift 从头取出
 var firstItem = colors.shift();
 console.info(firstItem, colors.length);
 console.info(colors.valueOf());

 //unshift 从头推入
 count = colors.unshift("grey");
 console.info(count, colors.length);

 //reverse
 console.info(colors.reverse());
 console.info(colors);

 //sort - 比较的是字符 asc码
 console.info(colors.sort());
 console.info(colors);

 var values = [0, 1, 5, 10, 15];

 //------ 不能比较数字，
 console.info(values.sort());

 function compare (val1, val2) {
 return val1 - val2;
 }

 console.info(values.sort(compare));*/

// concat 合并数组
/*var colors2 = colors.concat("yellow", ["black", "brown"]);

 console.info(colors);
 console.info(colors2);*/

// slice 基于当前数组创建一个新数组 - 第二个参数是结束的位置 - 如果参数是负数的话，是由长度加上这些负数
/*console.info(colors.slice(1));
console.info(colors.slice(1, 2));*/

// splice 也有两个参数， 第一个是起始位置， 第二个是项数
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
//------删除的功能
console.info(nums.splice(1, 3));
console.info(nums);

//------插入 第二个参数为 0， 不删除数据
console.info(nums.splice(1, 0, "red", "green"));
console.info(nums);

//------替换
console.info(nums.splice(3, 1, "white"));
console.info(nums);
*/

// 查看位置 indexOf() 和 lastIndexOf()
/*console.info(nums.indexOf(4));
console.info(nums.lastIndexOf(4));*/

// 迭代方法 every filter forEach map some

// every 对数组中的每一项 运行函数，如果每一项都是true，那结果为true
/*console.info(nums.every(function (item, index, arr) {
	return item > 2;
}));

// some 只要有一项是true 返回true
console.info(nums.some(function (item, index, arr) {
	return item > 2;
}));

//filter 返回为true 的项
console.info(nums.filter(function (item, index, arr) {
	return item > 2;
}));


console.info(nums.map(function (item, index, arr) {
	return item * 2;
}));

console.info(nums.forEach(function (item, index) {
	console.info(item);
}));*/

