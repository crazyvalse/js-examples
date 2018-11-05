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
	},
	remove: function (key, fn) {
		var fns = this.clientList[key];
		if(!fns){
			return false;
		}
		if(!fn){    //如果没传具体的fn，表明取消所有的对应key的订阅
			fns && (fns.length = 0);
		}else{
			for(var i = fns.length - 1; i >=0 ; i --) {   //反向便令订阅的回调函数
				var _fn = fns[i];
				if(_fn === fn) {
					fns.splice(i, 1);
				}
			}
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

saleOffices.remove("squareMeter-88");

saleOffices.trigger("squareMeter-88", 200000);
saleOffices.trigger("squareMeter-110", 500000);