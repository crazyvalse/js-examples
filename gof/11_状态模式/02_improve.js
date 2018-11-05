/**
 * Created by codingnuts on 2018/5/26.
 */

var OffLightState = function (light) {
	this.light = light;
};

OffLightState.prototype.buttonWasPressed = function () {
	console.info('弱光');
	this.light.setState(this.light.weakLightState);
};

var WeakLightState = function (light) {
	this.light = light;
};

WeakLightState.prototype.buttonWasPressed = function () {
	console.info('强光');
	this.light.setState(this.light.strongLightState);
};

var StrongLightState = function (light) {
	this.light = light;
};

StrongLightState.prototype.buttonWasPressed = function () {
	console.info('关灯');
	this.light.setState(this.light.offLightState);
};

var Light = function () {
	this.offLightState = new OffLightState(this);
	this.weakLightState = new WeakLightState(this);
	this.strongLightState = new StrongLightState(this);
	this.button = null;
	this.curState = this.offLightState;
};

Light.prototype.setState = function (newState) {
	this.curState = newState;
};

Light.prototype.click = function () {
	this.curState.buttonWasPressed();
};

var light = new Light();

light.click();
light.click();
light.click();
light.click();