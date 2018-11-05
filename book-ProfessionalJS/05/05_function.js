/**
 * Created by codingnuts on 2018/2/20.
 *
 *
 * 函数实际上是对象，每个函数都是Function的实例，
 * 因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。
 *
 */

/*function sum (num1, num2) {
	return num1 + num2;
}
//与下面的
var sum = function () {
	return num1 + num2;
};

//使用构造函数  -- 不推荐
var sum = new Function("num1", "num2", "return num1 + num2");

//由于是指针，因此可以有多个别名；因此没有重载，后面的覆盖前面的方法
function addSomeNumber (num) {
	return num + 100;
}

function addSomeNumber (num) {
	return num + 101;
}*/

// 1. arguments
/*
function factorial (num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

console.info(factorial(5));

// callee
function factorial_new (num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}

console.info(factorial_new(5));
*/



// 2. this
/*
 color = "red";
 var o = {color: "blue"};

 function sayColor () {
 console.info(this.color);
 }
 sayColor();
 o.sayColor = sayColor;
 o.sayColor();
 */

//3. caller
/*function outer () {
 inner();
 outer2();
 }

 function outer2 () {
 inner();
 }

 function inner () {
 console.info(arguments.callee.caller);  //
 }

 outer();*/

// 4. length 表示函数希望接受的命名参数的个数
/*
 function sayName (name) {
 console.info(name);
 }

 function sum (a, b) {
 return a + b;
 }

 function sayHi () {
 console.info("hi");
 }

 console.info(sayName.length);
 console.info(sum.length);
 console.info(sayHi.length);
 */

/**
 * prototype： 是保存他们所有实例方法的真正所在。toString 和 valueOf 等方法实际上都保存在prototype 名下，
 *    只不过是通过各自对象的示例访问罢了。在创建自定义引用类型以及实际继承时，prototype 属性的作用是极为重要的。
 *    prototype 不可枚举, 因此使用 for in
 *
 * 有两个非继承来的方法： apply 和 call。 这两个方法都是在特定作用域中调用函数的，实际上等于设置函数体中的this对象的值。
 *    apply接收两个参数： 一个是在其中运行函数的作用域，另一个是参数数组。其中， 第二个参数可以是Array 的实例，也可以是arguments对象。
 * @param a
 * @param b
 * @returns {*}
 */
/*function sum (a, b) {
 return a + b;
 }

 function callSum (a, b) {
 return sum.apply(this, arguments);
 }

 function callSum2 (a, b) {
 return sum.apply(this, [a, b]);
 }

 console.info(callSum(10, 10));
 console.info(callSum2(10, 10));*/


// 强大的apply
/*var a = {color: "red"};
var b = {color: "yellow"};

function sayColor () {
	console.info(this.color);
}

sayColor.apply(a);
sayColor.apply(b);*/





