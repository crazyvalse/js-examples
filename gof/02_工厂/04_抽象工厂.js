/**
 * Created by codingnuts on 2018/3/27.
 */
var VehicleFactory = function (subType, superType) {
	//继承
	if (typeof VehicleFactory[superType] === 'function') {
		function F () {
		}

		F.prototype = new VehicleFactory[superType]();
		subType.constructor = subType;
		subType.prototype = new F();
	} else {
		throw new Error("未创建该抽象类");
	}
};


VehicleFactory.Car = function () {
	this.type = "Car";
};

VehicleFactory.Car.prototype  = {
	getPrice : function () {
		return new Error("抽象方法不能调用");
	},
	getSpeed: function () {
		return new Error("抽象方法不能调用");
	}
};

VehicleFactory.Bus = function () {
	this.type = 'Bus';
};

VehicleFactory.Bus.prototype = {
	getPrice: function () {
		return new Error("抽象方法不能调用");
	},
	getSpeed: function () {
		return new Error("抽象方法不能调用");
	}
};

VehicleFactory.Truck = function () {
	this.type = 'Truck';
};

VehicleFactory.Truck.prototype = {
	getPrice: function () {
		return new Error("抽象方法不能调用");
	},
	getSpeed: function () {
		return new Error("抽象方法不能调用");
	}
};


var BMW = function (price, speed) {
	this.price = price;
	this.speed = speed;
};

VehicleFactory(BMW, "Car");

BMW.prototype.getPrice = function () {
	return this.price;
};

BMW.prototype.getSpeed = function () {
	return this.speed;
};

var Lamborghini = function (price, speed) {
	this.price = price;
	this.speed = speed;
};

Lamborghini.prototype.getPrice = function () {
	return this.price;
};

Lamborghini.prototype.getSpeed = function () {
	return this.speed;
};

var b = new BMW(1000, 2000);
console.info(b.speed);
console.info(b.getSpeed());
console.info(b instanceof BMW);
console.info(b instanceof VehicleFactory.Car);


