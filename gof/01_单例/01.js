/**
 * Created by codingnuts on 2018/3/24.
 */

//全局只有一个实例 -
// 1. 可做命名空间
var A = {
	util: {
		util_method1: function () {
			// ...
		}
	},
	tool: {
		tool_method1: function () {

		}
		// ...
	}
};

// 2. 静态变量
var CONFIG = (function () {
	//私有
	var conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	};

	// 返回取值器
	return {
		get: function (name) {
			return conf[name] ? conf[name] : null;
		}
	};
})();

// 3. 惰性单例
var LazySingle = (function () {
	var _instance = null;

	//放到function 中，就不会一上来就加载了
	function Single () {
		return {
			publicMethod: function () {

			},
			publicProperty: '1.0'
		};
	}

	//同理
	return {
		getInstance: function () {
			if (!_instance) {
				_instance = Single();
			}
			return _instance;
		}
	};

})();

// 4. 通用方法
var EnsureSingleton = function (fn) {
	var instance;
	return function () {
		return instance || (instance = fn.apply(this, arguments));
	};
};

var Singleton = EnsureSingleton(function (a) {
	return {
		c: 123
	}
});

/*var a = Singleton();
var b = Singleton();
console.info(a == b);
console.info(a.c);
a.c = 321;
console.info(b.c);*/

var ss = (function () {
	var _instance = null;

	//放到function 中，就不会一上来就加载了
	function Single () {
		console.info(123)
		return {
			publicMethod: function () {

			},
			publicProperty: '1.0'
		};
	}

	//同理
	return function () {
			if (!_instance) {
				_instance = Single();
			}
			return _instance;
		}
})();
