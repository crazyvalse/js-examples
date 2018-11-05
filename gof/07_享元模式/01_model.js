/**
 * Created by codingnuts on 2018/5/24.
 */

var Model = function (sex, underwear) {
	this.sex = sex;
	this.underwear = underwear;
};

Model.prototype.takePhoto = function () {
	console.info("sex=", this.sex, "underwear=", this.underwear);
};

for(var i = 1; i <= 50; i++) {
	var maleModel = new Model("male", "underwear" + i);
	maleModel.takePhoto();
}

for(var i = 1; i <= 50; i++) {
	var femaleModel = new Model("female", "underwear" + i);
	femaleModel.takePhoto();
}