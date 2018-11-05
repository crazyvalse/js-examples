/**
 * Created by codingnuts on 2018/4/18.
 */

var MapFactory = function () {
	
};

MapFactory.prototype = {
	init: function () {
		throw new Error("没有初始化 init方法");
	},
	moveTo: function () {
		throw new Error("没有初始化 init方法");
	},
	drawLine: function (coords) {
		throw new Error("抽象方法需要实现");
	}
};


Function.prototype.inherit = function (sup) {
	var sub = this;
	Object.create = function (obj) {
			var F = function () {};
			F.prototype = obj;
			return new F();
		};

	sub.prototype = Object.create(sup.prototype);;
	sub.prototype.constructor = sub;
};

function GoogleMap () {
	
}

GoogleMap.inherit(MapFactory);

GoogleMap.prototype.moveTo = function () {
	console.info("google map")
};

var map = new GoogleMap();

map.moveTo();
map.drawLine();


