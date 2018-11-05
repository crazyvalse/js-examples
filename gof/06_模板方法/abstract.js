/**
 * Created by codingnuts on 2018/5/24.
 */

var Beverage = function () {

};

Beverage.prototype = {
	boilWater: function () {
		throw new Error("没有实现 boilWater!");
	},
	brew: function () {
		throw new Error("没有实现 boilWater!");
	},
	pourInCup: function () {
		throw new Error("没有实现 boilWater!");
	},
	addCondiments: function () {
		throw new Error("没有实现 addCondiments!");
	},
	customerWantCondiments: function () {
		throw new Error("没有实现 boilWater!");
	},
	init: function () {
		this.boilWater();
		this.brew();
		this.pourInCup();
		if (this.customerWantCondiments()) {
			this.addCondiments();
		}
	}
};

var inherit = function (sup, sub) {
	var create = Object.create || function (_proto) {
			function f () {
			}

			f.prototype = _proto;
			return new f();
		};

	sub.prototype = create(sup.prototype);
	sub.prototype.constructor = sub;
};

var Tea = function () {

};

inherit(Beverage, Tea);





