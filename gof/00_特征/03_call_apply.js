/**
 * Created by codingnuts on 2018/3/27.
 */
/*function foo () {
	console.info(arguments.length);
}

foo(1,2,3)*/

//用途

//1. 改变 this 的指向
/*var obj1 = {
	name: 'sven'
};

var obj2 = {
	name: "anna"
}

global.name = 'window';

var getName = function () {
	console.info(this.name);
};

getName();
getName.call(obj1);
getName.call(obj2);*/

//简化版
/*Function.prototype.bind = function (context) {
	var self = this;  //
	return function () {
		return self.apply(context, arguments);
	};
};

var obj = {
	name: 'sven'
};

var foo = function(){
	console.info(this.name);
}.bind(obj);

foo();*/


/*
Function.prototype.bind = function () {
	var self = this,  //
		context = [].shift.call(arguments),
		args = [].slice.call(arguments);
	return function () {    //返回一个新的函数
		return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
	};
};

var obj = {
	name: 'sven'
};

var foo = function(a,b,c,d){
	console.info(this.name);
	console.info(a,b,c,d)
}.bind(obj, 1, 2);

foo(3, 4);*/

/*function foo () {
	console.info(this.name);
	console.info(this.age);
}

setTimeout(foo.bind({name: "123", age: 11}), 1000);*/

/*
function foo () {
	console.info(arguments instanceof Array);
}

foo();
*/

(function () {
	Array.prototype.push.call(arguments, 3, 4);
	console.info(arguments);
})(1, 2);

var a = {};
[].push.call(a, "first", "second");
console.info(a);