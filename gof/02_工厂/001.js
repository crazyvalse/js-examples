/**
 * Created by codingnuts on 2018/5/29.
 */

var Interface = function () {

};

Interface.prototype = {
	run: function () {
		throw new Error("子类需实现父类的 run 方法！");
	},
	stop: function () {
		throw new Error("子类需实现父类的 stop 方法！");
	}
};

var InterfaceFactory = function (sub) {
	function F () {
		if (this.init && this.init instanceof Function) {
			this.init.apply(this, arguments);
		}
	}
	F.prototype = sub;
	return new F();
};


var hello = InterfaceFactory({
	init: function (param) {
		console.info("init: ", param);
	},
	run: function () {
		console.info("hello run");
	},
	stop: function () {
		console.info("hello stop");
	}
});

