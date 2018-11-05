/**
 * Created by codingnuts on 2018/4/7.
 */

//basic
/*
var Flower = function () {

};

var xiaoming = {
	sendFlower: function (target) {
		var flower = new Flower();
		target.receiveFlower(flower);
	}
};

var A = {
	receiveFlower: function (flower) {
		console.info("收到了花 " + flower);
	}
};

var B = {
	receiveFlower: function (flower) {
		A.receiveFlower(flower);
	}
};

xiaoming.sendFlower(B);
*/
//2. 监听心情
/*
var Flower = function () {

};

var xiaoming = {
	sendFlower: function (target) {
		var flower = new Flower();
		target.receiveFlower(flower);
	}
};

var B = {
	receiveFlower: function (flower) {
		A.listenGoodMood(function () {
			A.receiveFlower(flower);
		});
	}
};


var A = {
	receiveFlower: function (flower) {
		console.info("收到了花 " + flower);
	},
	listenGoodMood: function (fn) {
		setTimeout(function () {
			fn();
		}, 10000);
	}
};


xiaoming.sendFlower(B);
*/

//图片懒加载
var myImage = (function () {
	var imgNode = document.createElement("img");
	document.body.appendChild(imgNode);

	return {
		setSrc: function (src) {
			imgNode.src = src;
		}
	};
})();

var proxyImage = (function () {
	var img = new Image;
	img.onload = function () {
		myImage.setSrc(this.src);
	};

	return {
		setSrc: function (src) {
			myImage.setSrc("loading");
			img.src = src;
		}
	};
})();