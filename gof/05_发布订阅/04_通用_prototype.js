/**
 * Created by codingnuts on 2018/4/15.
 */
var Event = function(){
	this.clientList = {};
};

Event.prototype = {
	listen: function (key, fn) {
		if( !this.clientList[key]){
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);
	},
	trigger: function () {
		var key = Array.prototype.shift.call(arguments),
			fns = this.clientList[key];

		if(!fns || fns.length === 0 ) {
			return false;
		}

		for(var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments);
		}
	}
};


var saleOffices = new Event();

saleOffices.listen("squareMeter-88", function (price) {
	console.info("88-价格=" + price);
});

saleOffices.listen("squareMeter-110", function (price) {
	console.info("110-价格=" + price);
});

saleOffices.trigger("squareMeter-88", 200000);
saleOffices.trigger("squareMeter-110", 500000);

var saleOffices2 = new Event();

saleOffices2.listen("squareMeter-88-2", function (price) {
	console.info("88-价格-2=" + price);
});

saleOffices2.listen("squareMeter-110-2", function (price) {
	console.info("110-价格-2=" + price);
});

saleOffices2.trigger("squareMeter-88-2", 200000);
saleOffices2.trigger("squareMeter-110-2", 500000);