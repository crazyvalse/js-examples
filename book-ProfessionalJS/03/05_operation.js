/**
 * Created by codingnuts on 2018/2/10.
 */

//1. 一元
/*
var age = 29;
var anotherAge = -- age + 2;
console.info(age);
console.info(anotherAge);
*/


/*var s1 = "2";
var s2 = "z";
var b = false;
var o = {
	valueOf: function () {
		return -1;
	}
};

console.info(++ s1);
console.info(++ s2);
console.info(++ b);
console.info(--o);*/

// 2. + a == Number(a);   ------
// 3. !! a == Boolean(a); ------

// == null 与 undefined 相等

/**
 * == :
 * a. 有一个是boolean，先转为数值，再比较；
 * b. 有一个是字符串，另一个是数值，先把字符串转成数值再比较
 * c. 有一个是对象，先调用对象的 valueOf，得到的基本来兴数值按照前面的方式比较
 *
 * 注意：
 * a. null == undefined
 * b. 如果有一个是NaN，那返回一定是false
 * c. 两个对象，比较是不是一个对象；
 *
 *
 *
 */
//console.info(null == undefined);

//arguments
/*

function howManyArgs () {
	console.info(arguments.length);
}

howManyArgs("string", 45);
howManyArgs();
howManyArgs(12);
*/

// 如果未赋值， 是undefined
/*function aaa () {
	console.info(arguments[1]);
}
aaa(1);*/

//重载
/*
function addNum (num) {
	return num + 100;
}

function addNum (num) {
	return num + 200;
}

console.info(addNum(100));*/




