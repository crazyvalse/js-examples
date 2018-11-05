/**
 * Created by codingnuts on 2018/4/15.
 */
var salesOffices = {};        //定义售楼处
salesOffices.clientList = {}; //缓存列表， 存放订阅者的回调
salesOffices.listen = function (key, fn) {
	if (!this.clientList[key]) {
		this.clientList[key] = [];
	}
	this.clientList[key].push(fn);
};

salesOffices.trigger = function () {
	var key = Array.prototype.shift.call(arguments),
		fns = this.clientList[key];

	if (!fns || fns.length === 0) {
		return false;
	}

	for (var i = 0, fn; fn = fns[i++];) {
		fn.apply(this, arguments);
	}
};


//调用

salesOffices.listen("squareMeter-88", function (price) {
	console.info("1 - 价格 = " + price);
});

salesOffices.listen("squareMeter-110", function (price) {
	console.info("2 - 价格 = " + price);
});


salesOffices.trigger("squareMeter-88", 200000);
salesOffices.trigger("squareMeter-110", 300000);