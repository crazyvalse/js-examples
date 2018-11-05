/**
 * Created by codingnuts on 2018/3/27.
 */
//1. 缺点：把 instance 暴露出来了
/*
 var Singleton = function (name) {
 this.name = name;
 this.instance = null
 };

 Singleton.prototype.getName = function () {
 console.info(this.name);
 };

 Singleton.getInstance = function (name) {
 if (!this.instance) {
 this.instance = new Singleton(name);
 }
 return this.instance;
 };

 var a = Singleton.getInstance("a");
 var b = Singleton.getInstance("b");
 a.getName();
 b.getName();

 console.info(a);
 */

//2. 缺点： 还是可以通过new的方式来获得
/*var Singleton = function (name) {
 this.name = name;
 };

 Singleton.prototype.getName = function () {
 console.info(this.name);
 };

 Singleton.getInstance = (function () {
 var instance = null;
 return function (name) {
 if (!instance) {
 instance = new Singleton(name);
 }
 return instance;
 };
 })();

 var a = Singleton.getInstance("a");
 var b = Singleton.getInstance("b");
 console.info(a);

 console.info(a === b);*/

//目标

/**
 * 1. 首先 IIFE(immediately invoked function expression) 返回的是个 function（_singleton）
 * 2. IIFE 中需要有一个instance
 * 3. 在_singleton中需要判断实例是否初始化了，如果初始化了，返回实例，否则初始化
 *
 */
/*
var Singleton = (function () {
	var instance;
	var _Singleton = function (name) {
		if (instance) {
			return instance;
		}
		instance = this;
		this.name = name;
	};

	_Singleton.prototype.getName = function () {
		console.info(this.name);
	};

	return _Singleton;
})();


var a = new Singleton("a");
var b = new Singleton("b");
a.getName();
b.getName();

console.info(a === b);

*/

var Singleton = (function () {
	var instance;
	var singleton = function (name) {
		this.name = name;
	};

	singleton.prototype.getName = function (name) {
		console.info(this.name);
	};
	return function (name) {
		if(!instance){
			return instance = new singleton(name);
		}
		return instance;
	}
})();

var a = Singleton("a");
var b= Singleton("b");
console.info(a);
console.info(b);



