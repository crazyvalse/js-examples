/**
 * Created by codingnuts on 2018/6/4.
 */
function Thing () {
};

Thing.prototype.doSomething = function (x, y) {
	var result;

	// doSomething
	result = x + y;

	return result;
};


var thing = new Thing();
var result = thing.doSomething(1, 2);

console.info(result);

//假设需要测试性能

//1. 需要修改场景的记录
var start = Date.now();

var result = thing.doSomething(1, 2);

console.info((Date.now() - start) + "ms", result);

//2. 修改源代码 - 假设这是一个更为复杂的方法，含有多个return方法

//3. 使用继承
function ProfiledThing() {
	Thing.apply(this, arguments);
}

ProfiledThing.prototype = Object.create(Thing.prototype);

ProfiledThing.prototype.doSomething = function() {
	var start = Date.now();

	var result = Thing.prototype.doSomething.apply(this, arguments);

	console.log((Date.now() - start) + 'ms', x, y, result);

	return result;
}

// 4. 使用aop
/*var origDoSomething = thing.doSomething;

// Method replacement is a simple form of AOP
thing.doSomething = function() {
	doSomethingElseFirst();

	return origDoSomething.apply(this, arguments);
}*/

var origDoSomething = Thing.prototype.doSomething;

Thing.prototype.doSomething = function() {
	var start = Date.now();

	var result = origDoSomething.apply(this, arguments);

	console.log((Date.now() - start) + 'ms', x, y, result);

	return result;
}





