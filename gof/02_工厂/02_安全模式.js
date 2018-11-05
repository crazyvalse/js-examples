/**
 * Created by codingnuts on 2018/3/26.
 */

// 安全模式
var Demo = function () {
	if(!(this instanceof Demo)) {
		return new Demo();
	}
};

Demo.prototype = {
	show: function () {
		console.info("成功");
	}
};

var d = new Demo();
d.show();

var d = Demo();
d.show();
