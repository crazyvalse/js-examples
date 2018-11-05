/**
 * Created by codingnuts on 2018/1/5.
 */
//工程模式
/*function createPerson (name, age, job) {
 var o = new Object();
 o.name = name;
 o.age = age;
 o.job = job;

 o.sayName = function () {
 alert(this.name);
 };

 return o;
 }

 var person = createPerson("isaac", 20 , "it");
 var person2 = createPerson("zac", 20 , "it");
 console.info(person);
 console.info(person2);*/

//构造函数模式
/**
 * 经历了四步骤：
 * 1. 创建一个新对象
 * 2. 讲构造函数的作用域赋给新对象 this指向的就是新的对象了
 * 3. 执行构造函数中的代码
 * 4. 返回新对象
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
 //两个对象都有一个构造器 constructor 属性，指向Person
 var person1 = new Person("isaac", 20 , "it");
 var person2 = new Person("zac", 20 , "cs");

 console.info(person1.constructor == Person);
 console.info(person2.constructor == Person);

 console.info(person1 instanceof Person);
 console.info(person2 instanceof Person);
 console.info(person1 instanceof Object);

 var person = new Person("Nicholas", 29, "software Engineer");
 person.sayName();


 Person("Greg", 27, "Doctor");
 sayName()//window.sayName();

 //构造函数模式虽然好用，但是是有缺点的。每个方法都要在实例上重新创建一次。
 console.info(person1.sayName == person2.sayName);
 */

/**
 * 只要创建一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向函数的原型对象。
 * 默认情况下，所有原型对象都会自动获得一个constructor 属性，这个属性是一个指向 prototype 属性所在函数的指针。
 * Person.prototype.constructor 指向 Person。
 *
 * 创建了自定义的构造函数之后，其原型对象默认只会去得constructor属性；至于其他方法都是从 Object 继承而来的。
 * 当调用构造函数创建一个新实例后，该实例的内部将包含一个指针，指向构造函数的原型对象。
 *
 * p1 和p2 都有一个内部属性，该属性指向Person.prototype，但是它与构造函数没有直接关系。
 * @constructor
 */

function Person () {

}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
	console.info(this.name);
};
Person.prototype.friends = ["isaac", "guzm"];
var p1 = new Person();
p1.name = "zac";
p1.sayName();

var p2 = new Person();
p2.sayName();

console.info(p1.prototype);
console.info(Object.getPrototypeOf(p1) == Person.prototype);
/*
 console.info(p1.sayName == p2.sayName);
 console.info(Person.prototype.isPrototypeOf(p1));
 console.info(Person.prototype.isPrototypeOf(p2));
 */

//console.info(Person.prototype);
/*console.info(Object.getPrototypeOf(p1) == Person.prototype);
 console.info(Object.getPrototypeOf(p1).name);


 console.info(Person)*/

//hasOwnProperty() 方法 - 来判断是自己的 还是 prototype的


// 需要到 150页去复习

/*
 var keys = Object.keys(Person.prototype);
 console.info(keys);
 console.info(Object.keys(p1));

 console.info(Object.getOwnPropertyNames(Person.prototype));
 */


/*console.info(p1.friends);
p1.friends = [1, 2, 3];
console.info(p1.friends);
console.info(p2.friends);*/


//4. 组合使用构造函数模式和原型
/*
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["zac", "Isaac"];
}

Person.prototype = {
	constructor: Person,
	sayName: function () {
		console.info(this.name);
	}
};

var p1 = new Person("p1", 22, "se");
var p2 = new Person("p2", 33, "doctor");

p1.friends.push("guzm");

console.info(p1.friends);
console.info(p2.friends);
*/

//5. 动态原型模式 - 动态加载
/*function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	if(typeof this.sayName != "function"){
		console.info(this.name);
	}
}

var friend = new Person("zac", 30, "software engineer");


friend.sayName();*/


//6. 寄生构造函数模式
/*
function SpecialArray () {
	var values = new Array();

	values.push.apply(values, arguments);

	values.toPipedString = function () {
		return this.join("|");
	};

	return values;
}

var colors = new SpecialArray(1,2,3,4,5,6);

console.info(colors.toPipedString());

*/



