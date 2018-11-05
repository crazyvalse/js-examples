/**
 * Created by codingnuts on 2018/1/5.
 */

/**
 * 1. 没有显式地创建对象
 * 2. 直接将属性和方法赋给了this对象
 * 3. 没有 return
 * @param name
 * @param age
 * @param job
 * @constructor
 */
/*
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	this.sayName = function () {
		console.info(this.name);
	}
}

var person1 = new Person("isaac", 20 , "it");
var person2 = new Person("zac", 20 , "cs");
*/



/**
 * 1. 创建一个新对象
 * 2. 将构造函数的作用域赋值给新对象（this智享了这个心得对象）
 * 3. 执行构造函数中的代码
 * 4. 返回新对象
 */

console.info(person1.constructor == Person);
console.info(person2.constructor == Person);

console.info(person1 instanceof Object);
console.info(person2 instanceof Person);

console.info(person1.sayName == person2.sayName);
console.info("------------------------------------------------------")
/**
 * 1. 将构造函数当函数
 */
var person = new Person("gu", 20, "designer");
person.sayName();

//2. 普通函数调用
Person("zhaoming", 10, "master"); //实际上是添加到了 window上
//window.sayName();

//3. 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "tian", 23, "warranty");
o.sayName();



