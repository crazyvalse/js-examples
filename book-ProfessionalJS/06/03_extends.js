/**
 * Created by codingnuts on 2018/2/26.
 */

/*function SuperType () {
	this.property = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
};

function SubType () {
	this.subProperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
	return this.subProperty;
};

var instance = new SubType();
console.info(instance.getSuperValue());

// 2. 确定原型和实例的关系
console.info(instance instanceof Object);
console.info(instance instanceof SuperType);
console.info(instance instanceof SubType);

console.info(Object.prototype.isPrototypeOf(instance));
console.info(SuperType.prototype.isPrototypeOf(instance));
console.info(SubType.prototype.isPrototypeOf(instance));*/

// 3. 近身的定义方法
/*
function SuperType () {
	this.property = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
};

function SubType () {
	this.subProperty = false;
}

SubType.prototype = new SubType();

//添加新的方法
SubType.prototype.getSubValue = function () {
	return this.subProperty;
};

//重写超类中的方法
SubType.prototype.getSuperValue = function () {
	return false;
};

var instance = new SubType();
console.info(instance.getSuperValue());

var instance2 = new SuperType();
console.info(instance2.getSuperValue());
*/

// -------不能用对象字面量，因为会重写prototype

//4. 原型链的问题 a. 父类的引用类型会被自动当成prototype中的属性； b.

/*
function SuperType () {
	this.colors = ["red", "blue", "green"];
}

function SubType () {

}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
console.info(instance1.colors);

var instance2 = new SubType();
console.info(instance2.colors);*/

//--------- 修改后 ---- 借用构造函数
/*
function SuperType () {
	this.colors = ["red", "blue", "green"];
}

function SubType () {
	//---------继承supertype
	SuperType.call(this);
}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
console.info(instance1.colors);

var instance2 = new SubType();
console.info(instance2.colors);
*/
// Object.create(); ES5 提供的方法

//5. 原型式继承
/*
function object(o) {
	function F(){};
	F.prototype = o;
	return new F();
}

var person = {
	name: "zac",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.info(person.friends);
*/

//6. 寄生组合继承

//组合继承的问题，会导致父类的构造器被调用了两次。
/*function SuperType (name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
	console.info(this.name);
};

function SubType(name, age){
	SuperType.call(this, name);   // -- 第一次
	this.age = age;
}

SubType.prototype = new SuperType();    // -- 第二次
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
	console.info(this.age);
};*/

// 寄生组合式继承
/*
function inheritPrototype (subType, superType) {
	var prototype = Object.create(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType (name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
	console.info(this.name)
};

function SubType (name, age) {
	SuperType.call(this, name);

	this.age = age;
}

inheritPrototype(SubType, SuperType);
*/



