/**
 * Created by codingnuts on 2018/5/26.
 */

var Light = function () {
	this.state = "off";
	this.button = null;
};

Light.prototype = {
	init: function () {
		var button = document.createElement("button"),
		self = this;

		button.innerHTML = "开关";
		this.button = document.body.appendChild(button);
		this.button.onclick = function () {
			self.buttonWasPressed();
		};
	}
};

Light.prototype.buttonWasPressed = function () {
	if(this.state === "off"){
		console.info("开灯");
		this.state = "on";
	} else if (this.state === "on") {
		console.info("关灯");
		this.state = "off";
	}
};

var light = new Light();
light.buttonWasPressed();
light.buttonWasPressed();
light.buttonWasPressed();