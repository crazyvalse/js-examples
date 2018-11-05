/**
 * Created by codingnuts on 2018/5/24.
 */

var Model = function (sex) {
	this.sex = sex;
};

Model.prototype.takePhoto = function () {
	console.info("sex=", this.sex, "underwear=", this.underwear);
};

var maleModel = new Model("male"),
	femaleModel = new Model("male");

for (var i = 1; i <= 50; i++) {
	maleModel.underwear = "underwear" + i;
	maleModel.takePhoto();
}

for (var i = 1; i <= 50; i++) {
	femaleModel.underwear = "underwear" + i;
	femaleModel.takePhoto();
}
