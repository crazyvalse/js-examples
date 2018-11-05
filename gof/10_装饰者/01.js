/**
 * Created by codingnuts on 2018/5/25.
 */

var plane = {
	fire: function () {
		console.info("发射普通子弹");
	}
};

var missileDecorator = function () {
	console.info("发射导弹");
};

var atomDecorator = function () {
	console.info("发射原子弹");
};

var fire1 = plane.fire;

plane.fire = function () {
	fire1();
	missileDecorator();
};

var fire2 = plane.fire;

plane.fire = function () {
	fire2();
	atomDecorator();
};

plane.fire();

