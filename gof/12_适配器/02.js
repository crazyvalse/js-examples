/**
 * Created by codingnuts on 2018/5/29.
 */
var googleMap = {
	show: function () {
		console.info("开始渲染谷歌地图");
	}
};

var baiduMap = {
	display: function () {
		console.info("开始渲染百度地图");
	}
};

var baiduMapAdapter = {
	show: function () {
		return baiduMap.display();
	}
};

var renderMap = function (map) {
	if(map.show instanceof Function) {
		map.show();
	}
};
renderMap(googleMap);
renderMap(baiduMap);