/**
 * Created by codingnuts on 2018/5/24.
 */

var objectPoolFactory = function (createObjFn) {
	var objectPool = [];

	return {
		create: function () {
			var obj = objectPool.length === 0 ?
				createObjFn.apply(this, arguments) : objectPool.shift();

			return obj;
		},
		recover: function (obj) {
			objectPool.push(obj);
		}
	};
};

var PersonFactory = objectPoolFactory(function (name, age) {
	var Person = function (name, age) {
		this.name = name;
		this.age = age;
	};

	Person.prototype = {
		sayName: function () {
			console.info(this.name);
		}
	};

	return new Person(name, age);
});

var person = PersonFactory.create("zelda", 111);









