/**
 * Created by codingnuts on 2018/3/26.
 */

var Factory = function (type, content) {
	if (this instanceof Factory) {
		return new this[type](content);
	} else {
		return new Factory(type, content);
	}
};

Factory.prototype = {
	Java: function (content) {
		console.info(content)
	},
	JavaScript: function (content) {
		console.info(content)
	},
	UI : function (content) {
		console.info(content)
	}
};

var f = new Factory("Java", "java是世界上最好的语言！");
var f = Factory("JavaScript", "JavaScript是世界上最好的语言！");


