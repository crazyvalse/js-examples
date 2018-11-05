/**
 * Created by codingnuts on 2018/3/27.
 */
var Damo = function () {

};

Damo.prototype = {
	firstAction: function () {
		console.info("冲过去")
	},
	secondAction: function () {
		console.info("一堆拳打过去")
	},
	mustKill: function () {
		console.info("壁咚")
	}
};

var Gongben = function () {

};

Gongben.prototype = {
	firstAction: function () {
		console.info("空明斩")
	},
	secondAction: function () {
		console.info("神速")
	},
	mustKill: function () {
		console.info("天下无双")
	}
};

var Nvwa = function () {

};

Nvwa.prototype = {
	firstAction: function () {
		console.info("光波")
	},
	secondAction: function () {
		console.info("立方块")
	},
	thirdAction: function () {
		console.info("传送")
	},
	mustKill: function () {
		console.info("大光波")
	}
};

/*
 function Factory (personName) {
 switch (personName) {
 case "达摩":
 return new Damo();
 case "宫本":
 return new Gongben();
 case "女娲":
 return new Nvwa();
 }
 }*/

//安全模式
function Factory (type) {
	if (!(this instanceof Factory)) {
		return new Factory(type);
	} else {
		return new this[type]();
	}
}

Factory.prototype.Damo = Damo;
Factory.prototype.Gongben = Gongben;
Factory.prototype.Nvwa = Nvwa;

var f = Factory("Damo");
var ff = new Factory("Nvwa");

f.firstAction();
ff.firstAction();

