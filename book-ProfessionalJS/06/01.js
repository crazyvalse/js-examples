/**
 * Created by codingnuts on 2018/2/22.
 *
 * 1. 数据属性：
 * Configurable: 是否能通过 delete 删除属性，能否修改属性的特性
 * Enumerable: 能否通过 for-in 循环返回属性。
 * Writable: 能否修改属性的值。
 * Value: 包含这个属性的数据值。
 * 使用 Object.defineProperty() 方法。这个方法接收三个参数：属性所在的对象、属性的名字和一个描述对象。
 */

/*var person = {
	name: "Nicholas"
};*/

//a. writable
var person = {};
/*
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nicholas"
});

console.info(person.name);
person.name = "zac";
console.info(person.name);    //Nicholas
*/

//b. configurable

/*
Object.defineProperty(person, "name", {
	configurable: false,
	value: "Nicholas"
});
console.info(person.name);
delete person.name;
console.info(person.name);
*/

/*Object.defineProperty(person, "name", {     //会报异常： Cannot redefine property
	configurable: true
});*/

/**
 * 2. 访问器属性
 * getter 和 setter, 只定义一个，那就只执行一个
 * 老的方法： __defineGetter__ 和 __defineSetter__
 * @type {{_year: number, edition: number}}
 */
/*var book = {
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, "year", {
	get: function () {
		return this._year;
	},
	set: function (newValue) {
		if(newValue > 2004){
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});


book.year = 2008;
console.info(book);

book.year = 2010;
console.info(book);*/

//定义多个属性
/*var book = {};

Object.defineProperties(book, {
	_year: {
		writable: true,
		value: 2004
	},
	edition: {
		writable: true,
		value: 1
	},
	year: {
		get: function () {
			return this._year;
		},
		set: function (newValue) {
			if(newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});

//读取属性的特性
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.info(descriptor);*/





