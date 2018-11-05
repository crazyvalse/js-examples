/**
 * Created by codingnuts on 2018/5/24.
 */
var Beverage = function (sub) {

	var boilWater = function () {
		console.info("把水煮开！")
	};

	var brew = sub.brew || function () {
			throw new Error("必须传递 brew方法");
		};

	var pourInCup = sub.pourInCup || function () {
			throw new Error("必须传递 pourInCup方法");
		};

	var addCondiments = sub.addCondiments || function () {
			throw new Error("必须传递 addCondiments方法");
		};

	var F = function () {

	};
	F.prototype.init = function () {
		boilWater();
		brew();
		pourInCup();
		addCondiments();
	};

	return F;
};

var Coffee = Beverage({
	brew: function () {
		console.info("用沸水冲泡咖啡！");
	},
	pourInCup: function () {
		console.info("把咖啡倒进杯子！");
	},
	addCondiments: function () {
		console.info("加糖和牛奶！");
	}
});

var coffee = new Coffee();
coffee.init();
