/**
 * Created by codingnuts on 2018/5/29.
 */

var getGuangdongCity = function () {
	var guangdongCity = [
		{
			name: "shenzhen",
			id: 11
		},
		{
			name: "guangzhou",
			id: 12
		}
	];

	return guangdongCity;
};


var render = function (fn) {
	console.info("开始渲染广东省地图");
	//document.write(JSON.stringify(fn));
	console.info("------------------", JSON.stringify(fn()), "---------------------");
};

var addressAdapter = function (oldAddressfn) {
	var address = {},
		oldAddress = oldAddressfn();

	for(var i = 0 , c; c = oldAddress[i ++];){
		address[c.name] = c.id;
	}

	return function () {
		return address;
	};
};

render(addressAdapter(getGuangdongCity));

