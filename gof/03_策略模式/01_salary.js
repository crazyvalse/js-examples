/**
 * Created by codingnuts on 2018/4/1.
 * 定义一系列算法，把他们一个个封装，并且是他们可以互相替换；
 */

/**
 * 1. 初代
 * 缺点：
 *  1. 函数庞大，包含了很多if-else
 *  2. 缺乏弹性，修改起来麻烦 - 违反开闭原则
 *  3. 不利于复用
 * @param performanceLevel
 * @param salary
 * @returns {number}
 */
/*
var calculateBonus = function (performanceLevel, salary) {
	if(performanceLevel === "S"){
		return salary * 4;
	}

	if(performanceLevel === "A"){
		return salary * 3;
	}

	if(performanceLevel === "B"){
		return salary * 2;
	}
};


console.info(calculateBonus("B", 1000));
calculateBonus("S", 6000);*/

/**
 * 2. 原则： 将不变的部分和变化的部分隔开
 * 策略模式：
 *  1. 策略类： 策略封装具体的算法，并负责具体的技术过程。
 *  2. 环境类： Context 接受用户的请求，随后把请求委托给某一个策略类。
 */

/*var PerformanceS = function () {
	
};

PerformanceS.prototype.calculate = function (salary) {
	return salary * 4;
};

var PerformanceA = function () {

};

PerformanceA.prototype.calculate = function (salary) {
	return salary * 3;
};

var PerformanceB = function () {

};

PerformanceB.prototype.calculate = function (salary) {
	return salary * 2;
};

var Bonus = function () {
	this.salary = null;
	this.strategy = null;
};

Bonus.prototype.setSalary = function (salary) {
	this.salary = salary;
};

Bonus.prototype.setStrategy = function (strategy) {
	this.strategy = strategy;
};

Bonus.prototype.getBonus = function () {
	return this.strategy.calculate(this.salary);
};

var bonus = new Bonus();

bonus.setSalary(1000);
bonus.setStrategy(new PerformanceS());
console.info(bonus.getBonus());

bonus.setStrategy(new PerformanceA());
console.info(bonus.getBonus());*/


/*var strategies = {
	"S": function (salary) {
		return salary * 4;
	},
	"A": function (salary) {
		return salary * 3;
	},
	"B": function (salary) {
		return salary * 2;
	}
};

var calculateBonus = function (level, salary) {
	return strategies[level](salary);
};

console.info(calculateBonus("S", 1000));
console.info(calculateBonus("A", 1000));*/







