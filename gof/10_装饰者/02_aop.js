/**
 * Created by codingnuts on 2018/5/25.
 */
Function.prototype.before = function (beforefn) {
	var __self = this;
	return function () {
		beforefn.apply(this, arguments);

		return __self.apply(this, arguments);
	};
};

Function.prototype.after = function (afterfn) {
	var __self = this;
	return function () {
		var ret = __self.apply(this, arguments);
		afterfn.apply(this, arguments);
		return ret;
	};
};

function HelloWorld () {
	console.info("hello world");
}

HelloWorld = HelloWorld.before(function () {
	console.info("before");
});


HelloWorld = HelloWorld.after(function () {
	console.info("after");
});
HelloWorld();

