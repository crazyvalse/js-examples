/**
 * Created by codingnuts on 2018/4/14.
 */
//原型 - 定义
var salesOffices = {};
salesOffices.clientList = [];
salesOffices.listen = function (fn) {
	this.clientList.push(fn);
};

salesOffices.trigger = function () {
	for(var i = 0, fn; fn = this.clientList[i++];) {
		fn.apply(this, arguments);
	}
};


//调用

salesOffices.listen(function (price, squareMeter) {
	console.info("1 - 价格 = " + price);
	console.info("1 - squareMeter = " + squareMeter);
});

salesOffices.listen(function (price, squareMeter) {
	console.info("2 - 价格 = " + price);
	console.info("2 - squareMeter = " + squareMeter);
});


salesOffices.trigger(200000, 22);
salesOffices.trigger(300000, 100);