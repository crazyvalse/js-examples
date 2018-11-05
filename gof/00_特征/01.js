/**
 * Created by codingnuts on 2018/3/27.
 */
//1. 继承； 2. 多态； 3. 封装；
	//1. 继承
/*
var extend = function (sub, sup) {
	var prototype;
	Object.create = Object.create || function (obj) {
			var F = function () {};
			F.prototype = obj;
			return new F();
		};

	prototype = Object.create(sup.prototype);
	sub.prototype = prototype;
	sub.prototype.constructor = sub;
};

var Person = function (name, age) {
	this.name = name;
	this.age = age;
};
Person.prototype.sayName = function () {
	console.info(this.name);
};

Person.prototype.walk = function () {
	throw new Error("需要实现");
};


var Man = function (name, age, habit) {
	this.habit = habit;
	Person.call(this, name, age);
};

extend(Man, Person);
Man.prototype.sayHabit = function () {
	console.info(this.habit);
};

Man.prototype.walk = function () {
	console.info("男的跑得快！");
};

var Woman = function (name, age) {
	Person.call(this, name, age);
};

extend(Woman, Person);
Woman.prototype.Makeup = function () {
	console.info("yes, i do make up");
};

Woman.prototype.walk = function () {
	console.info("女人逛街体力无限!");
};

var x = new Man("little one", 11, "football");
//x.sayName();
//x.sayHabit();

var y = new Woman("big one", 12);
//y.sayName();
//y.Makeup();

// 2. 多态
function walk (o) {
	if (o.walk instanceof Function) {
		o.walk();
	}

}

walk(x);
walk(y);
*/


